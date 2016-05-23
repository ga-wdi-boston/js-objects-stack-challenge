'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push(value) {
  // increment size counter  for loop
  // add value to storage    return argument to ._storage
  this.storage[this._size] +=1;

};
  return this._storage
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
