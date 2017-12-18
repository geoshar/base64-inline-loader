let assert = require('assert');
let path = require('path');
let fs = require('fs');

let files = [
	'./cache/index.css',
	'./expected/index.css'
];
let actual, expected;

describe('Default test', () => {
	before(() => {
		[ actual, expected ] = files.map(name => {
			let file = path.join(__dirname, name);

			return fs.readFileSync(file, 'utf-8');
		});
	});

	it('Convert files', () => {
		assert.equal(actual, expected, 'Files not are equal');
	});
});
