function Tinder_Profile(name, age, nationality , ideal_match) { 
    this.name = name; 
    this.age = age; 
    this.nationality = nationality; 
    this.ideal_match = ideal_match;
    this.bio = function () { 
        return `My name is ${this.name}. I'm ${this.age} years old. I'm from ${this.nationality} and my ideal match is ${this.ideal_match}`;
    } 
};

const Tom = new Tinder_Profile("Tom", 22, "India" , "BBN" );
const Partiv = new Tinder_Profile("Partiv" , 22 , "Indian" ,"Rolls-Royce")
const Onkita = new Tinder_Profile("Onkita" , 23 , "Indian" , undefined)
console.log(Tom.bio()); 
console.log(Partiv.bio());
console.log(Onkita.bio());

let objectX = {
    name: 'Mary', 
    age: 40,
    gadgets: { 
        brand: ["apple", "sony"]
    }
};

let objectY = {...objectX};
objectY.name = "Bianca";
objectY.gadgets.brand[0] = "hp";
console.log(objectX);
/*
{
    "name": "Mary",
    "age": 40,
    "gadgets": {
        "brand": [
            "hp",
            "sony"
        ]
    }
}
*/ 

console.log(objectY);
/*
{
    "name": "Bianca",
    "age": 40,
    "gadgets": {
        "brand": [
            "hp",
            "sony"
        ]
    }
}
*/

objectY = JSON.parse(JSON.stringify(objectX))

objectY.gadgets.brand[1] = "canon"

console.log(objectX);
console.log(objectY);

let objectZ = {
    name: "Ade",
    Pronuon: "he",
    age: 60
};
for(let property in objectZ) {
    console.log(`${property}: ${objectZ[property]}`)
}
/* 
name: Ade
Pronuon: he
age: 60
*/

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);