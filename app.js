const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
const posts = [];

app.get("/", function(req, res) {
  res.render('home');
})
app.get("/compose", function(req, res) {
  res.render('compose');
})
app.get("/article", function(req, res) {
  res.render('article',{
  	posts:posts

    });
})
app.post("/compose",function(req,res){
  post={
    title:req.body.val1,
    content:req.body.val2,
  }
  posts.push(post);
  res.redirect("/article");
})






app.listen(3000, function(argument) {
  console.log("server is running on port 3000")
})
