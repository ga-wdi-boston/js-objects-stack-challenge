'use strict';

const Stack = function () {
  this._size = 0;
  this._storage = {};
    for (let i = 0; i < arguments.length; i++) {
      this._storage[i] = arguments[i];
      this._size++;
    }
};

// This did not work, 'Cannot set property "push" of undefined'. Why?
// const Stack = () => { this._size = 0; this._storage = {}; };

Stack.prototype.push = function push() {
  if(arguments.length){
    for (let i = 0; i < arguments.length; i++) {
      this._storage[this._size] = arguments[i];
      this._size++;
    }
  } else {
    this._storage[this._size] = null;
    this._size++;
  }
  return this;
};

Stack.prototype.pop = function pop() {
  let target = this._size - 1;

  if(arguments.length) {
    delete this._storage[target];
    this._size--;

    return this;
  } else {
    let deleted;

    // remove newest value from storage and decrement size counter, only if data
    // exists
    if (this._size) {
      deleted = this._storage[target];
      delete this._storage[target];

      this._size--;
    }

    return deleted;
  }
};

module.exports = Stack;
