import express from "express";
import { getLogin } from "../controller/userController";
const globalRouter = express.Router();

globalRouter.route("").get((rep, res) => {
  res.render("home");
});
globalRouter.route("/login").get(getLogin);

export default globalRouter;
