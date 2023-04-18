/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// required slots

/* 

- id brand
- brand name
- an array of sub menus that are associated with the brand for example:
                                                               nintendo will have n64, nes, virtual boy, etc...
*/

exports.up = function (knex) {
  return knex.schema.createTable("brands", (table) => {
    table.increments("brand_id").primary();
    table.string("brand_name");
    table.specificType("subcategory", "text[]");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("brands");
};
