/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

//required slots
/*

- wishlist id
- user id
- array of game_id
- array of accesories_id
- array of systems_id
- array of gamer gear items

*/
exports.up = function (knex) {
  return knex.schema.createTable("wishlists", (table) => {
    table.increments("wishlist_id").primary();

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
  return knex.schema.dropTable("wishlists");
};
