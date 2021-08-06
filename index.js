const app = require("express")();
const shortener = require("node-url-shortener");
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Welcome to the URL-Shortener API.");
});

app.get("/shortener/:prevURL", (req, res) => {
  const { prevURL } = req.query;

  shortener.short(prevURL, (error, url) => {
    try {
      res.send(url);
    } catch (error) {
      res.send(error.message);
    }
  });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
