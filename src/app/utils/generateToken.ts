import jwt from "jsonwebtoken";

const generateToken = (payload: any, secret: string, expires_in: string) => {
  return jwt.sign(payload, secret, { expiresIn: expires_in });
};

export default generateToken;
