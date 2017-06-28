var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

//HTML and API routes
function routes(req,res) {
app.use(require('./routing/apiRoutes.js'));
app.use(require('./routing/htmlRoutes.js'));

//
app.use(express.static(path.join(__dirname, './app/public')));

}
app.listen(function() {
	console.log('App listening');
})