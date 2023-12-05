'use strict';
const arr = ['a','b','c','d','e'];
// slice method
console.log(arr.slice(2));
console.log(arr.slice(2,1));
console.log(arr.slice(3,5));
console.log(arr.slice(-2));
console.log(arr.slice(2,-1));
console.log(arr.slice());
console.log(...arr);
// splice method
console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1,2));
const arr2 =['f','g','h','i','k'];
console.log(arr2.splice(1,2)); // it starts at index 1 and then 2 elements from 1,2 .
console.log(arr2);

// reverse method
const arr3 = [10,20,30,40,50];
console.log(arr3.reverse());
console.log(arr3);
// concat method
const lett1 = ['a','b','d'];
const lett2 = ['u','l'];
const x= lett1.concat(lett2);
console.log(x);
// Join methods
console.log(x.join());