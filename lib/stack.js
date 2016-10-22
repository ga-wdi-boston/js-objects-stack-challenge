'use strict';

const Stack = function Stack() {
  this._size = 0;
  this._storage = {};

  // Do we have items to add to out storage when we create the Stack?
  if (arguments) {
    console.log('We have arguments');

    // automatically add them to the this._storage
    for (let i = 0; i < arguments.length; i++) {
      let itemToAdd = arguments[i];


      this.push(itemToAdd);
      console.log('This value: ', this);
    }
  }
  console.log(arguments);
};

Stack.prototype.push = function push(value) {
  // get the key for this new value
  let key = this._size;
  // increment size counter
  this._size++; // Increase size by 1
  // add value to storage
  this._storage[key] = value;

  return this;
};

Stack.prototype.pop = function pop() {
  let size = this._size; // 3
  let lastItemIndex = size - 1; // 2
  let deleted; // undefined

  // remove newest value from storage and decrement size counter, only if data
  // exists
  // if the storage object is not empty
  if (size) {
    deleted = this._storage[lastItemIndex]; // index 2, the third item in storage
    delete this._storage[lastItemIndex]; // actually delete the item from storage

    this._size--; // reduce our size by 1
  }

  return deleted; // return deleted item
};

module.exports = Stack;
