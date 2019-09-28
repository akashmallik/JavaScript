// Find a value in an array of objects in Javascript [duplicate]
// https://stackoverflow.com/questions/7364150/find-object-by-id-in-an-array-of-javascript-objects

let arr = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

let obj = arr.find(o => o.name === 'string 1');

console.log(obj);

// {
//   "name": "string 1",
//   "value": "this",
//   "other": "that"
// }