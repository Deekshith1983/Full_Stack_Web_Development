//asynchronus Programming
function myFirst(){
    console.log("Hello");
}



function mySecond(){
    console.log("Goodbye");
}

mySecond();
myFirst();

console.log("Hello");

setTimeout(function(){
    console.log("Goodbye");
}, 2000);

console.log("Welcome");

let result1;
setTimeout(function(){
    result1=5;
},1000);// this code will run after 1 second but the next line will run immediately 
console.log(result1); //undefined

//Javascript Timeouts
setTimeout(myFunc,3000);

function myFunc(){
    console.log("Hello");
}
// settimeout function is used to wait for a specified amount of time and execute a function.
setTimeout(function() { myFunction("I love You !!!"); }, 3000);//if u only run this code, it will print "I love You !!!" after 3 seconds

function myFunction(value) {
  console.log(value);
}

//settimeout is used to dealy a execution and setinterval is used to repeat a execution after a specified amount of time

setInterval(myfunc,3000);//this function keeps on calling the myfunc after every 3 seconds
function myfunc(){
    let d= new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}


// Javascript Callbacks
// callback is a function that runs after something else as finished.
// it is passed inside a other function as an argument and is executed after some operation has been completed.
// in simple term callback is a function inside a function.
function done(value){
    console.log(value);
}

setTimeout(function(){
    done(5);

},7000);

function mydisplayer(some){
    console.log(some);
}
function calculator(num1,num2){
    let sum=num1+num2;
    mydisplayer(sum);
}
let result=calculator(5,10);

function displayer(){
    console.log("En Samachara");
}

function dealer(mycallback){
    console.log("En beegre");
    mycallback();
}

dealer(displayer);

//Callback error Handling
function getdata(callback){
    let ok =false;
    if(ok){
        callback(null,"Data received successfully");
    }else{
        callback("Error: Data not received",null);
    }
}

getdata(function(error,data){
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
});

step1(function(r1) {
  step2(r1, function(r2) {
    step3(r2, function(r3) {
      console.log(r3);
    });
  });
});// this provides a callback hell and it is very difficult to read and maintain the code.


//Promises
let mypromise= new Promise(function(resolve,reject){
    ok=false;
    if(ok){
        resolve("Promise is resolved successfully");
    }else{
        reject("Promise is rejected");
    }
});
mypromise.then(
    function(value){ console.log(value);},
    function(error){ console.log(error);}
);


let promise1 = Promise.resolve("OK");

promise1
.then(function(value) {
  console.log(value);
})
.catch(function(value) {
  myDisplayer(value);
});


//async and await
async function calci(a, b) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(a + b);
        }, 3000);
    });
}

let result = await calci(5, 10);
console.log(result);
// async and await is used to handle promises in a more elegant way. It allows us to write asynchronous code in a synchronous manner. The await keyword is used to wait for a promise to resolve and it can only be used inside an async function.
//if we use async and doesn't use await we'll get promise as pending beacuse async only returns the promise but await actually returns the value.

// error handling
try{
    hello();
}catch(error){
    console.log("the Error is:",error);
}