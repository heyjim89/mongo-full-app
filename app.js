var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var superHeroController = require('./controllers/superhero.js');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ajax-demo')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);

app.post('/create-hero', superHeroController.createHero)
app.get('/get-heroes', superHeroController.getHero)

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
