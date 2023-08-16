import mongoose from "mongoose";
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
const handleError = (error) => {
  console.log(error);
};
const handleOpen = () => {
  console.log("DataBase ⭕");
};

db.once("open", handleOpen);
db.on("error", handleError);
