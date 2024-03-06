// Arrays

// Declaration
let fruits = ["Apple", "Orange", "Mango"];
console.log(fruits.length);
console.log(fruits[0]);

fruits.push("Grapes"); // Adds new value to the end of the array
console.log(fruits);

console.log(fruits.pop()); // removes the last value from the array
console.log(fruits);

console.log(fruits.shift()); // removes the first value from the array
console.log(fruits);

fruits.unshift("Pineapple"); // inserts new value to the begining of the array
console.log(fruits);

console.log(fruits.join("#"));

let courses = ["Javascript", "Angular", "ReactJS"];
let newArr = fruits.concat(courses);
console.log(newArr);

// Spread operation
// ... used to expand an array or an object into individual elements

courses = ["Javascript", "Angular", "ReactJS"];
let newCourses = ["Java", "Microservices", ...courses];
console.log(newCourses);

// Traditional for loop
for (let course = 0; course < newCourses.length; course++) {
  console.log(newCourses[course]);
}

// modern for..of loop
for (let course of newCourses){
    console.log(course)
}