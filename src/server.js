import "dotenv/config";
import express from "express";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import "./db.js";
import morgan from "morgan";

const app = express();
const PORT = "4000";
app.use(morgan("dev"));
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src"));
app.use("/assets", express.static("assets"));
app.use("/", globalRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server ⭕");
});
