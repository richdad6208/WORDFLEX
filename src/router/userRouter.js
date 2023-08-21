import express from "express";
import { getProfile } from "../controller/userController";
const buserRouter = express.Router();

userRouter.route("/").get((req, res) => {
  res.send("user");
});
userRouter.route("/profile/:id").get(getProfile);

export default userRouter;
