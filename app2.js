'use strict';
const fs = require('fs');
const fileName = './test.txt';

async function main() {
	for (let count = 0; count < 30; count++) {
		await promiseFunction("おはようございます\n");
		await promiseFunction("こんにちは\n");
		await promiseFunction("こんばんは\n");
	}
}

function promiseFunction(str) {
	return new Promise((resolve, rejct) => {
		fs.appendFile(fileName, str, 'utf8', () => { resolve(); });
	});
}

main();
