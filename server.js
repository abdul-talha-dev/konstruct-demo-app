const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Konstruct!");
});

app.listen(port, () => {
  console.log(`Application listening on port ${port}`);
});
