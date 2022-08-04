/*
// formate of object
var student = {
    id: 115,
    name: "soloiman khan",
    class: 9,
    marks: 98
}


var shoppingCart = {
    books: 5,
    sunglass: 3,
    kyeboard: 1,
    mouse: 1,
    pen: 25,
    shoes: 2
}


// formate of arry

var shoppingItems = [' books', ' sunglass', ' shoes', 'pen'];
var friendAge = [12, 32, 43, 23, 54, 33, 23,];
console.log(shoppingItems);

*/

var shoppingCart = {
    books: 5,
    sunglass: 3,
    kyeboard: 1,
    mouse: 1,
    pen: 25,
    shoes: 2,
    bottle: 1
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const value = Object.values(shoppingCart);
console.log(value);

// for (var i = 0; i < keys.length; i++) {
//     var propertyName = keys[i];
//     console.log(propertyName)
// }
// for (var i = 0; i < value.length; i++) {
//     var propertyValues = value[i];
//     console.log(propertyValues)
// }

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue)
}


// for in loop
for (var propertyName in shoppingCart) {
    const Value = shoppingCart[propertyName]
    console.log(propertyName, value);
}