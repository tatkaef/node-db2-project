
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, VIN: 'rowValue1', make: 'Volvo', model: '960', miles: 234567.55},
        {id: 2, VIN: 'rowValue2', make: 'Nissan', model: 'sentra', miles: 100000},
        {id: 3, VIN: 'rowValue3', make: 'BMW', model: 'QX', miles: 56000.89}
      ]);
    });
};
