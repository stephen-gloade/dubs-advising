
"use strict";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");


// IMPORT HANDLERS
const { allSportsHandler } = require("./handlers/allSportsHandler");
const { individualSportHandler } = require("./handlers/individualSportHandler");
const { deleteUser, getUsers, postQuestion } = require("./handlers/mongoHandlers");

const PORT = 4000;

express()
    .use(cors())
    .use(morgan("tiny"))
    .use(express.static("./server/assets"))
    .use(express.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))


    .post("/send-question", postQuestion)
    .get("/sports/:sportKey/odds", individualSportHandler)
    .get("/sports", allSportsHandler)
    .get("/users", getUsers)
    
    .delete("/users/:userId", deleteUser)


    // THIS IS BEING SAVED FOR LATER
    // .get("/users/verify-email-redirect", emailVerificationRedirect)
    // .get("/users/verify-email", verifyEmail)
    

    .listen(PORT, () => console.info(`Listening on port ${PORT}`));