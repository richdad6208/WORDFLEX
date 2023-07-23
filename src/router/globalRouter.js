import express from "express";
const globalRouter = express.Router();

globalRouter.route("").get((rep, res) => {
  res.render("home");
});
export default globalRouter;
