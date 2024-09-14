// const,let等の変数宣言
// var val1 = 'var変数';
// console.log(val1);

// // var変数は上書き可能
// val1 = 'var変数の上書き';
// console.log(val1);

// // var変数は再宣言可能
// var val1 = 'var変数を再宣言';

// let val2 = 'let変数';
// console.log(val2);

// // letは上書き可能
// val2 = 'let変数を上書き';
// console.log(val2);

// // // letは再宣言不可能
// // let val2 = 'let変数を再宣言';

// const val3 = 'const変数';
// console.log(val3);

// // const変数は上書き不可
// val3 = "const変数を上書き";

// // const変数は再宣言不可
// const val3 = 'const変数再宣言';
// console.log(val3);

// 重要　--------------------------------------------------------
// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: 'じゃけぇ',
//   age: 31,
// };
// console.log(val4);
// val4.name = 'jak';
// val4.address = 'Hiroshima';
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);
// 重要　--------------------------------------------------------

/**
 * テンプレート文字列
 */
// const name = 'じゃけぇ';
// const age = 31;

// // 従来の方法
// // const message1 = '私の名前は' + name + 'です。年齢は' + age + 'です。';
// // console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// function func1(str) {
//   return str;
// }
// console.log(func1('func1です'));

// const func1 = function (str) {
//   return str;
// };
// console.log(func1('func1です'));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2('func2です'));

// // 引数が1つの場合に括弧を省略でき、関数の本体が1行だけで、return文が含まれる場合、波括弧 {} と return を省略することができます
// const func3 = (str) => str;
// console.log(func3('func3です'));

// const func4 = (a, b) => {
//   return a + b;
// };
// const a = 1;
// const b = 2;
// console.log(func4(a, b));

// // オブジェクトを返す場合、オブジェクトを()で囲う
// const func5 = (c, d) => ({
//   hoge: c,
//   fuga: d,
// });
// const c = 1;
// const d = 2;
// console.log(func5(c, d));

/**
 * 分割代入
 */

// 重要　--------------------------------------------------------
// const myProfile = {
//   name: 'じゃけえ',
//   age: 31,
// local: "hiroshima", // 分割代入と数が合わなくても良い
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;

// const myProfile = ['じゃけえ', 31];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。}`;
// console.log(message3);

// 配列も分割代入できる
// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。}`;
// console.log(message4);

/**
 * デフォルト値(引数、分割代入)
 */
// const sayHello = (name = 'ゲスト') => console.log(`こんにちは！${name}さん！`);
// sayHello('じゃけ-');
// sayHello();

// const myProfile = {
//   age: 31,
// };

// // 分割代入でもデフォルト値を使える
// const { age, name = "ゲスト" } = myProfile;
// console.log(age);
// console.log(name);

/**
 * オブジェクトの省略記法
 */
// const name = 'jake';
// const age = 31;

// // オブジェクトの中身が、変数と同じ場合、キーを省略できる
// const myProfile = {
//   // name: name,
//   // age: age,
//   name,
//   age,
// };
// console.log(myProfile);

/**
 * スプレッド構文
 */

// // 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFung(arr1[0], arr1[1]);
// // スプレッド構文だが、上とやっていることは同じ
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// // 1つ目num1, 2つ目num2,そのほかは配列でまとめる
// const [num1, num2, ...num3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// // 配列のコピーを作る
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log('arr6', arr6);
// // arr4は中身が変わらない
// console.log('arr4', arr4);

// // 配列を結合
// const arr7 = [...arr4, ...arr5];
// console.log('arr7', arr7);

// // この書き方だと、同じ場所を参照していることになる
// const arr8 = arr4;
// arr8[0] = 100;
// console.log('arr8', arr8);
// // arr4も中身が変わってしまう
// console.log('arr4', arr4);

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ['田中', '山田', 'じゃけえ'];
// // for (let index = 0; index < nameArr.length; index++) {
// //   console.log(nameArr[index]);
// //   console.log(`${index + 1}番目は${nameArr[index]}です`);
// // }

// // // 新しい配列を作る
// // const nameArr2 = nameArr.map((name) => {
// //   return name;
// // });
// // console.log(nameArr2);

// // nameArr.map((name) => console.log(name));
// // // indexを出力
// // nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// // const numArr = [1, 2, 3, 4, 5];
// // const newNumArr = numArr.filter((num) => {
// //   return num % 2 === 1;
// // });
// // console.log(newNumArr);

// const nameArr3 = nameArr.map((name) => {
//   if (name === 'じゃけえ') {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(nameArr3);

/**
 * 三項演算子
 */
// const num = 1300;
// const formattedNum =
//   typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// };
// console.log(checkSum(50, 100));

/**
 * 論理演算子の本当の意味を知ろう && //
 */
// truthy, falsyについて

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log('1か2はtrueになります');
}
// flag1がfalseだとその時点でfalseになって計算は終了する
if (flag1 && flag2) {
  console.log('1も2もtrueになります');
}

// || は左側がtruthyの時その時点で返却する
const num = 111;
const fee = num || '金額未設定です';
console.log(fee);

// const num2 = "abc";
const num2 = 0;
const fee2 = num2 && '何か設定されました';
console.log(fee2);
