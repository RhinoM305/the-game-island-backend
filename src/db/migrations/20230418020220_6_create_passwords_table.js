/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// required slots

/* 

- password_id
- password

*/

exports.up = function (knex) {
  return knex.schema.createTable("passwords", (table) => {
    table.increments("password_id").primary();
    table.string("password");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("passwords");
};
