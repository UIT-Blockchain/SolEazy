package api

import (
	"github.com/UIT-Blockchain/Guzer/util"
	"github.com/go-playground/validator/v10"
)

var validDate validator.Func = func(fieldLevel validator.FieldLevel) bool {
	if date, ok := fieldLevel.Field().Interface().(string); ok {
		return util.IsDateString(date)
	}
	return false
}
