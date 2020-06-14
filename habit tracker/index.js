const express = require("express");
const port = 1002;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

const app = express();

app.use(express.static("./assets"));
app.use(expressLayouts);
app.set('layout extractStyles', true);

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({extended: true}));

app.use("/", require("./routes/index"));

app.listen(port,function(err){
    if(err)
    {
        console.log("error:", err);
        return;
    }
    console.log("server is successfully setup and running on the port:", port);
});