/*eslint-disable*/
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { 
    if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } 
    return _assertThisInitialized(self); 
}

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { 
    if (typeof superClass !== "function" && superClass !== null) { 
        throw new TypeError("Super expression must either be null or a function"); } 
        subClass.prototype = Object.create(superClass && superClass.prototype, { 
            constructor: { value: subClass, writable: true, configurable: true } 
        }); 
        if (superClass) _setPrototypeOf(subClass, superClass); 
    }

function _setPrototypeOf(o, p) { 
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; 
    return _setPrototypeOf(o, p); }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Parent =
    /*#__PURE__*/
    function () {
        function Parent(name) {
            _classCallCheck(this, Parent);

            this.name = name;
        }

        _createClass(Parent, [{
            key: "sayName",
            value: function sayName() {
                console.log('my name is ', this.name);
            }
        }]);

        return Parent;
    }();

var Child =
    /*#__PURE__*/
    function (_Parent) {
        _inherits(Child, _Parent); // 继承父对象原型

        function Child(name, age) {
            var _this;

            _classCallCheck(this, Child);

            _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name)); // 
            _this.age = age;
            return _this; // 
        }

        _createClass(Child, [{
            key: "sayAge",
            value: function sayAge() {
                console.log('my age is ', this.age);
            }
        }]);

        return Child;
    }(Parent);

p = new Parent('Pansy');
p.sayName();
c = new Child('Bily', 12);
c.sayName();
c.sayAge();