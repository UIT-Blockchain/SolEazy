package api

import (
	"fmt"

	db "github.com/UIT-Blockchain/Guzer/db/sqlc"
	"github.com/UIT-Blockchain/Guzer/token"
	"github.com/UIT-Blockchain/Guzer/util"
	"github.com/gin-gonic/gin"
)

type Server struct {
	config     util.Config
	store      db.Store
	tokenMaker token.Maker
	router     *gin.Engine
}

func NewServer(config util.Config, store db.Store) (*Server, error) {
	tokenMaker, err := token.NewPasetoMaker(config.TokenSymmetricKey)
	if err != nil {
		return nil, fmt.Errorf("cannot create token maker: %w", err)
	}

	server := &Server{
		store:      store,
		config:     config,
		tokenMaker: tokenMaker,
	}
	server.setupRouter()
	return server, nil
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}

func (server *Server) Start(address string) error {
	return server.router.Run(address)
}

func (server *Server) setupRouter() {
	router := gin.Default()
	router.Use(CORSMiddleware())
	router.POST("/api/product", server.createProduct)
	router.GET("/api/products", server.listCustomers)
	server.router = router
}

// func (server *Server) setupGinCustomeValidaton() {
// 	if v, ok := binding.Validator.Engine().(*validator.Validate); ok {
// 		v.RegisterValidation("date", validDate)
// 	}
// }
