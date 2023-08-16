import User from "../model/User";
import bcrypt from "bcrypt";

export const getLogin = (req, res) => {
  res.render("user/login");
};
export const getRegister = (req, res) => {
  res.render("user/register");
};
export const postRegister = async (req, res) => {
  console.log("hi");
  let { name, password, passwordConfirm, email, address, realName } = req.body;
  console.log(password.__proto__);
  if (password !== passwordConfirm) {
    return res.render("user/register", {
      errorMessagePassword: "비밀번호가 일치하지 않습니다",
    });
  }
  password = await bcrypt.hashSync(password, 5);
  const checkName = await User.exists({ name });
  if (checkName) {
    return res
      .status(404)
      .render("user/register", { errorMessageId: "아이디가 존재합니다" });
  }

  const user = await User.create({
    name,
    password,
    email,
    address,
    realName,
  });
  console.log(user);
  return res.redirect("/");
};

export const githubLogin = async (req, res) => {
  // const baseUrl = "https://github.com/login/oauth/authorize";
  // const query = `?client_id=${process.env.CLIENT_ID}`;
  // function objectToQueryString(obj) {
  //   return Object.entries(obj).join("&").replaceAll(",", "=");
  // }
  // const setting = {
  //   client_id: process.env.CLIENT_ID,
  //   scope: {
  //     read: "user",
  //     user: "email",
  //   },
  // };

  // const settingQuery = objectToQueryString(setting);
  // console.log(settingQuery);
  // return res.redirect(`${baseUrl}${query}`);
  return res.end();
};
