'use strict';
const fs = require('fs');
const fileName = './test.txt';
const array = ['おはようございます\n', 'こんにちは\n', 'こんばんは\n'];

for (let count = 0; count < 30; count++) {
	Promise.all(array.map(i => syncFunction(i)));
}

function syncFunction(str) {
	return new Promise((resolve, rejct) => {
		fs.appendFile(fileName, str, 'utf8', () => { resolve() });
	});
}

