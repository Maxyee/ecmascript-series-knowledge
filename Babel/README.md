# Babel and Implementation

In this section, I will discuss from my knowledge how to install babel and how it works and why we will use babel.

## What is babel
There is a different kind of browser in this world and we always use that browser for finding any information into the internet world. However, every website which is showing information to that user uses some code for making that page visualize. Javascript is one of them and the browser can read the javascript code. There is a problem that some browser doesn't understand the new ES6 code. As a result, we need to convert that ES6 code to ES5 so that browser can read the code.

For this reason, I need to use a `Transpiler` who will convert my ES6 code to the ES5 code. Finally, here is the Transpiler called `Babel`

## How it works
Here I will share a sample code where we can get clear idea, how babel convert our ES6 to the ES5 code.

ES6 code :

```js

let nums = [1,2,3];
let doubleNums = nums.map((e) => e*2);

```
this code will be converted by babel into the following ES5 code:

```js
"use strict";

var nums = [1, 2, 3];
var doubleNums = nums.map(function (e) {
  return e * 2;
});

```
