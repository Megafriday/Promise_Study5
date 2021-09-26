'use strict';
const fs = require('fs');
const fileName = './test.txt';

const appendFilePromise = (message) => {
	return new Promise((resolve, reject) => {
		fs.appendFile(fileName, message, 'utf8', () => resolve());
	});
};

let promiseChain = Promise.resolve();
for (let count = 0; count < 30; count++) {
	promiseChain = promiseChain
		.then(() => appendFilePromise('おはようございます\n'))
		.then(() => appendFilePromise('こんにちは\n'))
		.then(() => appendFilePromise('こんばんわ\n'))
}

