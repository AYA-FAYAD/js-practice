// encapsulation:

const { log } = require("console");

// const user1 = {
//   name: "aya",
//   score: 4,
//   increment: function () {
//     user1.score++;
//   },
// };
// user1.increment();
// console.log(user1.score);

//object literal syntax object that inherits from Object.prototype.
// const user2 = {};

// user2.name = "aya";
// user2.score = 5;
// user2.incremernt = function () {
//   user2.score++;
// };

// user2.incremernt();
// console.log(user2.score);
// // creates an object with no prototype.
// user3 = Object.create(null);
// user3.name = "hope";
// user3.score = 3;
// user3.incremernt = function () {
//   user3.score++;
// };
// user2;
// user3.incremernt();
// console.log(user3.score);

// prototype

const functionStor = {
  increment: function () {
    this.score++;
  },
  login: function () {
    console.log(`welcome ${this.name}`);
  },
};

const user1 = Object.create(functionStor); // Make the link with Object with proto type
user1.name = "aya";
user1.score = 3;

console.log(user1.name);
user1.login();
user1.increment();
console.log(user1.score);
