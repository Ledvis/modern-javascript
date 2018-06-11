// MAPS = key-value pairs - can use ANY type as a key or value

let map = new Map;

let key1 = 'some string';
let key2 = {};
let key3 = function() {};

map.set(key1, 'value1');
map.set(key2, 'value2');
map.set(key3, 'value3');

// console.log(key1, key2, key3);

// for(let [key, value] of map) {
//   console.log(`${key} = ${value}`);
// }

// for (let key of map.keys()) {
//   console.log(key);
// }

// for (let value of map.values()) {
//   console.log(value);
// }

// * Loop with forEach
// map.forEach((value, key) => {
//   console.log(`${key} = ${value}`);
// });

// * Create an array of key-value pairs
// const newArray = Array.from(map);
// console.log(newArray);
const arrayKeys = Array.from(map.keys());
console.log(arrayKeys);
const arrayValues = Array.from(map.values());
console.log(arrayValues);