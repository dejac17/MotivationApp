package main

import (
	"fmt"
	"log"
	"my-app/database"
	"my-app/models"

	"github.com/gofiber/fiber/v2"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const (
	hostName string = "localhost"
	port     string = "5432"
	dbName   string = "Todo"
	user     string = "postgres"
	password string = "my-app"

)
// Init creates a connection with postgres and tests it
func init() {
	var err error
	// Using verbs to refer to consts
	dsn := fmt.Sprintf("host=%s port=%s dbName=%s user=%s password=%s", hostName, port, dbName, user, password)
	database.DBConn, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Did not connect to database")
	}
	fmt.Print("Connected to Postgres!")
	// Automatically migrates data
	database.DBConn.AutoMigrate(&models.TodoModel{})
	fmt.Print("Data migrated to database")
}


// New creates a new Fiber named instance
func main() {
	app := fiber.New()

	app.Get("/", helloWorld)

	app.Listen(":3000")
}