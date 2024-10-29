const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world"));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
