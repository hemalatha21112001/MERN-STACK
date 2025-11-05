let a= 10;
console.log(a);
//Stop when number =3//
for(let i=1; i<=10;i++){
    if(i===7){
        break;// stop loop when i=7
    }
    console.log(i);
}
//skip even numbers//
for(let i= 1; i<=10;i++){
    if(i%2===0){
        continue;//skip even numbers//

}
console.log(i);
}
//use while loop to print numbers//
for(let i= 1; i<=20;i++){
    if(i%13===0){
        continue;//stop loop when number divisible by 13
    }
    console.log(i);
}
// Array of fruits through loop//
const fruits =["apple","banana","cherry","mango","orange"];
for (let i= 0; i<fruits.length; i++)
{ 
    if(fruits[i] ==="banana"){
        continue;//skip banana
    }
    console.log(fruits[i]);
}
//first number divisible by 5//
const numbers=[ 3,8,12,15,22,25];
for(i= 0; i< numbers.length; i++)
    if(numbers[i]%5===0){
        console.log("First number divisible by 5 is :", )
    continue;//find first number divisible by 5 then stop searching//
    }
    
}