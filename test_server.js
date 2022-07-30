const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./posts");

mongoose.connect("mongodb://localhost/xxxx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", async () => {
  if ((await Post.countDocuments().exec()) > 0) return;

  Promise.all([
    Post.create({ name_of_business: "Post 1" , ad_title: "Ad 1" }),
    Post.create({ name_of_business: "Post 2" , ad_title: "Ad 2" }),
    Post.create({ name_of_business: "Post 3" , ad_title: "Ad 3" }),
    Post.create({ name_of_business: "Post 4" , ad_title: "Ad 4" }),
    Post.create({ name_of_business: "Post 5" , ad_title: "Ad 5" }),
    Post.create({ name_of_business: "Post 6" , ad_title: "Ad 6" }),
    Post.create({ name_of_business: "Post 7" , ad_title: "Ad 7" }),
    Post.create({ name_of_business: "Post 8" , ad_title: "Ad 8" }),
    Post.create({ name_of_business: "Post 9" , ad_title: "Ad 9" }),
    Post.create({ name_of_business: "Post 10" , ad_title: "Ad 10" }),
    Post.create({ name_of_business: "Post 11" , ad_title: "Ad 11" }),
    Post.create({ name_of_business: "Post 12" , ad_title: "Ad 12" }),
  ]).then(() => console.log("Added Posts"));
});

app.get("/posts", paginatedResults(Post), (req, res) => {
  res.json(res.paginatedResults);
});

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

app.listen(3000);
