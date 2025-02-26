import express from "express";
import bcrypt from "bcryptjs";
import multer from "multer";

import * as mime from "mime-types";
import { v4 as uuidv4 } from "uuid";

import auth from "../../middleware/auth.middleware.js";

import {
  createUser,
  deleteUser,
  getUserById,
  updateUser,
} from "../../handlers/user.handler.js";
import userModel from "../../db/models/user.model.mjs";
import dbConnect from "../../db/dbConnect.js";

import jwt from "jsonwebtoken";
import fs from "fs";

const userRouter = express.Router();

// Multer Setup for storage.
const userStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/users");
  },
  filename: function (req, file, cb) {
    let newFileName = uuidv4() + "." + mime.extension(file.mimetype);
    let ext = mime.extension(file.mimetype);

    cb(null, newFileName);
  },
});

const upload = multer({ storage: userStorage });

// POST
userRouter.post("/user", upload.single("file"), async (req, res) => {
  const { name, email, password } = req.body;

  console.log(req.body);

  const newUser = {
    name: name,
    email: email,
    password: password,
    picture: process.env.SERVER_HOST + "/users/no-image.jpeg",
    token: jwt.sign({ email }, process.env.JWT_SECRET),
  };

  if (req.file) {
    newUser.picture = process.env.SERVER_HOST + "/users/" + req.file.filename;
  }

  newUser.hashedPassword = await bcrypt.hash(password, 10);

  await dbConnect();

  const userExists = await userModel.findOne({ email });
  if (userExists) {
    if (req.file) {
      const pictureToDelete = newUser.picture.split("/").pop();
      fs.unlinkSync(`public/users/${pictureToDelete}`);
    }

    return res.status(400).send({ message: "User Already Exists" });
  }

  const result = await createUser(newUser);

  if (result.status === "ok") {
    return res.status(200).send({ message: result.message, data: result.data });
  } else {
    return res.status(200).send({
      message: result.message,
      data: [],
    });
  }
});

// PUT
userRouter.put("/user", auth, upload.single("file"), async (req, res) => {
  console.log(req.body);
  const updatedUser = {
    ...req.body,
  };

  if (req.body.password) {
    updatedUser.hashedPassword = await bcrypt.hash(req.body.password, 10);
  }

  if (req.file) {
    updatedUser.picture =
      process.env.SERVER_HOST + "/users/" + req.file.filename;
  }

  let result = await updateUser(updatedUser);

  if (result.status === "ok") {
    return res.status(200).send({ message: result.message, data: result.data });
  } else {
    return res.status(200).send({ message: result.message, data: {} });
  }
});

// DELETE
userRouter.delete("/user/:id", auth, async (req, res) => {
  if (!req.params.id) {
    return res.status(200).send({ message: "No ID provided", data: {} });
  }

  let result = await deleteUser(req.params.id);

  if (result.status === "ok") {
    return res.status(200).send({ message: result.message, data: [] });
  } else {
    return res.status(200).send({ message: result.message, data: {} });
  }
});

// GET By ID
userRouter.get("/user/:id", async (req, res) => {
  if (!req.params.id) {
    return res.status(200).send({ message: "No ID provided", data: {} });
  }

  let result = await getUserById(req.params.id);

  if (result.status === "ok") {
    return res.status(200).send({ message: result.message, data: result.data });
  } else {
    return res.status(200).send({ message: result.message, data: {} });
  }
});

export default userRouter;
