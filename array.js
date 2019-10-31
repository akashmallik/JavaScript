// Find a value in an array of objects in Javascript [duplicate]
// https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects

// let arr = [
//     { name:"string 1", value:"this", other: "that" },
//     { name:"string 2", value:"this", other: "that" }
// ];

// let obj = arr.find(o => o.name === 'string 1');
// console.log(obj);


// create an array
var fruits = ['Apple', 'Banana'];
console.log(fruits);

// access an array
var frist = fruits[0];
console.log(frist);

var last = fruits[fruits.length - 1];
console.log(last);

// loop over an array
fruits.forEach(function(item, index, array){
    console.log(item, index);
});

// Add to the front of an array
fruits.unshift('Strawberry');
console.log(fruits);

// Add to the end of an array
fruits.push('Orange');
console.log(fruits);

// remove from the front of an array
fruits.shift();
console.log(fruits);

// remove from the end of an array
fruits.pop();
console.log(fruits);

// find the index of an item in the arary
fruits.push('Mango');
console.log(fruits);

var pos = fruits.indexOf('Banana');
console.log(pos);

// remove an item by index position
fruits.splice(1,1); //removed the positon 1 item
console.log(fruits);


// remove items from an index position
var vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);

var pos = 1, n = 2;
var removedItems = vegetables.splice(pos,n);
// this is how to remove items, n defines the number of items to be removed,
// from the position(pos) onward to the end of array

console.log(vegetables);
console.log(removedItems);

// copy an array
var newFruits = fruits.slice();
console.log(newFruits);
