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

export default router;
