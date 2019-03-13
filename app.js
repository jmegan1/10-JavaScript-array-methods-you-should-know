/*for (var i = 1; i < 101; i++) {
  if (i % 15 == 0) document.write("fizzbuzz");
  else if (i % 5 == 0) document.write("buzz");
  else if (i % 3 == 0) document.write("fizz");
  else document.write(i);
}

for (var i = 1; i < 101; i++){
if (i % 15 == 0) console.log('fizzbuzz');
else if( i % 5 == 0) console.log('fizz');
else if( i % 3 == 0) console.log('buzz');
else console.log(i);
}*/
/*
forEach()
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(item => {
  console.log(item); //document.write(item);
}); */

/*
includes()
const arr = [1, 2, 3, 4, 5, 6];
arr.includes(2); // output true
arr.includes(7); // ouput false */

/*

filter()

//item(s) greater than 3
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter(num => num > 3);
console.log(filtered); //output: [4, 5, 6]
console.log(arr); //output: [1, 2, 3, 4, 5, 6] . */

/*
map()

const arr = [1, 2, 3, 4, 5, 6];
// add one to every element
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded);  // output [2, 3, 4, 5, 6, 7]

console.log(arr); // ooutput [1, 2, 3, 4, 5, 6] . */

/*
//reduce();

const arr = [1, 2, 3, 4, 5, 6];

const sum = arr.reduce((total, value) => total + value, 0);
console.log(sum); // 21
*/


/*
//some()

const arr = [1, 2, 3, 4, 5, 6];
// at least one element is greater than 4?
const largeNum = arr.some(num => num > 4);
console.log(largeNum): // output: true

// at least one element is less than or equal to 0?
const small Num = arr.some(num => num <= 0);
console.log(smallNum); // output: false . */

/*
every()

  const arr = [1, 2, 3, 4, 5, 6];

  // all elements are greater than 4
  const greaterFour = arr.every(num => num > 4);
  console.log(greaterFour); // output: false

  // all elements are less than 10
  const lessTen = arr.every(num => num < 10);
  console.log(lessTen); // output: true . */

  /*

  sort()

    const arr = [1, 2, 3, 4, 5, 6];
  const alpha = ['e', 'a', 'c', 'u', 'y'];

  // sort in descending order
  descOrder = arr.sort((a, b) => a > b ? -1 : 1);
  console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

  // sort in ascending order
  ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
  console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y'] . */

  /*

  Array.from()

  const name = 'frugence';
  const nameArray = Array.from(name);

  console.log(name); // output: frugence
  console.log(nameArray); // output: ['f', 'r', 'u', 'g', 'e', 'n', 'c', 'e']
*/
/*
working with DOM

  // I assume that you have created unorder list of items in our html file.

  const lis = document.querySelectorAll('li');
const lisArray = Array.from(document.querySelectorAll('li'));

// is true array?
console.log(Array.isArray(lis)); // output: false
console.log(Array.isArray(lisArray));  // output: true
*/

/*
Array.of()

const nums = Array.of(1, 2, 3, 4, 5, 6);
  console.log(nums); // output: [1, 2, 3, 4, 5, 6]

  */

