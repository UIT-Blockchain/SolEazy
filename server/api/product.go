package api

import (
	"net/http"
	"time"

	db "github.com/UIT-Blockchain/Guzer/db/sqlc"
	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
	_ "github.com/lib/pq"
)

type createProductRequest struct {
	Pid         string  `json:"pid" binding:"required"`
	Name        string  `json:"name" binding:"required"`
	Description string  `json:"description" binding:"required"`
	UnitName    string  `json:"unit_name" binding:"required"`
	PriceSol    float64 `json:"price_sol" binding:"required"`
	PriceUsd    float64 `json:"price_usd" binding:"required"`
}

type productResponse struct {
	Pid       string    `json:"pid"`
	Name      string    `json:"name"`
	Description string `json:"description"`
	PriceSol  float64   `json:"price_sol"`
	PriceUsd  float64   `json:"price_usd"`
	CreatedAt time.Time `json:"created_at"`
}

func newProductResponse(product db.Product) productResponse {
	return productResponse{
		Pid:       product.Pid,
		Name:      product.Name,
		Description: product.Description,
		PriceSol:  float64(product.PriceSol),
		PriceUsd:  float64(product.PriceUsd),
		CreatedAt: product.CreatedAt,
	}
}

func (server *Server) createProduct(ctx *gin.Context) {
	var req createProductRequest
	if err := ctx.ShouldBindJSON(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}
	arg := db.CreateProductParams{
		Pid:         req.Pid,
		Name:        req.Name,
		Description: req.Description,
		UnitName:    req.UnitName,
		PriceSol:    req.PriceSol,
		PriceUsd:    req.PriceUsd,
	}

	product, err := server.store.CreateProduct(ctx, arg)
	if err != nil {
		if pqErr, ok := err.(*pq.Error); ok {
			switch pqErr.Code.Name() {
			case "unique_violation":
				ctx.JSON(http.StatusForbidden, errorResponse(err))
				return
			}
		}
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	rsp := newProductResponse(product)
	ctx.JSON(http.StatusOK, rsp)
}

type listProductRequest struct {
	PageID   int32 `form:"page_id" binding:"required,min=1"`
	PageSize int32 `form:"page_size" binding:"required,min=1,max=10"`
}

func (server *Server) listCustomers(ctx *gin.Context) {
	var req listProductRequest
	if err := ctx.ShouldBindQuery(&req); err != nil {
		ctx.JSON(http.StatusBadRequest, errorResponse(err))
		return
	}
	arg := db.ListProductsParams{
		Limit:  req.PageSize,
		Offset: (req.PageID - 1) * req.PageSize,
	}
	products, err := server.store.ListProducts(ctx, arg)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, errorResponse(err))
		return
	}

	rsp := make([]productResponse, req.PageSize)
	for index, value := range products {
		rsp[index] = newProductResponse(value)
	}
	ctx.JSON(http.StatusOK, rsp)

}
