'use strict';

const Stack = function () {
  this._size = 0;
  this._storage = {};
};

// This did not work, 'Cannot set property "push" of undefined'. Why?
// const Stack = () => { this._size = 0; this._storage = {}; };

Stack.prototype.push = function push(value) {
  this._storage[this._size] = value;
  this._size++;
  // increment size counter
  // add value to storage
};

Stack.prototype.pop = function pop() {
  let target = this._size - 1;
  let deleted;

  // remove newest value from storage and decrement size counter, only if data
  // exists
  if (this._size) {
    deleted = this._storage[target];
    delete this._storage[target];

    this._size--;
  }

  return deleted;
};

module.exports = Stack;
