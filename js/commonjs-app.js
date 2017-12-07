var firstModule = firstModule || require('./first-module/first.module');
var secondModule = secondModule || require('./second-module/second.module');

let firstClassInstance = new firstModule.FirstClass();
let secondClassInstance = new secondModule.SecondClass();

console.log(firstClassInstance.hello());
console.log(secondClassInstance.hello());

