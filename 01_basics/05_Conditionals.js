// Conditionals
// if else else if are keywords

// The if...else is a type of conditional statement that will execute a block of code when the condition 
// in the if statement is truthy. If the condition is falsy, 
// then the else block will be executed. 

// Here is a list of  falsy values:

// false
// 0 (zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "", '', `` (empty string)
// null
// undefined
// NaN (not a number)

console.log((2>1)&&"Harsh"); // Output : Haarsh 

//Switch case 
let exp="*";
let a=10;
let b=2;
switch(exp)
{
    case "+":
        console.log(a+b);
        break;
    case "-":
            console.log(a-b);
            break;
    case "*":
            console.log(a*b);
            break;
    case "/":
            console.log(a/b);
             break;
    case "%":
             console.log(a%b);
            break;
    default:    
    console.log("Invalid Input");

}

// WAP to check if a number is Positive , Negative or Zero 

let n = 0

if(n > 0){
    console.log("The Number is positive");
}
else if (n < 0){
    console.log("The Number is negative");
}
else{
    console.log("The number is Zero");
}
//----------------------- Star Pattern ---------------------------------------------
for(i=0;i<5;i++)
{
    let str="";
    for(j=0;true;j++)
    {
        str=str+"*";
        if(j==i)
        {
            break; }
}
console.log(str);
}
//---------------------------Reverse Pyramid----------------------------------------
for(i=1 ; i<=5 ; i++){
    str = "";
    for(j=1 ; j<=5-i+1 ; j++){
        str+="*";
    }
    console.log(str);
}




