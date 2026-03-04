//  Variable Declaration
var name = "John Doe";
var age = 30;
var isStudent = true;
console.log(name);
console.log(age);
console.log(isStudent);
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);

// Javascript Variables
let city = "New York";
const country = "USA";
// let country= "Canada"; // This will cause an error because 'country' is a constant
console.log(city);
console.log(country);

var x = 10;
x = 20; // This is allowed with 'var'
console.log(x);

let lastname = "Smith";
let Lastname = "Johnson";// This is allowed because variable names are case-sensitive
console.log(lastname);
console.log(Lastname);


let y = 10;
y = 20; // This is allowed with 'let' 
console.log(y);

// Javascript Dollar Sign
let $price = 100;
console.log($price);
// $ is treated as a valid character in variable names, but it does not have any special meaning in JavaScript.


// Data Types
let str = "Hello, World!"; // String
let num = 42; // Number
let bool = true; // Boolean
let arr = [1, 2, 3]; // Array
let obj = { name: "Alice", age: 25 }; // Object
let undef; // Undefined is a variable that has been declared but not assigned a value, so it is undefined by default.
let nul = null; // Null
let sym = Symbol("unique"); // Symbol


console.log(str, num, bool, arr, obj, undef, nul, sym);

//Block scope
{
    let blockVariable = "I am inside a block";
    console.log(blockVariable); // This will work
}

function Myfunction() {
    var x = 10;
    console.log(x); // This will work
}

Myfunction();


var x = 10;
{
    var x = 20; // This will overwrite the previous value of x because 'var' is function-scoped, not block-scoped
}
console.log(x); // This will print 20, not 10

let y1 = 20;
{
    let y1 = 30;  // This will create a new variable 'y' that is scoped to the block, so it does not affect the outer 'y'
}
console.log(y1); // This will print 20, not 30


let car = "";
console.log(typeof car); // This will print "string" because an empty string is still considered a string data type in JavaScript.


// String Comaprison
let str1 = "A";
let str2 = "B";
console.log(str1 > str2); // This will print false because "A" comes before "B" in the Unicode character set, so "A" is considered less than "B"

console.log(2 < '12'); // This will print true because when comparing a number and a string, JavaScript converts the string to a number if possible. In this case, '12' is converted to the number 12, and 2 is less than 12, so the comparison returns true.

// Javascript Arrays
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits);
// Indexing
console.log(fruits[0]);
// A single array can contain any type of data types
let mixedArray = ["Apple", 42, true, null, undefined];
console.log(mixedArray);
console.log(typeof mixedArray); // This will print "object" because arrays are a type of object in JavaScript.

let array = [1, 2, 3, 4, [5, 6, 7]];
//          0 1 2 3   4
console.log(array[4]);
console.log(array[4][0]);

// Arrays using loops
n = fruits.length;//this .length property gives the number of elements in the array.
for (let i = 0; i < n; i++) {
    console.log(fruits[i]);
}


const cars = ["Toyota", "Honda", "Ford", "BMW"];
console.log(cars);
// let cars[0]="Tesla"; // This will cause an error because 'cars' is declared as a constant, and you cannot reassign a new value to a constant variable. However, you can modify the contents of the array, but you cannot reassign the entire array to a new value.
cars[0] = "Tesla"; // This is allowed because we are modifying the contents of the array.
console.log(cars);


const fruit = ["Apple", "Banana", "Apple"];
fruit.push("Orange");
console.log(fruit);

// Array search Methods
console.log(fruit.indexOf("Banana")); //using Indexof()
console.log(fruit.includes("Cherry")); //using includes()
console.log(fruit.lastIndexOf("Apple")); //using lastIndexOf() - This method returns the last index at which a given element can be found in the array, or -1 if it is not present. 
console.log(fruit.find(fruit => fruit === "Cherry")); //using find() - This method returns the first element in the array that satisfies the provided testing function.
console.log(fruit.findIndex(fruit => fruit === "Banana")); //using findIndex() - This method returns the index of the first element in the array that satisfies the provided testing function, or -1 if no elements satisfy the testing function.
console.log(fruits.findLast(fruit => fruit === "Apple")); //using findLast() - This method returns the last element in the array that satisfies the provided testing function.
console.log(fruits.findLastIndex(fruit => fruit === "Apple")); //using findLastIndex() - This method returns the index of the last element in the array that satisfies the provided testing function, or -1 if no elements satisfy the testing function.
console.log(fruits.includes("Banana"));// Same as python "is in" function

// Array Sorting Methods
let numbers = [5, 2, 9, 1, 5, 6];
console.log(numbers.sort());
console.log(numbers.reverse());
console.log(Math.min(...numbers));
console.log(Math.max(...numbers));
sortednum = numbers.toSorted(); // This method returns a new array with the elements sorted in ascending order, without modifying the original array.
reversednum = sortednum.toReversed(); // This method returns a new array with the elements in reverse order, without modifying the original array.
console.log(sortednum);
console.log(reversednum);

//its about map and reduce
// the map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
arr1=[4,5,7,8,9,6]
var func=function greet(){
    var arr2=arr1.map((num)=>{
        console.log(num);
    })
}

console.log(func());// at last undefined is printed because the function does not return anything, so it returns undefined by default.

