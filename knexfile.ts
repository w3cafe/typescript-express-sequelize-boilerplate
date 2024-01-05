import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  production: {
    client: "mysql2",
    connection: {
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = config;
