'use strict';

const Queue = function Queue() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push(value) {
  // increment size counter
  // add value to storage

  let newObjectName = this._size;

  this._storage[newObjectName] = value;

  this._size += 1;

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
