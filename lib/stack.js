'use strict';

const Stack = function Stack()
{
  this._size = 0;
  this._storage = {};
};

Stack.prototype.push = function push( value )
{

  let newStack = this._storage;

  newStack[this._size] = value;

  this._size++;
  this._storage = newStack;
  return this._storage;
};

Stack.prototype.pop = function pop()
{

  // remove newest value from storage and decrement size counter, only if data
  // exists
  let value;
  if( this._size )
  {
    let target = this._size - 1;
    console.log( target );
    value = this._storage[target];
    delete this._storage[target];
    this._size--;
  }
  else
  {
    return value;
  }
  return value;
};

module.exports = Stack;
