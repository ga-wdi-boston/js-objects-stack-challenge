'use strict';

const Stack = require('./stack.js');

let s1 = new Stack();
s1.push(1).push("WOOOO").push(false);

console.log(s1);

console.log(s1.pop());

let s2 = new Stack('a','b','c');
console.log(s2);
