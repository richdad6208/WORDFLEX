import express from "express";
import {
  getLogin,
  getLogout,
  postLogin,
  getRegister,
  postRegister,
  githubLogin,
} from "../controller/userController";
import { isAuthenticated } from "../middleware";
const app = express();
const globalRouter = express.Router();

globalRouter.route("").get((rep, res) => {
  res.render("home");
});
globalRouter.route("/login").get(getLogin).post(postLogin);
globalRouter.route("/logout").get(getLogout);
globalRouter.route("/register").get(getRegister).post(postRegister);
globalRouter.route("/githubLogin").get(githubLogin);

export default globalRouter;
