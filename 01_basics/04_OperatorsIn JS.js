///                    Arithmetic Operators

//These operators are frequently used with number data types, 
//so they are similar to a calculator. T
//he following example shows how you can use the + operator to 
//add two variables together:

let x = 5 
let y = 6

console.log(x+y); //11
// Directly korao possible 
console.log(5+6); //11

// In JavaScript, we have 8 arithmetic operators in total. They are:

// 1 . Addition as mentioned above 
// 2 . Subtraction 

console.log(6-10) //-4

// 3 . Multipplication 

// The multiplication operator is marked by the asterisk * symbol, 
// and you use it to multiply the value on the left by the 
// value on the right of the operator.

console.log(5 * 2); // 10
console.log(3 * 3);  // 9

// 4. Division 

// The division operator / is used to divide the left 
// operand by the right operand. Here are some examples 
// of using the operator:

console.log(10/2);
console.log(5/3);
// Suppose I want the value upto 2 decimail places 
console.log((5/3).toFixed(2));

// 5. Exponential 

// The exponentiation operator is marked by two asterisks **. 
// It's one of the newer JavaScript operators and 
// you can use it to calculate the power of a number (based on its exponent).

// left e Base  , right e power

console.log(10**3);

// 6 , 7 , 8 : modulo , increment and decrement same as JAVA 

//                         Comparison operators 

console.log(9 == 9); // true

console.log(9 != 20); // true

console.log(2 > 10); // false

console.log(2 < 10); // true

console.log(5 >= 10); // false

console.log(10 <= 10); // true

// Strict equal and strict not equal 

let a = 2 
let b = 20 
console.log(a!==b); // if bith the value and data types are unequal then true else false

// "===" if bith the value and data types are equal then true else false

// The return type of typeof operator in String 

// Note if we want to have floor divisions 
// 1 . parseInt(5/2)
// 2 . Math.floor(5/2) 
console.log(parseInt(5/2))
console.log(Math.floor(5/2));

//Logical Operators
//And = &&
//OR = ||
//NOT = !

console.log((10>5)&&(10<11));
console.log((10>5)||(10>11));

// Short circuiting in JS 

// =============================== Truth Table for OR =========================================

//       A        B             A||B
//     -----------------------------------------
//       T        T               T
//       T        F               T
//       F        T               T
//       F        F               F

// here we can see first value true ==>  return first value 
// first value false ==> return second value 

console.log((4 || 0)); // 4
console.log((0 || 4)); // 4

// =============================== Truth Table for AND =========================================

//       A        B             A&&B
//     -----------------------------------------
//       T        T               T
//       T        F               F
//       F        T               F
//       F        F               F

// here we can see first value true ==>  return second value 
// first value false ==> return first value

console.log(4 && 5) // 5
console.log((4 && 0)); // 0

console.log((4 || 5)); // 4
console.log((-4 || 5)); // -4
console.log((-4 && 3)); // 3
console.log((33 && 3)); // 3
console.log((-0 && 9)); // -0

console.log((4 || null)); // null is falsy in Javascript 

//Comparison Operators
/* > greater then 
< less than 
>= greater than equals to 
<= less than equals to
!= abstract not equals to
!== strict not equals to
== abstract  equality
=== strict  equality
*/


