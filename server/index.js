const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("/Users/eddiemaceda/top-info-site/server/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile("/Users/eddiemaceda/top-info-site/server/about.html");
});

app.get("/contact-us", (req, res) => {
  res.sendFile("/Users/eddiemaceda/top-info-site/server/contact-us.html");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
