app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/home.html"));
});
// A route to get to the page to make a reservation
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/survey.html"));
});
