/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* 

- id for item
- brand id for item
- item name
- item description
- item price
- item vendor

*/

// this is all the gamer-gear stuff
exports.up = function (knex) {
  return knex.schema.createTable("gamer", (table) => {
    table.increments("gamer_id").primary();
    table.integer("brand_id").unsigned().notNullable();
    table
      .foreign("brand_id")
      .references("brand_id")
      .inTable("brands")
      .onDelete("cascade");
    table.string("title");
    table.string("description");
    table.decimal("price", 8, 2);
    table.string("vendor");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("gamer");
};
