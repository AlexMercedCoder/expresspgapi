exports.up = function (knex) {
  return knex.schema.createTable("rats", function (table) {
    table.increments("id");
    table.string("name", 100);
    table.integer("age");
  });
};

exports.down = function (knex) {};
