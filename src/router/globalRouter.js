import express from "express";
import {
  getLogin,
  getResister,
  postResister,
  githubLogin,
} from "../controller/userController";
const globalRouter = express.Router();

globalRouter.route("").get((rep, res) => {
  res.render("home");
});
globalRouter.route("/login").get(getLogin);
globalRouter.route("/resister").get(getResister).post(postResister);
globalRouter.route("/githubLogin").get(githubLogin);
export default globalRouter;
