const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

// GET ALL posts from homepage
router.get("/", (req, res) => {
  console.log("======================");
  Post.findAll({
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      // PASS a single post object into the homepage template
      // SPECIFY TEMPLATE (homepage.handlebars) and data (dbPostData obj)
      // LOOP OVER and MAP each Sequelize obj into serialized version, saving results in a new posts array
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // SERIALIZE to GET properties() of each obj, but not obj itself
      // .render() method takes 2 args: 1) template to render, 2) obj with properties to pass into template
      res.render("homepage", { posts, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET single post
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "post_id", "user_id", "created_at"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      //   SERIALIZE data
      const post = dbPostData.get({ plain: true });

      //   PASS DATA to template with session variable
      res.render("single-post", { post, loggedIn: req.session.loggedIn });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/login", (req, res) => {
    if (req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    // lOGIN second argument to render() is an obj with a loggedIn property set to the value of req.session.loggedIn
    res.render("login");
  });

module.exports = router;