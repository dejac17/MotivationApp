package main

import(
	"github.com/gofiber/fiber/v2"
)

func helloWorld(c *fiber.Ctx) error {
	return c.SendString("Hello world")
}
// New creates a new Fiber named instance
func main() {
	app := fiber.New()

	app.Get("/", helloWorld)

	app.Listen(":3000")
}