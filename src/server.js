import express from "express";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import "./db.js";
import "dotenv/config";

const app = express();
const PORT = "4000";

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
