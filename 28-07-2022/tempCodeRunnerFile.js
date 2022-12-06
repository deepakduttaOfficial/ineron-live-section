function thisIsAFunction(params) {
  console.log(`My name is ${params}`);
  (function (placeName) {
    console.log(`I am from ${placeName}`);
  })();
}
const myFunction = thisIsAFunction("Deepak")("Coochbehar");
myFunction;
