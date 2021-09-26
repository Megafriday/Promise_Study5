'use strict';
const fs = require('fs');
const fileName = './test.txt';

function appendFilePromise(str) {
	return new Promise((resolve, rejct) => {
		fs.appendFile(fileName, str, 'utf8', () => resolve());
	});
}

async function main() {
	for (let count = 0; count < 30; count++) {
		await fs.appendFilePromise("おはようございます\n");
		await appendFilePromise("こんにちは\n");
		await appendFilePromise("こんばんは\n");
	}
}

main();