'use strict';

const Stack = function Stack() {
  this._size = arguments.length;
  this._storage = {
  };
  for(let i = 0; i < arguments.length; i++ ){
    this._storage[i] = arguments[i];
  }
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

// Answer text question from bonus:
// Which parts of each method are side-effects, and which are the "main" effect?

// Main effects are whatever is returned so really that is:
// `push` has the main effect of the entire stack
// 'pop' has the main effect of the value that was popped off top of the stack.

// Side effects are everything else. Push adds the `value` parameter to the
// top of the stack. Pop removes the value that is on top of the stack (if
// there is one).

// Note: I think `push` actually already satisfies the bonus requirement
// because it returns the entire object.

// My tests are here to go along with grunt test:
let myStack = new Stack(2,4,1,'hi');
console.log('myStack', myStack);
myStack.push('newVal');
console.log('myStack', myStack);
myStack.pop();
console.log('myStack', myStack);
