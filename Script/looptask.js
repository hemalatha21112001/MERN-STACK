// 1. Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Print even numbers between 1 and 20.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 3. Print the multiplication table of 5.
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 4. Find the sum of numbers from 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum =", sum);

// 5. Print all elements of an array using a for loop.
let arr = ["apple", "banana", "mango"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 6. Find the factorial of a given number.
let num = 5;
let fact = 1;
for (let i = 1; i <= num; i++) {
  fact *= i;
}
console.log("Factorial =", fact);

// 7. Print all odd numbers from 1 to 50.
for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

// 8. Reverse a string using a for loop.
let str = "hello";
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev);

// 9. Count the number of vowels in a given string.
let word = "education";
let vowels = "aeiou";
let count = 0;
for (let i = 0; i < word.length; i++) {
  if (vowels.includes(word[i])) count++;
}
console.log("Vowels =", count);

// 10. Print squares of numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
//  While loop tasks-1. Print numbers from 1 to 10.
let a = 1;
while (a <= 10) {
  console.log(a);
  a++;
}

// 2. Calculate the sum of digits of a number.
let number = 1234;
let total = 0;
while (number > 0) {
  total += number % 10;
  number = Math.floor(number / 10);
}
console.log("Sum of digits =", total);

// 3. Print all numbers divisible by 3 between 1 and 50.
let b = 1;
while (b <= 50) {
  if (b % 3 === 0) console.log(b);
  b++;
}

// 4. Find the factorial of a number.
let n = 6, f = 1, i = 1;
while (i <= n) {
  f *= i;
  i++;
}
console.log("Factorial =", f);

// 5. Reverse a number (e.g., 123 → 321).
let num2 = 123, revNum = 0;
while (num2 > 0) {
  revNum = revNum * 10 + (num2 % 10);
  num2 = Math.floor(num2 / 10);
}
console.log("Reversed =", revNum);

// 6. Print Fibonacci series up to 10 terms.
let x = 0, y = 1, next, count2 = 1;
while (count2 <= 10) {
  console.log(x);
  next = x + y;
  x = y;
  y = next;
  count2++;
}

// 7. Count how many digits are in a number.
let num3 = 98765, digits = 0;
while (num3 > 0) {
  num3 = Math.floor(num3 / 10);
  digits++;
}
console.log("Digits =", digits);

// 8. Find the largest digit in a number.
let num4 = 59318, maxDigit = 0;
while (num4 > 0) {
  let d = num4 % 10;
  if (d > maxDigit) maxDigit = d;
  num4 = Math.floor(num4 / 10);
}
console.log("Largest digit =", maxDigit);

// 9. Print all elements of an array using while loop.
let arr2 = ["red", "green", "blue"];
let j = 0;
while (j < arr2.length) {
  console.log(arr2[j]);
  j++;
}

// 10. Keep asking for input until user enters "stop" //
let input;
while (input !== "stop") {
   input = prompt("Enter something (type 'stop' to exit):");
}
// Do-while -1. Print numbers from 1 to 10.//
let m = 1;
do {
  console.log(m);
  m++;
} while (m <= 10);

// 2. Display a menu and repeat until user chooses "Exit".
// let choice;
// do {
//   choice = prompt("1. Play\n2. Settings\n3. Exit");
// } while (choice !== "3");

// 3. Print multiplication table of any given number.
let t = 7;
let k = 1;
do {
  console.log(`${t} x ${k} = ${t * k}`);
  k++;
} while (k <= 10);

// 4. Calculate the sum of natural numbers up to n.
let nn = 5, ss = 0, p = 1;
do {
  ss += p;
  p++;
} while (p <= nn);
console.log("Sum =", ss);

// 5. Keep asking for a password until user enters the correct one.
// let pwd;
// do {
//   pwd = prompt("Enter password:");
// } while (pwd !== "1234");

// 6. Print even numbers from 1 to 20.
let e = 2;
do {
  console.log(e);
  e += 2;
} while (e <= 20);

// 7. Count digits of a number.
let num5 = 4521, c = 0;
do {
  c++;
  num5 = Math.floor(num5 / 10);
} while (num5 > 0);
console.log("Digits =", c);

// 8. Reverse a string using do...while.
let text = "world";
let revText = "";
let idx = text.length - 1;
do {
  revText += text[idx];
  idx--;
} while (idx >= 0);
console.log(revText);

// 9. Find cube of numbers from 1 to 5.
let z = 1;
do {
  console.log(z ** 3);
  z++;
} while (z <= 5);

// 10. Keep taking numbers and stop when total exceeds 100.
// let total2 = 0;
// do {
//   total2 += Number(prompt("Enter a number:"));
// } while (total2 <= 100);

