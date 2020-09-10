const express = require("express")
const controller = require("../Controller/Product")
const Route = express.Router()

Route.get("/", controller.all)
Route.post("/", controller.add)
Route.put("/", controller.edit)
Route.delete("/delete/:id", controller.delete)
Route.get("/search", controller.search)
Route.get("/filter", controller.filter)

module.exports = Route
