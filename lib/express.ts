import express, { Express, Request, Response } from "express";
import UserController from "../src/Controllers/UserController";
import UserPublicController from "../src/Controllers/UserPublicController";
import logger from "./logger";
import auth from "../src/Middlewares/auth";
const app: Express = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public-user/", auth, UserPublicController);
app.use("/user", auth, UserController);

try {
  app.listen(port, () => {
    logger.info(`app listening at http://localhost:${port}`);
  });
} catch (error) {
  logger.error("Error while starting server", error);
}
