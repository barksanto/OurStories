const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const exphbs = require("express-handlebars") // templates

const morgan = require("morgan") // logging requests (https & network)

// Load config
dotenv.config({ path: "./config/config.env" }) // global variables

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// Handlebars
app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", ".hbs") // middleware to use hbs extension

// Routes
app.use("/", require("./routes/index"))

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, on PORT: ${PORT}`
  )
)
