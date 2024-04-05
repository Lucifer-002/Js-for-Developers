/*
A string is a sequence of characters intended to represent text. Strings can 
contain any kind of character, 
like letters, numbers, or special characters.
*/

// Ways to declare 

let name1 = "Chirantan"
console.log(name1);

let repo_count = 50

console.log(`My name is ${name1} and the repo ccount is ${repo_count}`);

let gameName = new String("Call of Duty")
console.log(gameName);
console.log(gameName.length); // 12 

/*

The String() constructor generates a string as an object (when called with new).
 If called as a function 
(str2 in the example below), the value is coerced to a primitive string.

*/

/*
let str1 = new String('What am I?');
typeof str1; // 'object'

let str2 = String('What am I?');
typeof str2; // 'string'

let str3 = "What am I?";
typeof str3; // 'string'

str1 === str2; // false
str1 === str3; // false
str2 === str3; // true
*/

// we can use the charAt() method to get a specific character inside the string:

console.log(name1.charAt(3));
console.log(name1[3]);

/*
let str = 'larch';
typeof str; // 'string'
str[0] = 'm'; //This could throw an error if you are in strict mode
console.log(str); // 'larch'
*/

// Comparison of 2 Strings 

console.log('Berry' < 'Copper'); // true
// because 'B' comes before 'C'

console.log('Berry' < 'Bingo'); // true
// because the first characters are the same and 'e' comes before 'i'

console.log('berry' < 'Copper'); // false
// because the comparison is case-sensitive and capital letters come first

// After letter-by-letter comparison, if each character equates its counterpart in 
// the other string, and the strings have the same length, they are equal. 
// Otherwise, the longest string is the greater.

const chorus = `Don't lose heart, comrades
It's over that hill
Paradise is just over that hill`;

console.log(chorus);
//Don't lose heart, comrades
//It's over that hill
//Paradise is just over that hill

// Some common string methods 

let a = 'When candles are out,';
let b = 'all cats are grey.';
let c = a.concat(' ',b);
console.log(c); // 'When candles are out, all cats are grey.'

let sentence = 'Always look on the bright side of life';

sentence = sentence.toUpperCase();
console.log(sentence);

console.log(sentence.toLowerCase());
// always look on the bright side of life

console.log(sentence.toUpperCase());
// ALWAYS LOOK ON THE BRIGHT SIDE OF LIFE

/*
let dish = 'Lemon curry';
dish.startsWith('Lem'); // true
dish.startsWith('lem'); // false
dish.toLowerCase().startsWith('lem'); // true
dish.startsWith('cu'); // false
dish.startsWith('cu', 6); // true

let dish = 'Lemon curry';
dish.endsWith('ry'); // true
dish.endsWith('on', 5); // true
*/

/*
let sent = 'Always look on the bright side of life';

sent.slice(7); // 'look on the bright side of life'
sent.substring(7); // 'look on the bright side of life'
sent.slice(0, 6); // 'Always'
sent.substring(0, 6); // 'Always'

if start idx > end idx ===> Slice ==blank , Substring ==> exvhange

indexOf and includes
*/


