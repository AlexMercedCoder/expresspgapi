///////////////////////////
// Environmental Variables
///////////////////////////
require("../envfunc")();

///////////////////////////////////
//Initialize Objection
///////////////////////////////////
const { Model } = require("objection");

/////////////////////////////////
// Database Connection
/////////////////////////////////
const { DBHOST, DBUSER, DBPASSWORD, DATABASE } = process.env;
console.log(DBHOST, DBUSER, DBPASSWORD, DATABASE);

const pg = require("knex")({
  client: "pg",
  connection: {
    host: DBHOST,
    user: DBUSER,
    password: DBPASSWORD,
    database: DATABASE,
  },
});

Model.knex(pg);

module.exports = { pg, Model };
