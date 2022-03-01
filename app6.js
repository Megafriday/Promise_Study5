/**
 * ３秒後にPromise を返す
 * @returns {Promise}
 */
function syncTest(message) {
	return new Promise((resolve, reject) => {
		setTimeout(reject, 3000, message);
	});
}

// syncTest("メッセージ")
// 	.then(msg => console.log("console.log", msg))
// 	.catch(msg => console.error("console.error", msg));

async function main() {
	try {
		const msg = await syncTest("メッセージ");
		console.log("console.log:", msg)
	} catch (e) {
		console.error("console.error:", e);
	}
}
main();

console.log("これは即座に表示");
