# get-current-age
This package returns the current age depending on the birthdate you input.
### Installation
Install the package:
```bash
npm install get-current-date
```
### Usage
Include the package in your JavaScript:
```javascript
const age = require("get-current-date");
```
Get age:
```javascript
const day = 30,
      month = 9,
      year = 2007;
       
const myAge = age(day, month, year);

console.log("I am " + myAge + " years old");
```
