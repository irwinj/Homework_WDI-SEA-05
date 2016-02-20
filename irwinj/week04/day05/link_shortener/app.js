var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./models');
var Hashids = require('hashids');
var hasher = new Hashids('hello');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/showlink/:id', function(req, res) {
	var id = parseInt(req.params.id);
	db.links.find({where: {id: id}}).then(function(link) {
		res.render('showlink', {link: link});
	});
});

app.post('/', function(req,res) {
	var rawUrl = req.body.URL;
	if(!rawUrl.startsWith("http://")) {
		rawUrl = "http://" + rawUrl;
	}

	var newLink = {
		URL: rawUrl
	};

	db.links.create(newLink).then(function(link) {
		link.hash = hasher.encode(link.id);		
		link.save().then(function(updatedLink) {
			res.redirect('/showlink/' + updatedLink.id);
		});
	});
});

app.get('/links', function(req, res) {
	db.links.findAll({order: '"accessCount" desc'}).then(function(links){
		res.render('links', {links: links});
	})
})

app.get('/g/:hash', function(req, res) {
	var hash = req.params.hash;

	db.links.find({where: {hash: hash}}).then(function(link) {
		link.addToCounter();
		link.save().then(function(link) {
			res.redirect(link.URL);
		});
	});
});

app.listen(process.env.PORT || 3000);