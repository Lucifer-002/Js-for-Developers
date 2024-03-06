let input_num = Number(process.argv.slice(2));

let no_of_digits = 0;
let clone = input_num;

while(clone > 0){
    no_of_digits+=1;
    //console.log(clone);
    clone = parseInt(clone/10);
}


let clone2 = input_num;
let ans = 0;
while(clone2 > 0){
    let m = clone2 % 10;
    ans = ans + (m**no_of_digits);
    clone2 = parseInt(clone2/10);
    
}
if(ans === input_num){
    console.log(input_num + " is Armstrong Number");
}else{
    console.log(input_num + " is not Anrmstrong Number");
}