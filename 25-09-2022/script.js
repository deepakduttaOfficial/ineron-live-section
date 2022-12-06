/* // HOF - Higher order function
//  callback, setTimeout, setInterval tiomout
// function greet(userName, callBack) {
//   console.log("Hello ", userName);
//   callBack();
// }
// function callBack() {
//   console.log("I am a Callback");
// }
// greet("Deepak", callBack);

// function myName() {
//   console.log("My name is Deepak");
// }

// setTimeout(() => {
//   console.log("My name is Deepak");
// }, 2000);

// setInterval(() => {
//   console.log("My name is Deepak");
// }, 2000);
// const names = ["Deepak", "Shivam", "Rajesh", "Vicram"];
// names.forEach((name, index) => {
//   console.log(name);
// });

// const numbers = [1, 2, 3, 4, 5, 6];
// const squr = numbers.map((number, index) => {
//   return number * number;
// });
// console.log(numbers);
// console.log(squr);
*/
// map

// const contries = ["India", "Germany", "Japan"];
// const fil = contries.filter((country) => {
//   return country.includes("ia");
// });
// console.log(fil);

// reduce
// const chocolates = [1, 2, 3, 4, 5, 6];
// const wrap = chocolates.reduce((choco, position) => {
//   return { choco, position };
// });
// console.log(wrap);

// function sum(x, y) {
//   return x + y;
// }
// let var1 = [1, 2, 3];
// console.log(sum(...var1)); // Spred

// function sumTwo(...args) {// Rest
//   console.log(args);
// }
// sumTwo(1, 2, 3, 4);

const number = new Set(1, 2, 3, 3);
console.log(number);
