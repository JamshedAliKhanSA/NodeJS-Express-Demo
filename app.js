var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),


    app = express();

const port = process.env.PORT || 3000;
mongoose.connect("mongodb://localhost:27017/Shop");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(require("./src/routes/index"));


app.listen(port, () => {
    console.log(`Port is Running at http://localhost:${port}`);
})
