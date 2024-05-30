# get-current-age
This package returns the current age depending on the birthdate you input.
### Installation
Install the package:
```bash
npm install get-current-age
```
### Usage
Import the package to your JavaScript file:
```javascript
import age from "get-current-age";
```
Get age:
```javascript
const day = 30,
      month = 9,
      year = 2007;
       
const myAge = age(day, month, year);

console.log("I am " + myAge + " years old");
```
