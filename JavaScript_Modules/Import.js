//Importing the exported variables and functions from Export.js file

import {add,name,age,subtract,multiply,divide,PI } from './Export.js';
console.log(add(2,3));
console.log(subtract(10,5));
console.log(multiply(4,5));
console.log(divide(10,2));
console.log(PI);

console.log(name);
console.log(age);

import * as Utils from './Export.js';//importing all the exported variables and functions from Export.js file and using Utils as an alias to access them
console.log(Utils.add(2,3));
console.log(Utils.name);
console.log(Utils.age);

import message,{name1 as UserName,age1 as UserAge} from './Export.js';//using alias to avoid naming conflicts with the variables in Export.js file
console.log(message());
console.log(UserName);
console.log(UserAge);


//Dynamic Import 
async function loadModule(){
    const module=  await import('./Export.js');
    console.log(module.add(5,10));
}
loadModule();