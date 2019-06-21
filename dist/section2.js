// let firstName = "Ratikarn";
// firstName = "Ploy";
// const vat = 7;
// let email;
// console.log(email);
var s = "hello \"Java Script\" "; // console.log(s);

var s2 = "hello \\ Angular"; // console.log(s2);

var name = "Ratikarn";
var age = 18;
var show = "hello" + name + "age" + age; // console.log(show);

var r = 10 * '10'; // console.log(r);

var student = {
  name: 'marry',
  grade: 3.50,
  showData: function showData() {
    return "Hello\s" + this.name + "Grade:\s" + this.grade;
  }
}; // console.log(student. showData());

var arr = ['hello', 2, 100, {
  name: 'boss'
}]; // console.log(arr.length);
// const x = "10.25";
// const n = Number(x);
// console.log(n+10);

var x = "10.25ab";
var n = parseInt(x);
console.log(n + 10);