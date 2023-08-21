export const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    res.locals.loggedIn = req.session.user;
    next();
  } else next("route");
};
