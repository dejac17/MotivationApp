package models

import (
	"my-app/database"
	"time"
	"github.com/gofiber/fiber/v2"
)

// Similar to defining a model in express
// Define how data will be stored
type TodoModel struct {
	ID uint `gorm:"primarykey" json:"id"`
	Title string `json:"title"`
	Status bool `json:"completed"`
	Created time.Time `json:"created_at"`
}

// GetTodos gets all of the todos from the database and returns them as json
func GetTodos(c *fiber.Ctx) error {
	db := database.DBConn
	var todos []TodoModel
	db.Find(&todos)
	return c.JSON(&todos)
}