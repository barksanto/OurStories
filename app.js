const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")

// Load config
dotenv.config({ path: "./config/config.env" }) // global variables

connectDB()

const app = express()
const PORT = process.env.PORT || 3000

console.log(PORT)
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode, on PORT: ${PORT}`
  )
)
