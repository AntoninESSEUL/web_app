import jwt from "jsonwebtoken";
import { env } from "../config/env";
import { Users } from "../models/Users";

const JWT_SECRET = env.JWT_SECRET || "1";
//const JWT_EXPIRES_IN = "24h";

const createToken = (user: Users): string => {
  return jwt.sign(
    {
      userId: user.idUser,
      email: user.mail,
    },
    JWT_SECRET
    //{ expiresIn: JWT_EXPIRES_IN }
  );
};

export default createToken;
