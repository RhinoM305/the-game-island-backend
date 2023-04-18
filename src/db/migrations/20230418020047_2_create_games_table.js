/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// required slots

/* 

- id for game
- brand id for game to be sorted by brand name
- game name
- game description
- game price
- game vendor

*/
exports.up = function (knex) {
  return knex.schema.createTable("games", (table) => {
    table.increments("game_id").primary();
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
    table.string("image_path");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("games");
};
