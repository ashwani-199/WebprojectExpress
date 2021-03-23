const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port  = 8000

// public static path
const static_path = (path.join(__dirname, "../public"));
const templates_path = path.join(__dirname, "../templates/views");
const partials_path = (path.join(__dirname, "../templates/partials"));

app.use(express.static(static_path));

app.set('view engine', 'hbs');
app.set('views', templates_path);
hbs.registerPartials(partials_path);



// Routing

app.get("", (req, res) =>{
    res.render('index')
})

app.get("/about", (req, res) =>{
    res.render('about')
})

app.get("/weather", (req, res) =>{
    res.render('weather')
})

app.get("*", (req, res) =>{
    res.render("404error",{
        errorMsg:'Opps! Page Not Found'
    })
})

app.listen(port,() =>{
    console.log(`Listening to the port at ${port}`)
})