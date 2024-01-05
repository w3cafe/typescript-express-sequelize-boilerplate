import jwt from "jsonwebtoken";

export function createToken(userId: string) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, {
    expiresIn: "1000y",
  });
  return token;
}

export function verify(token: string) {
  return jwt.verify(token, process.env.JWT_SECRET as string);
}
