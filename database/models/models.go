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
}

// GetTodos gets all of the todos from the database and returns them as json
func GetTodos(c *fiber.Ctx) error {
	db := database.DBConn
	var todos []TodoModel
	db.Find(&todos)
	return c.JSON(&todos)
}

func GetTodoById(c *fiber.Ctx) error {
	// Gets route paramaters by id
	id := c.Params("id")
	db := database.DBConn
	var todo TodoModel
	//  Return error is todo can not be found by id
	err := db.Find(&todo, id).Error
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Could not find todo by Id", "data": err})
	}
	return c.JSON(&todo)
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
//  UpdateTodo updates the information stored in original model
func UpdateTodo(c *fiber.Ctx) error {
	type UpdatedTodoModel struct {
		Title string `json:"title"`
		Status bool `json:"completed"`
		Created time.Time `json:"created_at"`
	}

	id := c.Params("id")
	db := database.DBConn
	var todo TodoModel
	err := db.Find(&todo, id).Error
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "Could not find todo by Id", "data": err})
	}
	var updatedTodo UpdatedTodoModel
	err = c.BodyParser(&updatedTodo)

	if err != nil {
		return c.Status(500).JSON(fiber.Map{"status": "error", "message": "Reveiw updated input", "data": err})
	}

	todo.Title = updatedTodo.Title
	todo.Status = updatedTodo.Status
	db.Save(&todo)
	return c.JSON(&todo)
}

func DeleteTodoById(c *fiber.Ctx) error {
	id := c.Params("id")
	db := database.DBConn
	var todo TodoModel
	//  Return error is todo can not be found by id
	err := db.Find(&todo, id).Error
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"status": "error", "message": "Could not find todo by Id", "data": err})
	}

	db.Delete(&todo)
	return c.SendStatus(200)
}
