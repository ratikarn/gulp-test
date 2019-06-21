// Array
let arr = ['a','b','c'];

// for (let v of arr) {
//     console.log(v);
//     //a b c
// }

// for (let v in arr) {
//     console.log(v);
//     //0 1 2
// }

// foreach
// array.forEach(function(item,index) {
//     console.log(index + '=>' + item);
// });
// arrow
// arr.forEach((item,index) => console.log(index + '=>' + item));

let arr2 = ['a','b','c'];
// push => a b c d
// arr2.push('d');
// for (let v of arr2) {
//     console.log(v);
// }

// pop => a b 
// arr2.pop();
// for (let v of arr2) {
//     console.log(v);
// }

// unshift => z a b c
// arr2.unshift('z');
// for (let v of arr2) {
//     console.log(v);
// }

// shift => b c
// arr2.shift();
// for (let v of arr2) {
//     console.log(v);
// }

// concat ต่อท้าย
// let arr3 = arr2.concat(['d','e','f']);
// for (let v of arr3) {
//     console.log(v);
// }

// slice
// let arr4 = [1,2,3,4,5];
// let arr5 = arr4.slice(1);
// for (let v of arr5) {
//     console.log(v);
// }

// spilce
// let arr6 = [1,2,5,6];
// arr6.splice(0,0,7,8);
// for (let v of arr6) {
//     console.log(v);
// }

// filter
let employee = [];
for (let name of ['Ploy','Marry','John']) {
    for (let i = 0; i <=10; i++) {
        employee.push({name,i});
    }
}
let emp = employee.filter(c => c.i === 3 );
// console.log(emp); 

let number10 = [10,20,30];
let sum = number10.reduce((a,x) => a += x);
console.log(sum);



