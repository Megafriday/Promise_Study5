
async function の戻り値は Promise オブジェクト
Promise.then() の戻り値も Promise オブジェクト

// async function の戻り値は、Promise オブジェクト
const sayHello = async (value) => {
  return `Hello ${value}`;
};
console.log(sayHello('World')); // Promise { 'Hello World' }

sayHello('World')
  .then((value) => {   // Promiseが返るのでthen()が使える
    console.log(value); // Hello World
  });

ちなみに、then() 内の戻り値も、Promise オブジェクト
そのため、thenチェーン でつなげられる。

https://qiita.com/monsoonTropicalBird/items/2e002a31c261433047e5
