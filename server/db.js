const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "calibre23",
  host: "localhost",
  port: 5435,
  database: "perntodo",
});

module.exports = pool;
