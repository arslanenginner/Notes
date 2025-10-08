const express = require("express");
const router = express.Router();

// Home page route.
router.get("/", (req, res) => {         // starat with /blog/  (home) handle by this
  res.send("Blog home page");
});

// About page route.
router.get("/about", (req, res) => {           // starat with /blog/about   handle by this
  res.send("Blog About page");
});

// Blog page route.
router.get('/blogposts/:slug', (req, res) => {   //     /blog/blogposts/blog_name
  res.send(`Fetching Blogs requests ${req.params.slug}`);
});

module.exports = router;