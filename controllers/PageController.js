const Blog = require("../models/Blog")

exports.getAboutPage = (req, res) => {
    res.render("about");
}

exports.getAddPage = (req, res) => {
    res.render("add_post");
}

exports.getEditPage = async (req, res) => {
    const post = await Blog.findById(req.params.id);
    res.render('edit', {
      post,
    });
}