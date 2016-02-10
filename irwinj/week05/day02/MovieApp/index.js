//OMDB Poster API key: 293854bf 

var results = [];
var finalResults = [];

var express = require('express');
var app = express();
var db = require('./models');
var ejsLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var requestModule = require('request');
var peopleController = require('./controllers/people');

//require('express-helpers')(app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(ejsLayouts);
app.use(bodyParser.urlencoded({extended: false}));
app.use('/people', peopleController);


app.get('/', function(req, res){
    var term = req.query.q;
    
    requestModule('http://www.omdbapi.com/?s='+ term +'&r=json', function(error, response, body){
        
        results = JSON.parse(body);
        var thing = JSON.parse(body).Search;
        
        if(results.Response === 'False'){
            console.log("ERROR");
            res.redirect('/');
        }
        else {
            for(var i = 0; i < thing.length; i ++){

                requestModule('http://www.omdbapi.com/?i=' + thing[i].imdbID +'&plot=full&r=json', function(error, res, bod){
                    finalResults.push(JSON.parse(bod));
                });
            };
            
            res.render('index.ejs', {results : finalResults});
            finalResults = [];
        } 
    });
});

app.post('/', function(req, res){
   
    var newMovie = {
        imdbid : req.body.imdbID,
        year : req.body.year,
        title : req.body.title
    };
    db.movie.create(newMovie).then(function(){
        db.movie.findAll().then(function(movies){
            res.render('show', {movies : movies});
        });
    });
});



app.listen(3000);













