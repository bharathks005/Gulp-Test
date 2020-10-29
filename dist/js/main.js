"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var check = false;

var fn = function fn(data) {
  console.log(data + " working fine");
}; // String Interpolation


var customer = {
  name: "Foo"
};
var card = {
  amount: 7,
  product: "Bar",
  unitprice: 42
};
var message = "Hello ".concat(customer.name, ",\nwant to buy ").concat(card.amount, " ").concat(card.product, " for\na total of ").concat(card.amount * card.unitprice, " bucks?");
fn("babel "); // for of 

var fibonacci = _defineProperty({}, Symbol.iterator, function () {
  var pre = 0,
      cur = 1;
  return {
    next: function next() {
      var _ref = [cur, pre + cur];
      pre = _ref[0];
      cur = _ref[1];
      return {
        done: false,
        value: cur
      };
    }
  };
});

var _iterator = _createForOfIteratorHelper(fibonacci),
    _step;

try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var n = _step.value;
    if (n > 1000) break;
    console.log(n);
  } // find index

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

[1, 3, 4, 2].find(function (x) {
  return x > 3;
}) // 4
[(1, 3, 4, 2)].findIndex(function (x) {
  return x > 3;
}); // 2
// default parameter

function f(x) {
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
  var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 42;
  return x + y + z;
}

f(1) === 50;
var data = "dsjfh msd\ndfhgsdkjfhgdfsjk\nsadfhskdgfskhdfg\nsdfgjsdhfgjdksdjdksjd123g";