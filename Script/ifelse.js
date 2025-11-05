//1.check positive or Negative Number//
let num = 5;

if (num > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}
//2.check Even or Odd//
let no = 10;

if (no % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//3.Check voting Eligibility//
let age = 17;

if (age >= 18) {
  console.log("Eligible to Vote");
} else {
  console.log("Not Eligible");
}
//4.Check Data Type//
let value = true;

if (typeof value === "number") {
  console.log("Number");
} else if (typeof value === "string") {
  console.log("String");
} else if (typeof value === "boolean") {
  console.log("Boolean");
}
//5.Check Greater Number//
let d= 15, e= 25;

if (d > e) {
  console.log(d + " is greater");
} else {
  console.log(e + " is greater");
}
//6.Compare Two Strings//
let str1 = "hello";
let str2 = "hello";

if (str1 === str2) {
  console.log("Both are equal");
} else {
  console.log("Not equal");
}
//7.Check Multiple of 5//
let number = 20;

if (num % 5 === 0) {
  console.log("Multiple of 5");
} else {
  console.log("Not a multiple of 5");
}
//8.Check if a Number is zero//
let num1 = 0;

if (num1 === 0) {
  console.log("Zero");
} else {
  console.log("Not Zero");
}
//9.Check Marks Pass/Fail//
let mark = 35;

if (mark >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}
//10.Temperature Check//
let temp = 25;

if (temp < 20) {
  console.log("Cold");
} else if (temp >= 20 && temp <= 30) {
  console.log("Warm");
} else {
  console.log("Hot");
}
//Intermediate level//
//11.Find largest of three numbers//
let a = 10, b = 25, c = 15;

if (a > b && a > c) {
  console.log(a + " is largest");
} else if (b > c) {
  console.log(b + " is largest");
} else {
  console.log(c + " is largest");
}
//12.Check Leap year//
let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
//13.Check Character Type//
let ch = "*";

if ("aeiouAEIOU".includes(ch)) {
  console.log("Vowel");
} else if (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z") {
  console.log("Consonant");
} else if (ch >= "0" && ch <= "9") {
  console.log("Number");
} else {
  console.log("Special Symbol");
}
//14.check login credentials//
let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Success");
} else {
  console.log("Invalid Credentials");
}
//15.check grade//
let marks = 78;

if (marks >= 90) {
  console.log("A");
} else if (marks >= 80) {
  console.log("B");
} else if (marks >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}
//16.check Number Sign and parity//
let numb1 = -5;

if (numb1 > 0 && numb1 % 2 === 0) {
  console.log("Positive Even");
} else if (numb1 > 0 && numb1 % 2 !== 0) {
  console.log("Positive Odd");
} else {
  console.log("Negative Number");
}
//17.Check Data type and value//
let value1 = "Hello";

if (typeof value1 === "string" && value !== "") {
  console.log("Valid String");
} else {
  console.log("Invalid");
}
//18.Discount calculation//
let price = 1200;

if (price > 1000) {
  console.log("20% discount");
} else if (price > 500) {
  console.log("10% discount");
} else {
  console.log("No discount");
}
//19.compare two numbers//
let g = 10, h = "10";

if (g == h) {
  console.log("Equal by ==");
}
if (g=== h) {
  console.log("Equal by ===");
} else {
  console.log("Not equal by === (checks type also)");
}
//20.simple calculator using If-else//
let number1 = 10, num2 = 5;
let operator = "*";

if (operator === "+") {
  console.log(number1 + num2);
} else if (operator === "-") {
  console.log(number1 - num2);
} else if (operator === "*") {
  console.log(number1 * num2);
} else if (operator === "/") {
  console.log(number1 / num2);
} else {
  console.log("Invalid Operator");
}
