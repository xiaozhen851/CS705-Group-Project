const express = require("express");
const { redirect } = require("express/lib/response");
const router = express.Router();

router.get("/", async function(req, res) {


    res.render("home");
});

router.get("/information", async function(req, res) {

    res.render("info");
});

router.get("/suggestions", async function(req, res) {

    
    res.render("suggestions");
});

router.post("/submitSuggestion", async function(req, res) {
    const webAddress = req.body.webAddress;
    const imageInfo = req.body.imageInfo;
    const recieverEmail = req.body.receiverEmail;
    const senderName = req.body.senderName;
    const altText = req.body.altText;

    res.setToastMessage("Suggestion submitted!");
    res.redirect("/");

});  



module.exports = router;