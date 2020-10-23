///////////////////////////
// Environmental Variables
///////////////////////////
require("./envfunc")();

const { DBHOST, DBPASSWORD, DBUSER, DATABASE } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DBHOST,
      user: DBUSER,
      password: DBPASSWORD,
      database: DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      host: DBHOST,
      user: DBUSER,
      password: DBPASSWORD,
      database: DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "pg",
    connection: {
      host: DBHOST,
      user: DBUSER,
      password: DBPASSWORD,
      database: DATABASE,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
