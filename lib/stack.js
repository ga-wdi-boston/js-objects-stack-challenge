'use strict';

var Stack = function Stack() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push(value) {
  let i = this._size;
  this._storage[i] = value;
  this._size++;
  // increment size counter
  // add value to storage
  return this;
};

Stack.prototype.pop = function pop() {
  var size = this._size;
  var target = size - 1;
  var deleted;

  // remove newest value from storage and decrement size counter, only if data
  // exists
  if (size) {
    deleted = this._storage[target];
    delete this._storage[target];

    this._size--;
  }

  return deleted;
};

module.exports = Stack;
