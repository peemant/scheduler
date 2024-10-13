import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import moment from "moment";


const app = express();


const port = 80;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Variables

var projectData;
var newPRIMARYKEY;


app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Listenning on port : ${port}`);
});