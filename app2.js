'use strict';
const fs = require('fs');
const fileName = './test.txt';

async function main() {
	for (let count = 0; count < 30; count++) {
		await syncFunction("おはようございます\n");
		await syncFunction("こんにちは\n");
		await syncFunction("こんばんは\n");
	}
}

function syncFunction(str) {
	return new Promise((resolve, rejct) => {
		fs.appendFile(fileName, str, 'utf8', () => { resolve(); });
	});
}

main();