"use strict" // All codes will be considered as newer version of JS

let name = "Chiru"
let age = 21 
let IsloggedIn = false 

// number 
// Boolean
// bigint 
// string 
// null 
// undefined

console.log(typeof name)
console.log(typeof age)
console.log(typeof IsloggedIn);
console.log(typeof null);
console.log(typeof undefined);

//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
console.log(typeof heros);

// typeof(non primitive) ==> object 
