'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push(value) {
  // increases the size of our storage
    let size = this._size++;
    // assigns size as a key of storage
    // assigns data as the value of this key
    this._storage[size] = value;
};

Stack.prototype.pop = function pop() {
  let size = this._size--;

  // remove newest value from storage and decrement size counter, only if data
  // exists
    delete this._storage[size];
    this._size--;
};

module.exports = Stack;
