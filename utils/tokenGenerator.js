import jwt from "jsonwebtoken";

export const generateAccessToken = (user, res) => {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET is missing");
  }

  const accessToken = jwt.sign(
    { id: user._id, role: user.role || "user" },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "5m" }
  );

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 5 * 60 * 1000,
  });

  return accessToken;
};

export const generateRefreshToken = (user, res) => {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("REFRESH_TOKEN_SECRET is missing");
  }

  const refreshToken = jwt.sign(
    { id: user._id, role: user.role || "user" },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  return refreshToken;
};
