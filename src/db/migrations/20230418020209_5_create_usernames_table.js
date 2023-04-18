/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// required slots

/* 

- username_id
- username 

*/
exports.up = function (knex) {
  return knex.schema.createTable("usernames", (table) => {
    table.increments("username_id").primary();
    table.string("username");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("usernames");
};
