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

// GenerateTodo
func CreateTodo(c *fiber.Ctx) error {
	db := database.DBConn
	todo := new(TodoModel)
	// Throws error if the json data can't be parsed
	err := c.BodyParser(todo)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Check the input", "data": err})
	}
	err = db.Create(&todo).Error
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Could not create todo", "data": err})
	}
	return c.JSON(&todo)
}	