'use strict';

var Stack = function Stack () {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push (value) {
  var size = this._size;

  this._storage[size] = value;
  this._size++;
};

Stack.prototype.pop = function pop () {
  var size = this._size;
  var lastIn = this._storage[size];

  if (size > 0) {
    delete this._storage[size];
    this._size--;
    return lastIn;
  } else if (size === 0) {
    delete this._storage[size];
    return lastIn;
  }
};

module.exports = Stack;
