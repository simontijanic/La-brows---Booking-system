const express = require("express")

const app = express()
require('dotenv').config();

const indexRoute = require("./routes/index")

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(indexRoute)

app.listen(8000, ()=>{
    console.log("listening")
})