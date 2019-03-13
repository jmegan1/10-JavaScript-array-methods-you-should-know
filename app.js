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
