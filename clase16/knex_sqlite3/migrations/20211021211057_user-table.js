exports.up = function(knex) {
    knex.schema
    .createTable("users", function (table) {
      table.increments("id").primary();
      table.string("name");
      table.string("email", 128);
      table.string("role").defaultTo("admin");
      table.string("password");
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('update_at').defaultTo(knex.fn.now())
      table.timestamp('delete_at').defaultTo(knex.fn.now())
      
    })
    .then(() => {
      console.log("Tabla Creada");
    })
    .catch((err) => {
      throw err;
    });
};

exports.down = function(knex) {
  
};