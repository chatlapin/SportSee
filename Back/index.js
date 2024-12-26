const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Paris");
});

app.listen(2024, () =>
  console.log("Server is running on http://localhost:2024")
);
