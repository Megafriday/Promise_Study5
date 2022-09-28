let waitPromise = new Promise((resolve, reject) => {
	setTimeout(() => resolve(), 3000);
});

waitPromise
	.then(() => "A")
	.then((data) => console.log(data));

waitPromise = waitPromise
	.then(() => "B")
	.then((data) => console.log(data));

waitPromise
	.then(() => "C")
	.then((data) => console.log(data));

console.log("D");
