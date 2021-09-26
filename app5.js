'use strict';
const fs = require('fs');
const fileName = './test.txt';
const array = ['おはようございます\n', 'こんにちは\n', 'こんばんわ\n'];

for (let count = 0; count < 30; count++) {
	// 結果の順番は無茶苦茶
	Promise.all(array.map(i => promiseFunction(i)));
}

function promiseFunction(str) {
	return new Promise((resolve, rejct) => {
		fs.appendFile(fileName, str, 'utf8', () => resolve());
	});
}

