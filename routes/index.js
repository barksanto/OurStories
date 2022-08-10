// main route
const express = require("express")
const router = express.Router()

// @ login/ landing page
// @ route = GET request to '/'
router.get("/", (req, res) => {
  res.render("login")
})

// @ get request to "/dashboard"
router.get("/dashboard", (req, res) => {
  res.render("dashboard")
})

module.exports = router
