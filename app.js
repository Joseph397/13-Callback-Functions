// Callback Functions, Higher Order Functions as First Class Objects/Citizens
//Functions are first class objects - stored in a vareable (expression), passed as an argument to another function, return from the function (closure)
//Higher Order function - accepts  another function as an argument or returns another function as a result
//Callback Function - passed to another function as an argument and exicuted inside that function

function morning(name){ // Callback function , do not want to invoke
    return(`Good morning ${name.toUpperCase()}`);
}
function afternoon(name){ // Callback function
    return(`Good afternoon ${name.repeat(3)}`);
}

function greet(name,cb){ // cb() is a function passed into another function, this makes greet a Higher Order function
    const myName = 'john';
    console.log(`${cb(name)}, my name is ${myName}`);
}

greet('bobo', morning);
greet('peter ', afternoon);






// function greetMorning(name){
//     const myName = 'john';
//     console.log(`Good morning ${name}, my name is ${myName}`);
// }
// function greetAfternoon(name){
//     const myName = 'john';
//     console.log(`Good afternoon ${name}, my name is ${myName}`);
// }
