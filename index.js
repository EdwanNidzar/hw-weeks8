const express = require("express");
const app = express();
const fs = require("fs");
const routeFiles = fs.readdirSync("./routes");

routeFiles.forEach((file) => {
  const route = require(`./routes/${file}`);
  app.use(route);
});

app.listen(3000, () => {
  console.log("Server berjalan di http://localhost:3000");
});
