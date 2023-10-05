const { pool } = require("../queries.js");
const fs = require("fs");

const sendQuery = fs.readFileSync("db/seeding.sql", { encoding: "utf-8" });
pool.query(sendQuery, (err, res) => {
  console.log(err, res);
  console.log("Sending Complete");
  pool.end();
});
