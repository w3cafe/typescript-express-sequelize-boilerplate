import { Sequelize, importModels, Dialect } from "@sequelize/core";

import logger from "./logger";
import { User } from "../src/Models/User";
import { Group } from "../src/Models/Group";
let sequelize = (global as any).sequelize;

async function init() {
  if (
    (!sequelize || sequelize.closed) &&
    !(global as any).sequelizeInProgress
  ) {
    // let models = await importModels(__dirname + "../src/Models/**.{ts}");
    // console.log("models", __dirname, models);
    sequelize = new Sequelize({
      dialect: process.env.DATABASE_TYPE as Dialect,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      models: [User, Group],
      logging: console.log,
    });
    logger.info("Connecting database...");
    (global as any).sequelizeInProgress = true;
    sequelize
      .authenticate()
      .then(() => {
        (global as any).sequelizeInProgress = false;
        logger.info("Connection has been established successfully.");
        (global as any).sequelize = sequelize;
      })
      .catch((error: Error) => {
        (global as any).sequelizeInProgress = false;
        logger.error("Unable to connect to the database:", error);
      });
  }

  process.on("SIGTERM", () => {
    logger.info("SIGTERM signal received.");
    sequelize.close();
  });
}
init();
export default sequelize;
