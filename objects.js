// Objects
// Employee ->
//      empid           = 1,
//      email           = john.doe,
//      designation     = manager,
//      department      = sales

let employee = {
  empid: 1,
  email: "john.doe",
  designation: "manager",
  department: "sales",
};

console.log(employee.department);
console.log(employee["department"]);

// for..in loop
for (let key in employee) {
  console.log(`employee.${key} = ${employee[key]}`);
}

// Spread operation in objects
let employee2 = { ...employee };
console.log(employee2);

employee = { ...employee, salary: 123345 };
console.log(employee);

employee = { ...employee, department: "marketing" };
console.log(employee);

// let email = employee.email
// let id = employee.empid

let { email, empid } = employee;
console.log(email, empid);

let car = {
  make: "Honda",
  model: "City",
  transmissions: ["Manual", "CVT"],
  fuel: ["petrol", "diesel", "hybrid"],
};

// Dot notation
let carmake = car.make;
let carmodel = car.model;

// Object destructuring
let { make, model } = car;
let { make: manufacturer, model: typeOfCar, fuel: fuelSupported } = car;
console.log(manufacturer, typeOfCar, fuelSupported)

console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
