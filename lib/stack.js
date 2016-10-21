'use strict';

const Stack = function Stack() {
  this._size = arguments.length;
  this._storage = {};
  for(let i = 0, max = arguments.length; i < max; i++) {
    this._storage[i] = (arguments[i]);
  }
};

Stack.prototype.push = function push(value) {
  // increment size counter
  this._size += 1;
  // add value to storage
  this._storage[this._size-1] = value;
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

// let stack = new Stack();

module.exports = Stack;
