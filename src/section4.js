function showData() {
    console.log('hello1');
    console.log('hello2');
}
// เรียกใช้ function
// showData();

function showInfo(name,grade){
    console.log('hello ' + name + ' Grade: ' + grade);
}
// showInfo('john',3.45);

// function sum(x,y) {
//     return x+y;
// }
// let total = sum(10,5);
// console.log(total);

// default parameter
function f(a, b = 'default', c=3) {
    return a + b +c ;
}
// console.log(f(10, 'marry', 5));

// calling vs referencing
// var
const me = f;
// console.log(me());

// object property
let o = {
    name: "marry"
};
o.showData = f;
// console.log(o.name);
// console.log(o.showData());

// Array
let nums = [1,2,3];
nums[0] = f;
// console.log(nums[0]());

// Destructuring Assignment
const os = {
    name: 'Ubuntu',
    version: 16.04
};
let {name, version} = os;
// console.log(name);

// Destructuring array
const os2 = ['Window',10];
let [name2, version2] = os2;
// console.log(name2);
// console.log(version2);

// Destructuring Arguments
const os3 = {
    name: 'iOS',
    version: 13
}; 
function getOS({name, version}){
    return 'OS: ' + name + ' Version: ' + version;
}
// เรียกฟังก์ชัน
// console.log(getOS(os3));

// new shorthand function
const os4 = {
    name: 'iOS',
    version: 10, 
    getOS() {return 'OS';}
}; 
// console.log(os4.getOS());

// function arrow
// แบบเดิม const f1 = function() { return 'Hello' ; };
const f2 = () => 'Hello';

const f3 = (x,y) => x+y;
// console.log(f3(10,5));

// Rest parameter แปลงตัวแปรที่รับเข้ามาเป็น array
function sum(...numbers){
    return numbers.reduce((sum,num) => sum += num);
}
// console.log(sum(1,2,3,4,5));

// Spread operator กระจาย array ที่รับเข้ามาให้เป็นตัวแปร
function add(x,y,z) {
    return x + y + z;
}
const number2 = [10,20,30];
// console.log(add(...number2));














