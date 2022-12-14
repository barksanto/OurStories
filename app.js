const path = require("path")
const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const exphbs = require("express-handlebars") // templates
const passport = require("passport")

const morgan = require("morgan") // logging requests (https & network)

// Load config
dotenv.config({ path: "./config/config.env" }) // global variables

// Passport Config
require("./config/passport")(passport)

connectDB()

const app = express()

// Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// Handlebars
app.engine(".hbs", exphbs.engine({ defaultLayout: "main", extname: ".hbs" }))
app.set("view engine", ".hbs") // middleware to use hbs extension

// Set Passport Middleware
app.use(passport.initialize())
app.use(passport.session()) // in order for passport to work with sessions, we need to imlement express-session

// Static folder
app.use(express.static(path.join(__dirname, "public"))) // make public the static folder, use 'public' as the var name
// app.use(express.static(__dirname + "/public"))

// Routes
app.use("/", require("./routes/index"))

const PORT = process.env.PORT || 3000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, on PORT: ${PORT}`
  )
)
