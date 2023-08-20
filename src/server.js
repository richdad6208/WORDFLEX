import "dotenv/config";
import express from "express";
import globalRouter from "./router/globalRouter";
import userRouter from "./router/userRouter";
import "./db.js";
import { sayHi } from "./middleware";
import morgan from "morgan";
import session from "express-session";

const app = express();

app.use(morgan("dev"));
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("src"));

// app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

app.use("/assets", express.static("assets"));
app.use("/", sayHi, globalRouter);
app.use("/user", userRouter);

const PORT = "4000";

app.listen(PORT, () => {
  console.log("Server ⭕");
});
