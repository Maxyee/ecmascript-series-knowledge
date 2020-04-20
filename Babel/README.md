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

## Installation and Process Output

At the very beginning, we have to install nodejs to our local machine. below I am giving my another documentation link where I discussed how to install nodejs :

[Install Nodejs to Local Machine](https://github.com/Maxyee/nodejs_logics/tree/master/InstallNodejs)

However, after installing nodejs we have to create a new project folder and make a `package.json` file. In my case, I created a folder called Babel. Navigate to your folder you can use your own folder name. Then we need to run a command for making our package.json file

`npm init`

finllay give your information you will get your `package.json` file.

```js
{
  "name": "babel",
  "version": "1.0.0",
  "description": "es6 to convert es5 using babel",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel src -d dist"
  },
  "author": "julhas",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-latest": "^6.24.1"
  }
}

```

Now install the Babel CLI tool. The command will be

`npm install --save-dev babel-cli`

this command will install a depedencies to our package.json file like this :

```js
"devDependencies": {
    "babel-cli": "^6.26.0"
 }

```

Into the project folder I need to create two different folder `src` and `dist` because from one folder `src`, I will write the ES6 code and another folder `dist` will generate the converted code of ES5 using babel. However, another important thing is to consider is that we need to add a scripts section to our package.json file

```
"scripts": {
    "build": "babel src -d dist"
}

```

Now navigate to the `src` folder and make the `app.js` file and write the below code on that file.

```js

var nums = [1,2,3];
var doubleNums = nums.map((e) => e * 2);

```

However, lets run this command :

`npm run build`

After running this command we will see there is another file `app.js` is created into our dist folder. but the code is exacty same as ES6. That means we successfully generated the file but babel did not convert the code to ES5 yet.

### Converting section

To enable convertion, we need to install latest presets and `.babelrc` file.

1. lastest preset install command :

`npm install babel-preset-latest --save-dev`

2. create a `.babelrc` into the root project folder and then add this lines to that folder

```js

{
  "presets": ["latest"]
}

```

All set, now lets run the build command again : 

`npm run build`

That's all, at this moment, if we check the dist folder app.js file we will see the converted ES5 code there.

```js

"use strict";

var nums = [1, 2, 3];
var doubleNums = nums.map(function (e) {
  return e * 2;
});

```

Thank you! Happy coding !!
