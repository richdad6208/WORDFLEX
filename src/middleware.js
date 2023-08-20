import express from "express";

export const sayHi = (req, res, next) => {
  console.log(req.session);
  next();
};
