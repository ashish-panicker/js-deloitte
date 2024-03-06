// console.log('Welcome to JS programming...')

// Declare a variable called userName
// let userName = 'Ashish' // ?  variable declaration

// console.log('Welcome to Javascript ' + userName) // String concatenation

// var keyword is not recommended
// var password = 'password123' // ? variable declaration

/**
 * variable declaration can be done with `let` `var` `const`
 * var allows redeclaration of a variable but let does not allow it
*/

// userName = 'Arun' // changing the value to Arun
// console.log('Welcome to Javascript ' + userName) // String concatenation

// var password = 'welcome123' // redecalaration 
// console.log('The new password is ' + password)

// let userName = '' // Error

let someVariable
console.log(typeof someVariable) // undefined

someVariable = 10
console.log(typeof someVariable) // number

someVariable = 'hello'
console.log(typeof someVariable) // string

someVariable = ['orange', 'apple']
console.log(typeof someVariable) // object

someVariable = false
console.log(typeof someVariable) // boolean

// Operator and Operands
// Arithematic, Logical, Relational

let x = 10
let y = '10'

console.log(x == y)         //  true 
console.log(x === y)        //  False
console.log(x === parseInt(y))       //  True
console.log(x === +y)       //  +varName will force the conversion of value to number