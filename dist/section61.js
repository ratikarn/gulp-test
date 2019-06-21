function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.result = [];
  }

  _createClass(User, [{
    key: "addUser",
    value: function addUser() {
      var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.result.push(user);
    }
  }, {
    key: "delUser",
    value: function delUser() {
      this.result.pop();
    }
  }, {
    key: "showUser",
    value: function showUser() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.result[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var v = _step.value;
          console.log(v);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }]);

  return User;
}();

var a = new User();
a.addUser(['Ploy', 'a@gmail.com']);
a.addUser(['Moo', 'b@gmail.com']);
a.addUser(['PB', 'c@gmail.com']);
a.showUser();
a.delUser();
a.showUser();