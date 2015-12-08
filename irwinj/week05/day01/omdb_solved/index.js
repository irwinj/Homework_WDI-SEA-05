var express = require('express');
var ejsLayouts = require('express-ejs-layouts');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
//other requirements pg, etc.

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/movies', function(req, res) {
  var query = req.query.q;  

  request('http://www.omdbapi.com/?s=' + query, function(err, response, body) {
    var data = JSON.parse(body);
    if (!err && response.statusCode === 200 && data.Search) {
      res.render('movies', {movies: data.Search,
                            q: query});
    } else {
      res.render('error');
    }
  });
});
app.post('/favorites', function(req, res) {
  var newimdbId = req.body.imdbId;
  var newTitle = req.body.Title;
  var newYear = req.body.year;
  var tester = {
    imdbId: newimdbId,
    title : newTitle,
    year : newYear
  };
  db.favorites.create(tester).then(function(){
   res.send('moo'); 
  });
  //send to the database
});
app.get('/movies/:imdbID', function(req, res) {
  // res.send(req.params.imdbID);
  var searchQuery = req.query.q ? req.query.q : '';
  var imdbID = req.params.imdbID;
  request('http://www.omdbapi.com/?i=' + imdbID, function(err, response, body) {
    res.render('movieShow', {movie: JSON.parse(body),
                             q: searchQuery});
  });
});


var port = 3000;
app.listen(port, function() {
  console.log("You're listening to the smooth sounds of port " + port);
});