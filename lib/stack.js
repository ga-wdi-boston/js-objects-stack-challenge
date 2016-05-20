'use strict';

const Stack = function Stack(x, y, z) {
  this._size = 0;
  this._storage = {
    0: x,
    1: y,
    2: z
  };
};

Stack.prototype.push = function push(value) {

    this._storage[this._size] = value;
    this._size++;

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

/*
let stack = new Stack();
stack.push(1).push(2).push(3);
stack.pop();
*/
let stack = new Stack ('cats', 'dogs', 3);
console.log (stack);

module.exports = Stack;
