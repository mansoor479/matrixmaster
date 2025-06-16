// ----------------------
// Exercise 1 - Classes
// ----------------------

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// ----------------------
// Exercise 2 - This
// ----------------------

const person1 = new Person("Alice", 30);

function describePerson(callback) {
  // Use 'call' to set the context of 'this' to 'person1'
  callback.call(person1);
}

describePerson(function () {
  console.log(this.introduce());
});

// ----------------------
// Exercise 3 - Promises
// ----------------------

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${ms} milliseconds.`);
    }, ms);
  });
}

// Test the wait function
wait(2000).then((message) => {
  console.log(message); // Should log after 2 seconds
});
