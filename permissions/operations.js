const { ROLE, projects } = require("../data");

//view specific ad
function view_ad(user, project) {
  return projects;
  //return user.role === ROLE.ADMIN || project.userId === user.id;
}

//view all ads
function user_access(user, projects) {
  return projects;
}

//delete ad guard
//only owner of ads and admin can delete
function delete_ad(user, ad) {
  if (user.role === ROLE.ADMIN) return ad;
  return ad.userId === user.id;
}

//edit ad guard
//only owner of ad and admin can edit
function edit_ad(user, ad) {
  if (user.role === ROLE.ADMIN) return ad;
  return ad.userId === user.id;
}
module.exports = {
  view_ad,
  user_access,
  delete_ad,
  edit_ad,
};
