// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipe.sqlite3'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign keys = ON', done);
      }
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};

