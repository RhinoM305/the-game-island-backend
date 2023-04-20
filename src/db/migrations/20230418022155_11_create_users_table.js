/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* 

- user_id
- first name
- last name
- email
- username_id
- password_id
- foreign cart_id
- foreign wishlist_id

*/

exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary();
    table.integer("username_id").unsigned().notNullable();
    table
      .foreign("username_id")
      .references("username_id")
      .inTable("usernames")
      .onDelete("cascade");
    table.integer("password_id").unsigned().notNullable();
    table
      .foreign("password_id")
      .references("password_id")
      .inTable("passwords")
      .onDelete("cascade");
    table.integer("cart_id").unsigned().notNullable();
    table
      .foreign("cart_id")
      .references("cart_id")
      .inTable("carts")
      .onDelete("cascade");

    table.integer("wishlist_id").unsigned().notNullable();
    table
      .foreign("wishlist_id")
      .references("wishlist_id")
      .inTable("wishlists")
      .onDelete("cascade");
    table.string("first_name");
    table.string("last_name");
    table.string("email");
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
