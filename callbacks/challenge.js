// challenge 1

function addTow(num) {
  return num + 2;
}
console.log(addTow(6));

// challenge 2

// return word + "s"; js think the inner quotes end the string "aya" s"
function addS(word) {
  return `${word}s`;
}
console.log(addS("aya"));

// challenge 3
function map(callback, array){
  const output = []

  for(let i=0 ; i<array.length; i++){
    output.push(callback(array[i]))
  }
  return output;
}

function multipl

function forEach(array, callback) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i]));
  }
}

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, function (char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'
