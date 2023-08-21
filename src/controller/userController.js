import User from "../model/User";
import bcrypt from "bcrypt";

export const getLogin = (req, res) => {
  res.render("user/login");
};
export const postLogin = async (req, res) => {
  const { userName, password } = req.body;

  const user = await User.findOne({ userName });
  if (!user) {
    return res.status(404).render("user/login", {
      errorMessageId: "계정이 존재하지 않습니다",
    });
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return res.status(404).render("user/login", {
      errorMessagePassword: "비밀번호가 일치하지 않습니다",
    });
  }
  req.session.user = user;
  req.session.save();
  return res.redirect("/");
};
export const getLogout = (req, res) => {
  req.session.user = null;
  req.session.save();
  res.locals.user = null;
  res.redirect("/");
};
export const getRegister = (req, res) => {
  res.render("user/register");
};
export const postRegister = async (req, res) => {
  let { userName, password, passwordConfirm, email, realName } = req.body;
  if (password !== passwordConfirm) {
    return res.status(404).render("user/register", {
      errorMessagePassword: "비밀번호가 일치하지 않습니다",
    });
  }
  password = await bcrypt.hashSync(password, 5);

  const checkName = await User.exists({ userName });
  if (checkName) {
    return res
      .status(404)
      .render("user/register", { errorMessageId: "아이디가 중복됩니다" });
  }
  const checkEmail = await User.exists({ email });
  if (checkEmail) {
    return res
      .status(404)
      .render("user/register", { errorMessageEmail: "이메일이 중복됩니다" });
  }

  const user = await User.create({
    userName,
    password,
    email,
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

export const getProfile = (req, res) => {
  console.log(req);
  res.render("user/profile");
};
