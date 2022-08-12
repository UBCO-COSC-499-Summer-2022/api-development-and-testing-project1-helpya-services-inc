const express = require("express");
const router = express.Router();
const sql = require("../models/db");
//const { projects } = require("../data");  //accessing data from db
const { authUser } = require("../../authenticate");
const {
  view_ad,
  delete_ad,
  user_access,
  edit_ad,
} = require("../../permissions/operations");

const projects = (id) => {
  sql.query(`SELECT role FROM consumer WHERE consumerID = ${id}`);
  if (err) {
    console.log("error can not find account: ", err);
    result(err, null);
    return;
  }
  console.log("found successfully ");
};
router.get("/", authUser, (req, res) => {
  res.json(user_access(req.user, projects));
});

router.get("/:ad_ID", setProject, authUser, authGetProject, (req, res) => {
  res.json(req.project);
});

router.delete(
  "/:ad_ID",
  setProject,
  authUser,
  authDeleteProject,
  (req, res) => {
    res.send("sucessfully delete");
  }
);

router.put("/:ad_ID", setProject, authUser, authEditAd, (req, res) => {
  res.send("sucessful, edit enabled");
});
function setProject(req, res, next) {
  const ad_ID = parseInt(req.params.ad_ID);
  req.project = projects.find((project) => project.id === ad_ID);

  if (req.project == null) {
    res.status(404);
    return res.send("Ad not found");
  }
  next();
}

function authGetProject(req, res, next) {
  if (!view_ad(req.user, req.project)) {
    res.status(403);
    return res.send("not authorized operation, can not view");
  }
  next();
}

function authDeleteProject(req, res, next) {
  if (!delete_ad(req.user, req.project)) {
    res.status(403);
    return res.send("not authorized to delete");
  }
  next();
}

function authEditAd(req, res, next) {
  if (!edit_ad(req.user, req.project)) {
    res.status(403);
    return res.send("not authorized to edit");
  }
  next();
}
module.exports = router;
