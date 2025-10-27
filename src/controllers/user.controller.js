import jwt from "jsonwebtoken";
import express from "express";
import User from "../models/user.model.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ message: "user not found" });
    }
    const isPasswordValid = User.matchPassword(password);
    if (!isPasswordValid) {
      res.status(400).json({ message: "invalid password" });
    }

    const accessToken = generateAccessToken(user, res);
    const refreshToken = generateRefreshToken(user, res);

    user.refreshToken = refreshToken;
    await user.save();

    res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};

export const registerUser = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      phone,
      email,
      password,
      isStore,
      storeName,
      voen,
      storeDescription,
    } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({ message: "user already exists" });
    }
    if (!isStore) {
      const newUser = new User({ firstname, lastname, email, password });
    } else {
      if ((isStore && !storeName) || !voen || !storeDescription) {
        return res.status(400).json({ message: "please fill all fields" });
      }
      const newUser = new User({
        firstname,
        lastname,
        email,
        password,
        isStore,
        storeName,
        voen,
        storeDescription,
      });
    }
    const accessToken = generateAccessToken(newUser, res);
    const refreshToken = generateRefreshToken(newUser, res);
    newUser.refreshToken = refreshToken;
    await newUser.save();

    res.status(200).json({ accessToken, refreshToken });
  } catch {
    res.status(500).json({ message: "server error" });
  }
};
