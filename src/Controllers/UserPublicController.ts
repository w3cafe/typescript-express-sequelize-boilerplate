// create express route here
// Path: src/Controllers/UserController.ts
import express, { Request, Response } from "express";
import { User } from "../Models/User";
import { isEmpty } from "lodash";
import { createToken } from "../Services/JWT";
import { Group } from "../Models/Group";
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const router = express.Router();

router.post("/soft-register", async (req: Request, res: Response) => {
  const { deviceId }: User = req.body;
  const existUser = await User.findOne({ where: { deviceId } });
  if (
    existUser &&
    isEmpty(existUser.email) &&
    isEmpty(existUser.mobile) &&
    isEmpty(existUser.password)
  ) {
    return res.json({
      user: existUser,
      token: createToken(existUser.id),
    });
  }
  const randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  }); // big_red_donkey

  const group = await Group.create({
    groupName: randomName,
    createdAt: new Date(),
  });

  const user = await User.create({
    deviceId: deviceId as string,
    groupId: group.id as string,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.json({
    user,
    token: createToken(user.id),
  });
});

export default router;
