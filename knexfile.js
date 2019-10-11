// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './api/data/recipes.db3',
    },
    migrations: {
      directory: './api/data/migrations',
    },
    seeds: {
      directory: './api/data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        // enforces foreign key constraints on SQLite, not needed for other DBMS
        conn.run('PRAGMA foreign_keys = ON', done);
      },    
    },
  }
}