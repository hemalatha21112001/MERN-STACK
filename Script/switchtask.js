//1.Check Positive or Negative Number//
let number = -3;
switch (true) {
  case (number > 0):
    console.log("Positive");
    break;
  case (number < 0):
    console.log("Negative");
    break;
  default:
    console.log("Zero");
}
//2.Check Even or Odd//
let numb = 8;

switch (numb % 2 === 0) {
  case true:
    console.log("Even");
    break;
  default:
    console.log("Odd");
}
//3.Check voting Eligibility//
let age = 20;

switch (true) {
  case (age >= 18):
    console.log("Eligible to Vote");
    break;
  default:
    console.log("Not Eligible");
}
//4.Check Data Type//
let valu = 25;

switch (typeof valu) {
  case "number":
    console.log("Number");
    break;
  case "string":
    console.log("String");
    break;
  case "boolean":
    console.log("Boolean");
    break;
  default:
    console.log("Other Type");
}
//5.Check Greater Number//
let s = 15, t = 30;

switch (true) {
  case (s > t):
    console.log(s + " is greater");
    break;
  case (t > s):
    console.log(t + " is greater");
    break;
  default:
    console.log("Both are equal");
}
//6.Compare Two strings//
let s1 = "Hello";
let s2 = "Hello";

switch (s1 === s2) {
  case true:
    console.log("Both are equal");
    break;
  default:
    console.log("Not equal");
}
//7.Check multiples of 5//
let numbe = 25;

switch (numbe % 5 === 0) {
  case true:
    console.log("Multiple of 5");
    break;
  default:
    console.log("Not a multiple of 5");
}
//8. Check if a Number is zero//
let n = 0;

switch (true) {
  case (n === 0):
    console.log("Zero");
    break;
  default:
    console.log("Not Zero");
}
//9. Check Marks Pass/ Fail//
let mark = 30;

switch (true) {
  case (mark>= 35):
    console.log("Pass");
    break;
  default:
    console.log("Fail");
}
//10. Temperature check//
let temp = 25;

switch (true) {
  case (temp < 20):
    console.log("Cold");
    break;
  case (temp >= 20 && temp <= 30):
    console.log("Warm");
    break;
  default:
    console.log("Hot");
}
//11. Find largest of three numbers//
let a = 10, b = 25, c = 15;

switch (true) {
  case (a > b && a > c):
    console.log(a + " is largest");
    break;
  case (b > c):
    console.log(b + " is largest");
    break;
  default:
    console.log(c + " is largest");
}
//12. Check leap year//
let year = 2024;

switch (true) {
  case ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0):
    console.log("Leap Year");
    break;
  default:
    console.log("Not a Leap Year");
}
//13. Check Character Type//
let ch = "A";

switch (true) {
  case ("aeiouAEIOU".includes(ch)):
    console.log("Vowel");
    break;
  case (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z"):
    console.log("Consonant");
    break;
  case (ch >= "0" && ch <= "9"):
    console.log("Number");
    break;
  default:
    console.log("Special Symbol");
}
//14. Check Login Credentials//
let username = "admin";
let password = "1234";

switch (true) {
  case (username === "admin" && password === "1234"):
    console.log("Login Success");
    break;
  default:
    console.log("Invalid Credentials");
}
//15. Check Grade//
let marks = 82;

switch (true) {
  case (marks >= 90):
    console.log("A");
    break;
  case (marks >= 80):
    console.log("B");
    break;
  case (marks >= 70):
    console.log("C");
    break;
  default:
    console.log("Fail");
}
//16.Check Number Sign and Parity//
let num = 7;

switch (true) {
  case (num > 0 && num % 2 === 0):
    console.log("Positive Even");
    break;
  case (num > 0 && num % 2 !== 0):
    console.log("Positive Odd");
    break;
  default:
    console.log("Negative Number");
}
//17. Check Data Type and Value//
let value = "Hello";

switch (true) {
  case (typeof value === "string" && value !== ""):
    console.log("Valid String");
    break;
  default:
    console.log("Invalid");
}
//18. Discount calculation//
let price = 1200;

switch (true) {
  case (price > 1000):
    console.log("20% discount");
    break;
  case (price > 500):
    console.log("10% discount");
    break;
  default:
    console.log("No discount");
}
//19.Compare two numbers//
let x = 10, y = "10";

switch (true) {
  case (x == y):
    console.log("Equal using ==");
    break;
}

switch (true) {
  case (x === y):
    console.log("Equal using ===");
    break;
  default:
    console.log("Not equal using === (type checked)");
}
//20.Simple calculator using switch//
let num1 = 10, num2 = 5;
let operator = "*";

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("Invalid Operator");
}