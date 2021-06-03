const express = require('express');
const mongoose = require("mongoose")
const methodOverride = require('method-override');

const PostController = require("./controllers/PostController");
const PageController = require("./controllers/PageController");

const ejs = require("ejs");
const path = require("path");
const Blog = require("./models/Blog")


const app = express();

//Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

//DB Connect
mongoose.connect("mongodb://localhost/cleanblog-test-db",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//Template Engine
app.set("view engine","ejs")



app.get('/', PostController.getAllPosts)
app.get('/posts/:id', PostController.getPost);
app.post("/posts", PostController.createPost)
app.put('/posts/:id', PostController.updatePost);
app.delete("/posts/:id", PostController.deletePost);

app.get('/about', PageController.getAboutPage)
app.get('/add_post', PageController.getAddPage)
app.get('/posts/edit/:id', PageController.getEditPage);







const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});