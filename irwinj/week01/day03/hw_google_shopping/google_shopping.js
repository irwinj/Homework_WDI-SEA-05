var data = require("./products.json")

// var items.length()
// for(var i = 0; i < data.items.length; i++) {
// 	console.log("There are " + i + " items in the list");
// }
//Works! Displays all items #1

// for(var i = 0; i < data.items.length; i++);
// console.log("There are " + i + " items in the list")
// better log - displays final results #1

// for (var i = 0; i < data.items.length; i++){
// 	if(data.items[i].product.inventories[0].availability==="backorder") {
// 		console.log("Out of stock: " + (data.items[i].product.title))
// 	} else {
// 		console.log("No Backorder")
// 	}
// }
//displays Out of stock and backorder successfully

// for (var i = 0; i < data.items.length; i++){
// 	if(data.items[i].product.inventories[0].availability==="backorder") {
// 		console.log("Out of stock: " + (data.items[i].product.title))
// 	}
// }
// //displays only Out of Stock

// for (var i = 0; i < data.items.length; i++){
// 	if(data.items[i].product.images.length > 1) {
// 		console.log("More pics available:" + (data.items[i].product.title));
// 	} else {
// 		console.log("1pic");
// 	}
// }
// //works, displays both items

// for (var i = 0; i < data.items.length; i++){
// 	if(data.items[i].product.images.length > 1) {
// 		console.log("More pics available:" + (data.items[i].product.title));
// 	}
// }
// works, displays just those with multiples

// for (var i = 0; i < data.items.length; i++){
// 	if(data.items[i].product.brand==="Canon") {
// 		console.log("More pics available:" + (data.items[i].product.title));
// 	}
// }
// works, displays only canons

// for (var i = 0; i < data.items.length; i++){
// 	if(data.items[i].product.author.name===("eBay" + '') && data.items[i].product.brand==="Canon")
// 	 {
// 		console.log("Canon on eBay: " + (data.items[i].product.title));
// 	}
// }
//prints item that is only eBay, couldn't get eBays with stuff after to show

for (var i = 0; i < data.items.length; i++){
		console.log(data.items[i].product.brand);
		console.log("$" + data.items[i].product.inventories[0].price);
		console.log(data.items[i].product.images[0].link);
		console.log('')
	}
//donezo!


// Write your solutions below