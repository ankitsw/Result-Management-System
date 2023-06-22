const express = require("express");
//express app
const app = express();

const port = 3000;
const mongoose = require('mongoose'); //to connect to mongodb

//connect to mongodb
mongoose.connect("mongodb+srv://ankitsherawat001:motthyJJLtGkroS0@cluster0.rmsw5dr.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
//checking the connection
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected succesfully"));

//register view engine
app.set('view engine', 'ejs');
//middleware and static files
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

//express layouts
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

//teacher and student routes
const teachRoutes = require("./routes/teacherRoutes")
const studRoutes = require("./routes/studentRoutes")
app.use("/teacher",teachRoutes);
app.use("/student",studRoutes);

//routes
app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});