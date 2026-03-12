// Javascript Modules

export function add(x,y){
    return x+y;
}

export const name="Jhon Doe";
export const age=30;


const message=()=>{
    const name ="Jessee";
    const age=55;
    return name + " is " + age + " years old.";
}
export default message;//returns only one value, can be a variable, function or class.


const name1="Alice";
const age1=25;
export {name1,age1};


export const PI=3.14159;
export function multiply(x,y){
    return x*y;
}
export function divide(x,y){
    if(y===0){
        throw new Error("Cannot divide by zero");
    }
    return x/y;
}

export function subtract(x,y){
    return x-y;
}

