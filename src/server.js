import express from "express";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import "./db.js";
const app = express();
const PORT = "4000";

app.set("views", "src/views");
app.set("view engine", "pug");
app.use(express.static("src"));
app.use("/", globalRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log("Server ⭕");
});
