import express from "express";
import {
  getLogin,
  postLogin,
  getRegister,
  postRegister,
  githubLogin,
} from "../controller/userController";
const globalRouter = express.Router();

globalRouter.route("").get((rep, res) => {
  res.render("home");
});
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/register").get(getRegister).post(postRegister);
globalRouter.route("/githubLogin").get(githubLogin);
export default globalRouter;
