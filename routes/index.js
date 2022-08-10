// main route
const express = require("express")
const router = express.Router()

// @ login/ landing page
// @ route = GET request to '/'
router.get("/", (req, res) => {
  res.send("Login!")
})

// @ get request to "/dashboard"
router.get("/dashboard", (req, res) => {
  res.send("Dashboard!")
})

module.exports = router
