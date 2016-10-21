'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};
  for (let i = 0; i < arguments.length; i++) {
    this._storage[this._size] = arguments[this._size];
    this._size++
  }
};

Stack.prototype.push = function push(value) {
  // increment size counter
  let size = this._size++;
  // add value to storage
  this._storage[size] = value;
  return this;
};

Stack.prototype.pop = function pop() {
  let size = this._size;
  let target = size - 1;
  let deleted;

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
