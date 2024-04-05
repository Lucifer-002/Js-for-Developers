// Array declaration 

let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];

console.log(nobleGases); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']

let nobleGases2 = Array('He', 'Ne', 'Ar', 'Kr', 'Xn');

console.log(nobleGases2); // ['He', 'Ne', 'Ar', 'Kr', 'Xn']
console.log(typeof nobleGases2);

/*
let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
nobleGases[0]; // 'He'
nobleGases[1]; // 'Ne'
nobleGases[2]; // 'Ar'
nobleGases[3]; // 'Kr'
nobleGases[4]; // 'Xn'
nobleGases[5]; // undefined
*/

/*
When you try to access a value out of the index range, y
ou get undefined as the return value. As you can see, in the example 
above no value is stored at index 5.

JavaScript arrays are not fixed in size. 
They can grow and shrink according to their content. 
You can easily verify this by trying to assign nobleGases[5] a value:
*/

nobleGases[5] = "BBN"
console.log(nobleGases);

// We use the push methods to add elements to the end of the array

let friends = ["Tom" , "Chiru" , "Partiv"]
console.log(friends);
friends.push("Popo")
console.log(friends);
friends.push("Avik" , "Shreya")
console.log(friends);
// push returns the length of the modified array 

// Similar to push , the unshift method is used to add elements to the neg of the array

let halogens = ['F', 'Cl'];
console.log(halogens); // ['F', 'Cl']

halogens.unshift('Br', 'I', 'At'); // 5
// unshift() returns the length of the modified array
console.log(halogens); // ['Br', 'I', 'At', 'F', 'Cl']

// We use pop to remove the last element in the array 

console.log(friends.pop());
console.log(friends.pop());
console.log(friends);
friends.push("BBN" , "Dibbo");
console.log(friends);

// If we want to pop from begining 

friends.shift()
console.log(friends);

// Now suppose we want to seacrch an element in array 

console.log(friends.includes("Chiru"));
console.log(friends.includes("Chiru" , 2)); // Is "chiru" present dtarting from pos 2

// indexOf

console.log(friends.indexOf("Popo")); // 2
console.log(friends.indexOf("Shreya")); // -1 mane not present 

console.log("A ", friends);

// Methods to join two arrays 

let arr = [nobleGases , friends]
console.log(arr);

arr = nobleGases.concat(friends)
console.log(arr);

/*
let alkali = ['Li', 'Na', 'K'];
let moreAlkali = ['Rb', 'Cs', 'Fr'];
let alkEarth = ['Be', 'Mg', 'Ca'];

alkali.concat(moreAlkali);
// ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr']

alkali.concat(moreAlkali, alkEarth);
// ['Li', 'Na', 'K', 'Rb', 'Cs', 'Fr', 'Be', 'Mg', 'Ca']
*/

console.log(typeof(friends.join(",")));
console.log(friends);

// slice , splice 
const myArr = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

