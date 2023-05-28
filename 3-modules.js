//Get The common resources
//Encapsulation to be followed
//require to have access to other modules
const names=require('./4-Names.js')//importing other modules and ./ to be used before specifying names
const sayHi=require('./5-utils.js')
// console.log(names);
const data=require('./6-alternative.js')
require('./7-function_run.js')//method wil automatically run no need to import
console.log(data);
sayHi('tanni')
sayHi(names.name1)
sayHi(names.name2)