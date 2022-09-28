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


app.listen(PORT, host, function() {
    console.log(`Example app listening on port ${PORT}!`);
});
