//Challenge 1
function sayHello() {
  function printHello() {
    console.log("Hello");
  }

  setTimeout(printHello, 1000);
}

sayHello();
console.log("me first");

//Challenge 2
let promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000);
});

function displayResolve() {
  console.log("Resolved");
}

promise.then(displayResolve);

// Challenge 3

promise = new Promise((resolve, reject) => {
  reject();
});

function displayReject() {
  console.log("Reject");
}

promise.catch(displayReject);

//Challenge 4

promise = new Promise((resolve, reject) => {
  resolve();
});
promise.then(() => {
  console.log("Promise has been resolved!");
});
console.log("I'm not the promise!");

// Challenge 5
function dalay() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1000);
  });
}

dalay().then(sayHello);

//Challenge 6
let secondPromise = new Promise(function (resolve, reject) {
  resolve("Second!");
});

let firstPromise = new Promise(function (resolve, reject) {
  resolve(secondPromise);
});

// firstPromise.then((value) => value).then((finalValue) => {
//     console.log('Challenge 6', finalValue);
//   });

firstPromise.then((val) => console.log(val));

//Challenge 7
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};
