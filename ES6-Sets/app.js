// const newSet = new Set;

// newSet.add('string');
// newSet.add(1);
// newSet.add({name: 'Zhenya'});
// newSet.add(true); 

const newSet2 = new Set(['string', 1, true, {name: 'John Dou'}]);

// * Get count
// console.log(newSet2.size);

// * Check for values
// console.log(newSet2.has(1)); // true
// console.log(newSet2.has(1 + 1 - 1)); // true
// console.log(newSet2.has({name: 'John Dou'})); // false

// * Delete value
newSet2.delete(1);

// * Iterate through set
newSet2.forEach(value => {
  console.log(value);
});

for (const value of newSet2) {
  console.log(value);
}

console.log(Array.from(newSet2));