let fruits = ["apple","banana", "orange", "jackfruit"]
console.log(`Array of fruits ${fruits}`);
// one data in array is labelled by index. that start from 0
console.log(`First value of array ${fruits[0]}`);
// push method is used to push new element to the array from back
fruits.push("durian")
console.log(`Array of fruits ${fruits}`);
// we can also count the length of array using length method
// the length is total data inside of array
console.log(`Length of fruit array ${fruits.length}`);

// pop method use to remove velue in the end of array
console.log(`Length of fruit array ${fruits.length}`); // before pop
fruits.pop()
console.log(`Array of fruits ${fruits}`);
console.log(`Length of fruit array ${fruits.length}`); // after pop

// shift method use to remove the first array and lower all array to the lowest index
console.log(`Array of fruits ${fruits}`);
console.log(fruits.shift()) // -> showing which value we shifted
console.log(`Array of fruits ${fruits}`);
// unshift add new element to new list of array but in front
fruits.unshift("Rambutan")
console.log(`Array of fruits ${fruits}`);

// to modify the array we can access the index and then edit the value
console.log(fruits[3]); // old value jackfruit
// now change jackfruit into grapes
fruits[3] = "Grapes" // it will update the jackfruit into grape
console.log(`Array of fruits ${fruits}`);
console.log("===== ARRAY ====");
