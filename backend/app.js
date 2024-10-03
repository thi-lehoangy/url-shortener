const express = require("express")
const cors = require("cors")
const queries = require("./database/queries")

const controllers = require("./controllers")

module.exports = async (app) => {
    app.use(express.json());

    // Get all urls in the database 
    app.get("/", controllers.getAllUrls)

    // Get the original url and redirect to that location 
    app.get("/:redirect_code", controllers.getLongUrl)

    // Shorten a url and store the pairing in the database 
    app.post("/", controllers.shortenUrl)
}