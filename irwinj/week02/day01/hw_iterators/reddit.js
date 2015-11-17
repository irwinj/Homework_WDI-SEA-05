var reddit = require("./data.json")

// Write your solutions below
// // 1. `forEach` -  `console.log` all titles
// reddit.data.children.forEach(function(titles) {
// 	console.log(titles.data.title + "<br>")
// });

// console.log(reddit["data"]);

// // 2. `map` - Return an array of permalinks, append `http://reddit.com` to each so that they contain full http:// path to reddit

// var permLink = reddit.data.children.map(function(perm) {
// 	return "http://reddit.com" + perm.data.permalink;
// 	// links.push = [x]
// });
// console.log(permLink);

// 3. `filter` - Filter the posts that contain actual text in the  `selftext` key
// var filterSelf = reddit.data.children.filter(function(textKey){
// 	return (textKey.data.selftext.length > 0)
// //anything after return textKey is ignored
// }).map(function(stuff){
// 	return stuff.data.selftext;
// })

// console.log(filterSelf);


4. `reduce` - Use reduce to count all the `score` values across posts

function add(a, b){
	return a + b;
}

var x = reddit.data.children.map(function(allValue) {
	return allValue.data.score;
}).reduce(add);

console.log(x)