// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(...numbers);

// function sumTwo(...arg) {
//   sum = 0;
//   for (const a of arg) {
//     sum = sum + a;
//   }
//   console.log(sum);
// }

// sumTwo(1, 2, 3, 4, 5, 6, 7);

// let people = {
//   name: "Deepak",
// };
// console.log(people.name);

// let person = new Object();
// person.name = "Deepak";
// console.log(this);

// let person = function (name, count) {
//   this.name = name;
//   this.count = count;
// };

// console.log(new person("Deepak", 100));

// let nums = [1, 4, 5, 6, 2, 3, 4, 5, 1, 2, 3, 4, 2, 2, 4, 22, 3, 34];
// let sets = new Set(nums);
// console.log(Math.min());

// (function (params) {
//   console.log(params);
// })("My name is Deepak");

// if (true) {
//   let a = "Hello";
// }
// console.log(a);

// let a = (1, 2, 3, 4, 5, 6, 7, 8);
// console.log(a); // 8

// const fackNumber = "123";
// let org = Number(fackNumber);
// console.log(String(org));

// const number = [1, 2, 3, 4];
// const [a, b, ...c] = number;
// console.log(c);

// const num = [1, 2, 3, 4, 5];
// let [a, , b, c, ...d] = num;
// console.warn(d);
// (function (x, y) {
//   console.log(x + y); // Spread
// })(...[4, 5]);

// const fullStack = [
//   ["react", "vue", "angular"],
//   ["nodejs", "mongoDB", "express"],
// ];

// function sumation(...params) {
//   let sum = 0;
//   console.log(...params);
//   for (const i of params) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumation(1, 2, 3, 5)); // Rest

// let obj = {
//   name: "Deepak",
//   role: "user",
// };
// console.table(obj);
// obj.role = "Admin";
// console.table(obj);

// const person = function (fName, lName) {
//   this.fName = fName;
//   this.lName = lName;
// };
// let myName = new person("Deepak", "Dutta");
// let favCricater = new person("Virat", "Kohli");
// console.log(myName, favCricater);

// let array = [1, 2, 4, 3, 5, 6, 7, 8, 3, 4, 5, "1"];
// let newArray = new Set(array);
// newArray.map((e) => console.log(e));

// let map = new Map();
// map.set("1", "One");
// map.set(5, "Five");
// map.set(true, "True");
// map.set(true);

// function outer() {
//   let name = "Deepak Dutta";
//   function inner1() {
//     console.log(name);
//   }
//   function inner2() {
//     console.log(name);
//   }
//   function inner3() {
//     console.log(name);
//   }
//   return { inner1, inner2, inner3 };
// }
// console.log(outer());

let number1 = [4];
console.log(number1);
let number2 = [6];
console.log(number2);
let sum = number1 + number2;
console.log(sum);
