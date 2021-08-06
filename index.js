const app = require("express")();
const shortener = require("node-url-shortener");

app.get("/", (req, res) => {
  res.send("Welcome to the URL-Shortener API.");
});

app.get("/shortener", (req, res) => {
  shortener.short("https://haridwar-smart-city.netlify.app", (error, url) => {
    try {
      res.send(url);
    } catch (error) {
      res.send(error.message);
    }
  });
});
