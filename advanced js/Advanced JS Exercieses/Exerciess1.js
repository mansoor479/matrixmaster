
// ex01
let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name);     // "John"
console.log(age);      // 30
console.log(isAdmin);  // false

//ex02
//Create the variable with the name of our planet.
let planetName = "Earth";
//Create the variable to store the name of the current visitor
let currentVisitorName = "Alice";
 
// ex03
/* let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi() */
// result will be Error: sayHi is not defined
// Why?
//because The function sayHi is declared inside a block (if block).


//ex04
let user1 = {};                    // Create an empty object
user.name = "John";              // Add the property 'name' with value 'John'
user.surname = "Smith";          // Add the property 'surname' with value 'Smith'
user.name = "Pete";              // Change the value of 'name' to 'Pete'
delete user.name;                // Remove the property 'name'



//ex5
const user = {
  name: "John"
};

user.name = "Pete"; 

 // ✅ This works! because (const) means the binding (the reference to the object) cannot be changed.
 //But the object itself is still mutable, so you can change its properties.

 //What you can't do is reassign the variable to a new object: 
// user = { name: "Mary" }; 
//  // ❌ This will throw an error
//  we can not make (const) variable to point to a different object.

//ex6
let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
};

let sum = Object.values(salaries).reduce((total, salary) => total + salary, 0);

console.log(sum); // 390

//ex7
/* if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */
//Rewrite this if using the ternary operator '?':
result = (a + b < 4) ? 'Below' : 'Over';


// ex8
///Rewrite if..else using multiple ternary operators '?'.

/* let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */
let message = (login == 'Employee') ? 'Hello' :
              (login == 'Director') ? 'Greetings' :
              (login == '') ? 'No login' :
              '';

              


              
