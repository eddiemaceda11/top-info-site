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

/*
  Below are two separate options for how to handle a request to an invalid url.
  We want to make sure these are below all of out other routes -> 404 handling as absolute last thing.
  You can use either middleware, or a catch all route.
  */

// Middleware
app.use((req, res) => {
  res.sendFile("/Users/eddiemaceda/top-info-site/server/404.html");
});

// Catch-all route
app.get("*", (req, res) => {
  res.sendFile("/Users/eddiemaceda/top-info-site/server/404.html");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}`);
});
