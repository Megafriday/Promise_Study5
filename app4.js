'use strict';
const fs = require('fs');
const fileName = './test.txt';

let count = 0;
function callBackHell() {
	fs.appendFile(fileName, 'あ', 'utf8', () => {
		fs.appendFile(fileName, 'い', 'utf8', () => {
			fs.appendFile(fileName, 'う', 'utf8', () => {
				fs.appendFile(fileName, 'え', 'utf8', () => {
					fs.appendFile(fileName, 'お', 'utf8', () => {
						fs.appendFile(fileName, '\n', 'utf8', () => {
							if (count === 5) { return };
							count++;
							callBackHell();
						});
					});
				});
			});
		});
	});
}

callBackHell();