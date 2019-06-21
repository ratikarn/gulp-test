function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// class, properties, method
var Student =
/*#__PURE__*/
function () {
  function Student(name, grade) {
    _classCallCheck(this, Student);

    this._name = name;
    this._grade = grade;
  }

  _createClass(Student, [{
    key: "showInfo",
    value: function showInfo() {
      return 'Hello, ' + this.name + ' Grade: ' + this.grade;
    }
  }, {
    key: "name",
    set: function set(value) {
      this._name = value;
    },
    get: function get() {
      return this._name;
    }
  }, {
    key: "grade",
    set: function set(value) {
      this._grade = value;
    },
    get: function get() {
      return this._grade;
    }
  }]);

  return Student;
}();

var std = new Student('Ploy', 3.25);
std.name = 'john';
std.grade = '3.50'; // console.log(std.name);

console.log(std.showInfo()); // let s = new Student('john', 3.15);
// console.log(s.showInfo());