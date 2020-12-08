// Update with your config settings.

module.exports = {
      development: {
        client: 'sqlite3',
        useNullAsDefault: true, // needed for sqlite
        connection: {
          filename: './data/cars.db3', // project - имя базы данных
          
        },
        migrations: {
          directory: './data/migrations'
        },
        seeds: {
          directory: './data/seeds'
        },
      },
    };
  
