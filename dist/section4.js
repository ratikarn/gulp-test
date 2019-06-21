function showData() {
  console.log('hello1');
  console.log('hello2');
} // เรียกใช้ function
// showData();


function showInfo(name, grade) {
  console.log('hello ' + name + ' Grade: ' + grade);
} // showInfo('john',3.45);
// function sum(x,y) {
//     return x+y;
// }
// let total = sum(10,5);
// console.log(total);
// default parameter


function f(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'default';
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  return a + b + c;
} // console.log(f(10, 'marry', 5));
// calling vs referencing
// var


var me = f; // console.log(me());
// object property

var o = {
  name: "marry"
};
o.showData = f; // console.log(o.name);
// console.log(o.showData());
// Array

var nums = [1, 2, 3];
nums[0] = f; // console.log(nums[0]());
// Destructuring Assignment

var os = {
  name: 'Ubuntu',
  version: 16.04
};
var name = os.name,
    version = os.version; // console.log(name);
// Destructuring array

var os2 = ['Window', 10];
var name2 = os2[0],
    version2 = os2[1]; // console.log(name2);
// console.log(version2);
// Destructuring Arguments

var os3 = {
  name: 'iOS',
  version: 13
};

function getOS(_ref) {
  var name = _ref.name,
      version = _ref.version;
  return 'OS: ' + name + ' Version: ' + version;
} // เรียกฟังก์ชัน
// console.log(getOS(os3));
// new shorthand function


var os4 = {
  name: 'iOS',
  version: 10,
  getOS: function getOS() {
    return 'OS';
  }
}; // console.log(os4.getOS());
// function arrow
// แบบเดิม const f1 = function() { return 'Hello' ; };

var f2 = function f2() {
  return 'Hello';
};

var f3 = function f3(x, y) {
  return x + y;
}; // console.log(f3(10,5));
// Rest parameter แปลงตัวแปรที่รับเข้ามาเป็น array


function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (sum, num) {
    return sum += num;
  });
} // console.log(sum(1,2,3,4,5));
// Spread operator กระจาย array ที่รับเข้ามาให้เป็นตัวแปร


function add(x, y, z) {
  return x + y + z;
}

var number2 = [10, 20, 30]; // console.log(add(...number2));