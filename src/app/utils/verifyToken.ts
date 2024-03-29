import jwt, { JwtPayload } from "jsonwebtoken";
import GenericError from "../errors/GenericError";

const verifyToken = (token: string, secret: string) => {
  const user = jwt.verify(token, secret) as JwtPayload;
  if (!user) throw new GenericError(401, "Unauthorized access");
  return user;
};

export default verifyToken;
