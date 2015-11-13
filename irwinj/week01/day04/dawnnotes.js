// function sayHello(names) {
//     for (name in names){
//         console.log('Hello ' + names[name]);
//     }
// }
// sayHello({
//     'name1' : 'Patrick',
//     'name2' : "Sean',
//     'name3' : 'Sam'
// })
// ____________________________

// function sayHello(names) {
//     console.log(names.name());
//     }
// }
// sayHello({
//     'name1' : 'Patrick',
//     'name2' : "Sean',
//     'name3' : function(){
//     	return 'Sam'
// })

// ____________________________
// function sayHello(names){
//     for(var i = 0; i < arguments.length; i++){
// //arguments is a (reserved keyword) special word that stands in for all values your function has entered
// //access the array (look into arguments more)
// //var savedArgs = arguments (create a variable if you want to change arguments, rather than modify core functionality
//         console.log( names[i] );
//     }
//     console.log;
// }
// sayHello('Patrick', 'Sean');

// ____________
// function sayHello(){
//     for(var i = 0; i < arguments.length; i++) {
//         var currArg = arguments[i];
        
//         if (typeof currArg === "object") {
//             if(Array.isArray(currArg)) {
// //isArray is a helper function for arrays, feed it string/object/undefined and it tell you T/F
//                 for(var j = 0; j < currArg.length; j++) {
//                     console.log('Hello ' + currArg[j]);
// //production code will never have console.log, it's for developers to check arguments
//                 }
//             } else {
//                 for(name in currArg) {
//                     console.log('Hello ' + currArg[name]);
//                 }
//             }
//         } else if(typeof currArg === "string") {
//             console.log('Hello ' + currArg);
//         }
//     }
// }
// sayHello('Patrick','Sean');
// sayHello(['Patrick', 'Sean']);
// sayHello({
//     'name1' : 'Patrick';
//     'name2' : 'Sean'
// });
// })
// _____________________________
// function sayHello(names) {
//     console.log(typeof names)
//     if(typeof names == "object" && !Array.isArray(names)){
// // if typeof names is an object and isArray returns false (becomes true with !)
//         return "Please give me an array";
//     }
//     var helloMessages = [];
//     for(var i = 0; i < names.length; i++) {
        
//         helloMessages.push('Hello ' + names[i]);
//         if(names[i] === 'Sean'){
//             return "I found Sean", helloMessages;
//         }
//     }
//     return helloMessages;
// }

// _____________
// function sayHello(names) {

//     var helloMessages = [];
//     for(var i = 0; i < names.length; i++) {
//         helloMessages.push('Hello ' + names[i]);
//     }
//     return helloMessages;
// }
// function sayHello(){
//     var messages = getHello( ['Patrick', 'Sean', 'Sam']);
//     for(var i = 0; i < messages.length; i++){
//         console.log( messages[i] );
//     }
// }
// console.log( sayHello());
// ________________
GLOBAL SCOPE
var firstName = "Patrick",
lastName = "O'Connor";

function fullName() {
    console.log(firstName + ' ' + lastName);
}

fullName(); // prints "Patrick O'Connor"

console.log(firstName) // prints "Patrick"

LOCAL SCOPE - containing vars inside of functions, var disappears in global scope
function fullName() {
    var firstName = "Patrick",
    lastName = "O'Connor";

    console.log(firstName + ' ' + lastName);
}
}
}