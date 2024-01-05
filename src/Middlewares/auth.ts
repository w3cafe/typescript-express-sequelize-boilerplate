import { User } from "../Models/User";
import { verify } from "../Services/JWT";
import { Request, Response } from "express";

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export default async function auth(req: Request, res: Response, next: any) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = verify(token);
    let userId = (decoded as any).userId as string;
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      return res.status(400).send("Invalid token.");
    }
    req.user = user;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
}
