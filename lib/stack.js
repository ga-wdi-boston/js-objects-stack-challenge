'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};

  for (let i = 0; i < arguments.length; i++) {
    this._storage[i] = arguments[i];
  }

};

Stack.prototype.push = function push(value) {
  this._storage[this._size] = (value);
  return this;
};

Stack.prototype.pop = function pop() {
  let deleted;
  deleted = this._storage[this._size];
  delete this._storage[this._size];
  this._size--;

  return deleted;
};

module.exports = Stack;
