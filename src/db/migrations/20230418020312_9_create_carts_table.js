/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// required slots

/* 

- id of cart
- user_id associated with cart
- array of game_ids in users cart
- array of assecory_ids in users cart
- array of systems_ids in users cart
- array of other items ie books, puzzels etc etc

*/

exports.up = function (knex) {
  return knex.schema.createTable("carts", (table) => {
    table.increments("cart_id").primary();
    table.specificType("liked_games_ids", "integer[]");
    table.specificType("liked_accessories_ids", "integer[]");
    table.specificType("liked_systems_ids", "integer[]");
    table.specificType("liked_gamer_ids", "integer[]");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("carts");
};
