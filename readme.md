# isStrHex
Simple way to detect if a string is a hexadecimal value (`A-Fa-f0-9`)
This is a very simple code, that would help with validation of strings, And is used inside another of my packages. Main reason of the creation for me was to validate data input on Ethereum transactions in case the user added a non-hex character inside any of the values. but can be used for pretty much anything else (as long as a simple hex validation is needed)
### NPM and version
[![npm version](https://badge.fury.io/js/isstrhex.svg)](https://www.npmjs.com/package/isstrhex)

### Install
Install using NPM with the following command:
```
npm i isstrhex
```

### Usage

Here are a few examples that can be used:
``` javascript
const isHex = require('isstrhex'); 
isHex("F"); // Returns true
isHex("Fae4039") // Returns true
isHex("kli093") // Returns false
isHex("🌟@#$") // Returns false

```

### Test
Run `npm test` for more tests.
