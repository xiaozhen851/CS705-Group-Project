const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();

router.get("/", async function(req, res) {


    res.render("home");
});

router.get("/information", async function(req, res) {

    res.render("info");
});


module.exports = router;