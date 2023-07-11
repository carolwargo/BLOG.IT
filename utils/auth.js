const withAuth = (req, res, next) => {
  
  // CALLBACK request checking for session property
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
  };
  
  module.exports = withAuth;