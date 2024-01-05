import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("users", function (table) {
      table.uuid("id").unique();
      table.string("firstName", 255).nullable();
      table.string("lastName", 255).nullable();
      table.string("email", 255).nullable();
      table.string("password", 255).nullable();
      table.string("mobile", 255).nullable();
      table.string("groupId", 255).nullable();
      table.string("deviceId", 255).nullable();
      table.date("createdAt").nullable();
      table.date("updatedAt").nullable();
    })
    .createTable("groups", function (table) {
      table.increments("id");
      table.string("groupName", 1000).notNullable();
      table.date("createdAt").nullable();
      table.date("updatedAt").nullable();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users").dropTable("groups");
}
