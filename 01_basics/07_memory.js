// All the primitive datatypes are stored in stack
// All the non primitive data type are stored in Heap memory 

let myname = "Chirantan"
let mysecname = myname

console.table([myname , mysecname]);

mysecname = "kutush"

console.table([myname , mysecname]);

let user = {
    email : "user@gmail.com" ,
    upi : "user@xyz"
}

let another_user = user; 

console.table([user.email , another_user.email])

another_user.email = "user@yahoo.com";

console.table([user.email , another_user.email])

/*
    in case of stack value is copied 
    in case of heap the reference is shared 
*/