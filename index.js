require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World! Im - " + port);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
