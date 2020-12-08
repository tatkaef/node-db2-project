
exports.up = function(knex) {
    return knex.schema.createTable('cars', tbl => {      
      tbl.increments();      
      tbl.text('VIN', 128).unique().notNullable();
      tbl.string('make', 64).notNullable();
      tbl.string('model', 64).notNullable();      
      tbl.decimal('miles').notNullable();

      tbl.string('transmission', 64);
      
      tbl.boolean('title'); // or tbl.string('title', 64);
    });
  };
  
  exports.down = function (knex) {    
    return knex.schema.dropTableIfExists('cars');
  };