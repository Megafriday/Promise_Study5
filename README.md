# 概要
Promise の 勉強（N予備校 同期処理と非同期処理）

## 内容
Node.jsが非同期処理（早くできるものからどんどん処理しちゃう）ということを理解し、あえて同期処理をしたい（順番をちゃんと約束したい）場合の記述法を学ぶ

1. 記述法
- Node.jsのファイルシステムを扱うためのモジュール ‘fs’ の、Sync という修飾子がついた同期関数を利用する
- Promise という ES6で追加された非同期処理のオブジェクトを利用する
- async と await という ES2017で追加された非同期処理の構文を利用する
- fs.appendFile(ファイルのパス, 追加したい文字, 文字コード, 文字を追加した後に実行したいコールバック関数) 
- fs.appendFileSync() のように Syncという修飾子がつく関数は、同期処理をする

2. Promise
- 大雑把に言うと、『できることからさっさとやっちゃうのはいいけど、ちょっとここは順番決めておくね』と約束するオブジェクト。その処理が終わってからしてほしい処理は .then()メソッドを使って記述する。
- new Promise() で、新しいPromiseオブジェクトを作る
- Promiseオブジェクトは、コンストラクタの引数にコールバック関数をとり、新しいインスタンスを作る
- Promiseオブジェクトに渡すコールバック関数の引数は、非同期処理が成功した時に実行する resolve関数と失敗した時に実行する reject関数である
- new Promise((resolve, reject)=>{ 時間の掛かる処理 });
- Promiseオブジェクトは、3つの状態(status)のどれかにある
	- ① pending（最初に作成された時の状態。非同期処理が成功も失敗もしていない）
	- ② fulfilled （非同期処理が成功し完了した状態）　＊resolvedと書かれているものもあるが、詳細はMDNに説明がある
	- ③ rejected （非同期処理が失敗した状態）
- 処理が正常に完了した時には resolve関数が実行され、状態が pending → fulfilled になる。処理が失敗した時には第二引数の reject関数が呼ばれ、状態が pending → rejected になる。どちらかが実行されると Promiseオブジェクトの処理が終了する
- .then(f1,f2)メソッドや、.catchメソッド、.finallyメソッドを理解するときに重要な項目だが、今回のテキストと関係ないので詳細は割愛
- Promiseオブジェクトの処理が終了したら続きの処理をするメソッドに、.then(引数はコールバック関数)がある
thenメソッドのコールバック関数の引数にはresolve関数で渡された値を取得できる
- thenメソッドの戻り値は、Promiseオブジェクトになる

3. async/await
- promise構文では書きづらい処理を書けたり、簡潔に書けたりする
- async は非同期関数（async function）を定義する関数宣言であり、関数の頭につけることで、Promiseオブジェクトを返す関数にすることができる
- awaitは、async function内で使う、Promiseオブジェクトが値を返すのを待つ演算子で、値が返されると処理を再開する
- async/awaitは、Promiseの効率の良い書き方なので、裏はPromiseです。別の概念ではありません。簡単に言うと、awaitの後ろの行を全て、その行のthenに入れたことにするってやつです。
