const express = require("express")
const product = require('./Routes/Product')
const history = require('./Routes/History')
const category = require('./Routes/Category')
const Routes = express.Router()

Routes.use("/product", product)
Routes.use("/history", history)
Routes.use("/category", category)



module.exports = Routes