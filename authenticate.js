//used for login
function authUser(req, res, next) {
    if (req.user == null) {
      res.status(401); //unauthorized access
      return res.send("sign in please");
    }
    next();
  }
  
  //used for authenticating operations
  function authRole(role) {
    return (req, res, next) => {
      if (req.user.role != role) {
        res.status(403); //forbidden access
        return res.send("forbidden access");
      }
      next();
    };
  }
  
  module.exports = {
    authUser,
    authRole,
  };
  