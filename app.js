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
  res.render('home',{
  	posts:posts

    });
})
app.get("/compose", function(req, res) {
  res.render('compose');
})
app.post("/compose",function(req,res){
  post={
    title:req.body.val1,
    content:req.body.val2,
  }
  posts.push(post);
  res.redirect("/");
})






app.listen(3000, function(argument) {
  console.log("server is running on port 3000")
})
