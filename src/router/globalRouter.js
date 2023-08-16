import express from "express";
import {
  getLogin,
  getRegister,
  postRegister,
  githubLogin,
} from "../controller/userController";
const globalRouter = express.Router();

globalRouter.route("").get((rep, res) => {
  res.render("home");
});
globalRouter.route("/login").get(getLogin);
globalRouter.route("/register").get(getRegister).post(postRegister);
globalRouter.route("/githubLogin").get(githubLogin);
export default globalRouter;
