const express = require("express")
const app = express();
app.engine('html', require("ejs").renderFile);
app.use(express.static("public"));
const faker = require('faker');

//routes
app.get("/index", function(req,res){
    let fakeData = faker.lorem.paragraph();
   res.render("index.html", {fakeData: fakeData}); 
});

app.get("/history", function(req,res){
   res.render("history.html"); 
});

app.get("/development", function(req,res){
   res.render("development.html")
});

app.get("/uses", function(req, res) {
    res.render("uses.html")
});

//listener
app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Express Server is Running..."); 
});