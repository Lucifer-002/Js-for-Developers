let id1  = Symbol('Hello')

let id2 = Symbol('Hello')

console.log(id1 === id2); // false 

/*
Reason : symbol creates a unique symbol value each time 
it's called, even if the description (in this case, 'Hello') is the same.
*/

console.log(id1); // Symbol(Hello) nreowser e kaj korbe na 
console.log(id1.toString()); // same
console.log(id1.description);


// Using Symbl in objects 

let myObj = {
    name : "Chirantan" ,
    age : 21 , 
    [id1] : 1234 // use in square 
} 

console.log(myObj);

// To change or to print 

myObj[id1] = 3454
console.log(myObj[id1]);

// Symbol cannot be included in JSON 