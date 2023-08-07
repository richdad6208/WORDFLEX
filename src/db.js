import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/wordFLEX");
const db = mongoose.connection;

const handleError = (error) => {
  console.log(error);
};
const handleOpen = () => {
  console.log("DataBase ⭕");
};

db.once("open", handleOpen);
db.on("error", handleError);
