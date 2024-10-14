import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import moment from "moment";


const app = express();


// const port = process.env.PORT || 3001;
const port = 80;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Variables

var projectData;
var newPRIMARYKEY;


app.get("/", async (req, res) => {
    res.render("index.ejs", {
        side_bar_index_menu: "side_bar_index.ejs"
    });
});

app.listen(port);

// const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// server.keepAliveTimeout = 120 * 1000;
// server.headersTimeout = 120 * 1000;

