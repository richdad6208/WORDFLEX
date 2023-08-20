import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  userName: { type: String, required: true, unique: true, min: 1, max: 15 },
  password: { type: String, required: true, min: 1, max: 15 },
  email: { type: String, unique: false, min: 1, max: 20 },
  realName: { type: String, required: true, min: 1, max: 10 },
});

const User = mongoose.model("User", userSchema);

export default User;
