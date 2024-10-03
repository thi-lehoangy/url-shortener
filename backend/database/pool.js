const { Pool } = require("pg");

// All of the following properties should be read from environment variables
module.exports = new Pool({
  host: "localhost", // or wherever the db is hosted
  user: "lethi",
  database: "urls",
  password: "FreshSync2023",
  port: 5432 // The default port
});
