// What is a function?
// Reusable code block which performs some action and might return a value

// Traditional functions
function sum(a, b, callback) {
  callback(`Sum of ${a} + ${b} = ${a + b}`);
}

// Function Expression
const diff = function (a, b, callback) {
  callback(`Difference of ${a} - ${b} = ${a - b}`);
};

const print = function (str) {
  console.log(str);
};

sum(10, 20, print);
diff(20, 10, print);
print("Welcome");
