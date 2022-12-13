package main

import (
	"fmt"
	"log"
	"my-app/database"
	"my-app/database/models"

	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)
func helloWorld(c *fiber.Ctx) error {
	return c.SendString("Hello world")
}

// Init creates a connection with postgres and tests it
func initDB() {
	var err error
	// Using verbs to refer to consts
	dsn := "host=localhost port=5432 dbname=goTodo user=postgres password=myapp"
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Did not connect to database")
	}
	fmt.Print("Connected to Postgres!")
	// Automatically migrates data
	database.DBConn.AutoMigrate(&models.TodoModel{})
	fmt.Print("Data migrated to database")
}

// Routes
func setRoutes(app *fiber.App) {
	app.Get("/todos", models.GetTodos)
	app.Post("/todos", models.CreateTodo)
}


// New creates a new Fiber named instance
func main() {
	app := fiber.New()
	initDB()
	app.Get("/", helloWorld)
	setRoutes(app)
	app.Listen(":3000")
}