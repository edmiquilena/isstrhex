const isStrHex = require('..');
const assert = require('assert').strict;
describe("Validate isHex to work", () => {

	//test a function for a specific case
	it("should return true for a valid hexadecimal string", ()=> {
let realhex = '000934ed';
assert.equal(isStrHex(realhex), true);
	})

	it("should return false when there is at least one non decimal character", () => {
        let fakehex = '000934Rfded';
        assert.equal(isStrHex(fakehex), false);
	})
    it("should return false when there is at least one non decimal character (special characters)", () => {
        let fakehex = '--$$🌟';
        assert.equal(isStrHex(fakehex), false);
	})
})
