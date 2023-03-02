const arry = [1,2,3,4,5,6,7,8,9,10];


const odds = arry.filter(n => n % 2);
const div = arry.filter(n => n % 2 === 0 || n % 5 === 0);
const sqr = arry.filter(n => n % 3 === 0);
const sqrD5 = arry.filter(n => n % 5 === 0)
sqr.forEach(Func); 
sqrD5.forEach(Func);
let sum = sqrD5.reduce((Sum, a) => Sum + a, 0);

function Func(item, index, arr) {
    arr[index] = Math.pow(item, 2);
  } 

  
console.log(`An array of odds: [${odds}]`);
console.log(`An array divisible by 2 or 5: [${div}]`);
console.log(`An array divisible by 3 then squared: [${sqr}]`);
console.log(`An array divisible by 5 then squared then summed = ${sum}`);
