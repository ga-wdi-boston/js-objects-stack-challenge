[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript Stack Challenge

> In computer science, a **stack** is an abstract data type that serves as a
> collection of elements, with two principal operations: *push*, which adds an
> element to the collection, and *pop*, which removes the most recently added
> element that was not yet removed. The order in which elements come off a stack
> gives rise to its alternative name, **LIFO** (for **last in, first out**).
> Additionally, a peek operation may give access to the top without modifying
> the stack. -- [Stack (abstract data type) - Wikipedia](https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29)

## Prerequisites
-   [Stack (abstract data type) - Wikipedia](https://en.wikipedia.org/wiki/Stack_%28abstract_data_type%29)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

## Requirements

The goal of this exercise is to practice writing prototype methods. As a
reminder of how we use prototypes, we've provided starter code including a
constructor function and one completed prototype method. Your task will be to
complete the remaining method.

Create a custom JavaScript object modeling a stack using a constructor function
and a prototype.
Starter code has been provided in [`lib/stack.js`](lib/stack.js).

-   You should be able to create a new stack with `let stack = new Stack();`.
-   Your stack should have two methods, `push` and `pop`.

    -   `push` adds a new value to the stack's storage.
    -   `pop` removes the most recently added value from the stack's storage
        and returns it.

-   You should not use `Array.prototype.push()` or `Array.prototype.pop()`.

As you work, you may run `grunt test` to check your code against these
requirements.

## Bonuses

Change `xit` to `it` in `spec/stack.spec.js` to have `grunt test` check the
bonuses.

### Pre-fill the stack on instantiation

```js
let stack = new Stack(1, 2, 3);
stack.pop(); //=> 3
```

### Allow `push` to chain

```js
let stack = new Stack();
stack.push(1).push(2).push(3);
stack.pop(); //=> 3
```

Which parts of each method are side-effects, and which are the "main" effect?

## Tasks

Developers should run these often!

-   `grunt nag`: runs code quality analysis tools on your code
    and complains.
-   `grunt test`: runs any automated tests; may depend on `grunt build`.
-   `grunt`: runs both `nag` and then `test`
-   `grunt make-standard`: reformats all your code in the standard style.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
