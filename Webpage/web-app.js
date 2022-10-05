const { response } = require("express");
const express = require("express");
const app = express();
const host = '0.0.0.0';
const PORT = process.env.PORT || 3000;


const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));
app.get("/", function (req, res) {
    res.render("index");
});

// Setup Handlebars
const handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({
    defaultLayout: "main",
}));
app.set("view engine", "handlebars");


app.listen(PORT, host, function() {
    console.log(`Example app listening on port ${PORT}!`);
});
