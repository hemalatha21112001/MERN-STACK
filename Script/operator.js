//1.Arithmetic Operator//
let a = 10;
let b = 20;
console.log(a+20);
//Difference//
 a = 10;
 b = 20;
console.log(a-20);
//product//
a = 50;
b = 4;
console.log(a*b);
//quotient//
a = 10;
b = 3;
console.log(a%b);
//2.Average//
a = 10;
b = 20;
let c = 30;
console.log((a+b+c)/3);
//3.area of rectangle//
let length = 40;
let breadth = 20;
console.log(length*breadth);
//4.temperature//
let cel = 50;
console.log(f=(cel*1.8)+32);
//5.Divide//
a = 20;
b = 34;
console.log(b/a);
//6.Assignment Operator//
let x = 50;
 x += 10
console.log(x);
//7.multiple//
x = 30;
x *= 5;
console.log(x);
//8.decrease//
a = 30;
a -= 3;
console.log(a);
//9.divide//
b = 45;
c /= 2;
console.log(c);
//10.combine multiple//
let s = 5;
s += 5;
s *= 2;
s -= 3;
console.log(s);
 
// 11. Equal or not//
let n = 10,  m = 15;
console.log(n == m);

// 12. Greater than//
n = 50,  m = 45;
console.log(n > m);

// 13. Compare strings//
let s1 = "Banu", s2 = "Priya";
console.log(s1 === s2);

// 14. Less than or equal to 100//
n = 85;
console.log(n <= 100);

// 15. Strictly equal
console.log(5 === "5"); 

//Logical operators//
// 16. Between 10 and 50
 n = 30;
console.log(n > 10 && n < 50);

// 17. Less than 10 or greater than 100
console.log(n < 10 || n > 100);

// 18. NOT operator
let isTrue = false;
console.log(!isTrue);

// 19. Combine && and ||
let age = 25;
console.log((age > 18 && age < 60) || age == 100);

// 20. Check pass mark
let marks = 40;
console.log(marks >=35&&"Pass");

// 21. Counter increases by 1
let count = 0;
count++;
console.log(count);

// 22. Decrease by 1
let number = 10;
number--;
console.log(number);

// 23. Pre-increment vs Post-increment
let p = 5;
console.log(++p);

// pre-increment (6)
let q = 5;
console.log(q++); 

// post-increment (5 first, then 6)

// 24. Loop 10 to 1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 25. ++ and -- together
 m = 5;
console.log(m++ + --m); 

// 26. Even or odd
let num1 = 7;
console.log(num1 % 2 === 0 ? "Even" : "Odd");

// 27. Greater number
let a1 = 10, a2 = 20;
console.log(a1 > a2 ? a1 : a2);

// 28. Can vote or not
let ageCheck = 17;
console.log(ageCheck >= 18 ? "Can Vote" : "Cannot Vote");

// 29. Positive, Negative or Zero
let num2 = -5;
console.log(num2 > 0 ? "Positive" : num2 < 0 ? "Negative" : "Zero");

// 30. Empty string or not
let text = "";
console.log(text ? "Not Empty":"Empty");

  // 31. Bitwise AND
 a = 5, b = 3; 
console.log("Bitwise AND:", a & b);

// 32. Bitwise OR
console.log("Bitwise OR:", a | b);

// 33. Bitwise XOR
console.log("Bitwise XOR:", a ^ b); 

// 34. Left shift and Right shift
console.log("Left Shift (a << 1):", a << 1);   
console.log("Right Shift (a >> 1):", a >> 1);  

// 35. Combine Bitwise and Logical
 x = 6, y = 3;
console.log((x & y) && (x > y)); 

// 36. Different data types
let name = "Hema";
 age = 20;
let isStudent = true;

console.log("String:", name);
console.log("Number:", age + 5); 
console.log("Boolean:", !isStudent); 

// 37. Swap two numbers without third variable
 num1 = 10, num2 = 20;
num1 = num1 + num2; 
num2 = num1 - num2;
num1 = num1 - num2;
console.log("After swap: num1 =", num1, ", num2 =", num2);

// 38. Arithmetic + Comparison + Logical together
let mark = 45;
let avg = (mark + 50) / 2;
console.log(avg > 40 && avg < 100); 

// 39. Ternary operator for result
let score = 85;
let result = score >= 90 ? "Excellent"
            : score >= 35 ? "Pass"
            : "Fail";
console.log("Result:", result);

// 40. Mini calculator using all operators
let n1 = 10, n2 = 5;
console.log("Addition:", n1 + n2);
console.log("Subtraction:", n1 - n2);
console.log("Multiplication:", n1 * n2);
console.log("Division:", n1 / n2);
console.log("Remainder:", n1 % n2);
console.log("Comparison:", n1 > n2);
console.log("Logical:", (n1 > n2) && (n2 < 10));
console.log("Bitwise:",n1&n2);