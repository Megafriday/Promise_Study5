const func = (arg) => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(`${arg} が終了しました。`), 5000);
	});
};

func(1)
	.then((arg) => {
		console.log(arg);
		// return func(2);	// 処理が止まる
		return 2;				// 処理は止まらない
	})
	.then((arg) => {
		console.log(arg);
		return func(3);	// 処理は止まる
		// return 3;				// 処理は止まらない
	})
	.then((arg) => {
		console.log(arg);
	});

