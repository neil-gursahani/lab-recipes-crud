const express = require("express");
const app = express();

// set up handlebars

app.use("/recipes", require("./routes/recipes"));

app.listen(3000, ()=> {
    console.log("Webserver is listening");
})