//reduce() function
var arr3=arr1.reduce((accumulator,currentValue)=>{  //this acts as a sum function or like a normal for loop.
    return accumulator+currentValue; 
},0)// here 0 is the initial value of the accumulator
console.log(arr3);

//JSON Documents
car={
    name:"Toyota",
    model:"Camry",
    year:2020,
    color:"Red"
}

console.log(car.name);
//updating a property of the object
car.name="Honda";
console.log(car);
car.gears=["Park", "Reverse", "Neutral", "Drive"];
// console.log(car);
console.log(car.gears[2]);
//remove a property from the object
delete car.color;
console.log(car);
//length of the object
console.log(Object.keys(car).length);
//object is mentioned in the Object.keys() method because it returns an array of a given object's own enumerable property names, and we can use the length property of that array to get the number of properties in the object.

//different ways to create an object
// 1. Using Object Literal
let person1 = {
    name: "Alice",
    age: 25,
    city: "New York"
};
console.log(person1);

// 2. Using Object Constructor
let person2 = new Object();
person2.name = "Bob";
person2.age = 30;
person2.city = "Los Angeles";
console.log(person2);

// 3. Using Object.create() method
let person3 = Object.create(person1);//here person3 inherits the properties of person1.
person3.name = "Charlie";
person3.age = 35;
person3.city = "Chicago";
console.log(person3);

//4. Using a Class (ES6)
class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}

let person4 = new Person("David", 40, "Houston");
console.log(person4);

//5. Using a Factory Function
function createPerson(name, age, city) {
    return {
        name: name,
        age: age,
        city: city
    };
}
let person5 = createPerson("Eve", 45, "Phoenix");
console.log(person5);

//json datatypes
// string, number, boolean, array, object, null
let jsonData = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    hobbies: ["reading", "swimming", "coding"],
    address: {
        street: "123 Main St",
        city: "New York",
        zipCode: "10001"
    }
};
console.log(jsonData.hobbies);
console.log(jsonData.address.city);
jsonData.address.zipCode = "10002"; // Updating a nested property
console.log(jsonData.address.zipCode);
for(let i=0;i<Object.keys(jsonData).length;i++){
    console.log(typeof Object.values(jsonData)[i]);
}


//Function declaration types:
//normal function declaration
function add(x,y){
    return x+y;
}
console.log(add(5,10));

//function expression
const subtract = function(x,y){
    return x-y;
}
console.log(subtract(10,5));

//arrow function
const multiply = (x,y) => {return x*y;};
console.log(multiply(5,10));

//arrow function with implicit return
const divide = (x,y) => x/y;
console.log(divide(10,5));

//function with default parameters
function greet(name="Guest"){
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet()); // This will use the default parameter value "Guest"

//function with rest parameters
function sum(...numbers){
    console.log(numbers); // This will print the array of numbers passed as arguments
}
sum(1,2,3,4,5);

// Arithemteic Operators
let a = 10;
let b = 5;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

//unary Operators
let d='10';
console.log(+d); // Unary plus (converts the string '10' to the number 10)
let c = 10;
console.log(-c); // Unary negation
console.log(++c); // Increment operator (prefix)
console.log(c++); // Increment operator (postfix)
console.log(c); // This will print the value of c after the increment operations
console.log(--c); // Decrement operator (prefix)
console.log(c--); // Decrement operator (postfix)
console.log(c); // This will print the value of c after the decrement operations


//Assignment Operators
let z = 10;
z += 5; // This is equivalent to z = z + 5
console.log(z);
z -= 3; // This is equivalent to z = z - 3
console.log(z);
z *= 2; // This is equivalent to z = z * 2
console.log(z);
z /= 4; // This is equivalent to z = z / 4
console.log(z);
z %= 3; // This is equivalent to z = z % 3
console.log(z);
z **= 2; // This is equivalent to z = z ** 2
console.log(z);

//Logical Operators
let p = true;
let q = false;
console.log(p && q); // Logical AND
console.log(p || q); // Logical OR
console.log(!p); // Logical NOT
console.log((5>3) && (2<4));
console.log((5>3) || (2>4));

//bitwise operators
let m = 5; // In binary: 0101
let n = 3; // In binary: 0011
console.log(m & n);// Bitwise AND
console.log(m | n);// Bitwise OR
console.log(m ^ n);// Bitwise XOR
console.log(~m);// Bitwise NOT
console.log(m << 1);// Bitwise Left Shift 
console.log(m >> 1);// Bitwise Right Shift 

// Comparison Operators
let num1 = 10;
let num2 = "10";
console.log(num1 == num2);// checks only value 
console.log(num1 === num2); // checks both value and type
console.log(num1 != num2); // checks only value
console.log(num1 !== num2);  // checks both value and type
console.log(num1 > 5); 
console.log(num1 < 15); 
console.log(num1 >= 10);
console.log(num1 <= 10);
console.log(num1 > num2); // This will print false because when comparing a number and a string, JavaScript converts the string to a number if possible.


//Ternary Operator
let Human_age = 18;
let canVote = (Human_age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);


//conditional statements
// if-else statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//switch statement
let day = 3;    
switch (day) {
    case 1:
        console.log("Monday");  
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");   
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:         
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
