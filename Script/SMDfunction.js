//1.Count number of vowels in a string//
let str1 = "Javascript";
let vowels = str1.match(/[aeiou]/gi);
console.log(vowels ? vowels.length : 0);
//2. Reverse a string without using .reverse()//
let str2 = "hello";
let reversed = "";
for (let i = str2.length - 1; i >= 0; i--) {
  reversed += str2[i];
}
console.log(reversed);
//3. Check if a string is a Palindrome//
let str3 = "madam";
let isPalindrome = str3 === str3.split("").reverse().join("");
console.log(isPalindrome ? "Palindrome" : "Not Palindrome");
//4. Convert first letter of each word to uppercase//
let str4 = "hello world program";
let results = str4.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log(results);
//5.Replace all spaces in a string with//
let str5 = "hello world program";
console.log(str5.replace(/ /g, "~"));
//6. Find number of times a word appears in a sentence//
let sentences = "this is a test and this is only a test";
let word = "test";
let count = sentences.split(" ").filter(w => w === word).length;
console.log(count);
//7.Extract only digits from a string//
let str6 = "ab12cd34";
let digits = str6.replace(/\D/g, "");
console.log(digits);
//8. Check if a string contains another//
let str7 = "Hello World";
let sub = "world";
console.log(str7.toLowerCase().includes(sub.toLowerCase()));
//9.Trim extra spaces from both ends//
let str8 = "   Welcome to JS   ";
console.log(str8.trim());
//10. Count how many times each character appears//
let str9 = "banana";
let freq = {};
for (let ch of str9) {
  freq[ch] = (freq[ch] || 0) + 1;
}
console.log(freq);
//11. Find the longest word in a sentence//
let sentence = "JavaScript is amazing language";
let longest = sentence.split(" ").reduce((a, b) => a.length > b.length ? a : b);
console.log(longest);
//12. Check if two strings are anagrams//
let s1 = "listen", s2 = "silent";
let isAnagram = s1.split("").sort().join("") === s2.split("").sort().join("");
console.log(isAnagram);
//13.Convert "hello_world_program"- "Hello World Program"//
let str10 = "hello_world_program";
let result = str10.split("_").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
console.log(result);
//14. Find the index of second occurrence of a letter//
let str11 = "banana";
let letter = "a";
let first = str11.indexOf(letter);
let second = str11.indexOf(letter, first + 1);
console.log(second);
//15.Remove duplicate characters from a string//
let str = "programming";
let unique = [...new Set(str)].join("");
console.log(unique);
//MATH FUNCTION//
//1. Generate random number between 1 and 100//
console.log(Math.floor(Math.random() * 100) + 1);
//2. Round a floating number to 2 decimals//
let num = 5.6789;
console.log(num.toFixed(2));
//3. Find max and min in an array//
let arr = [10, 5, 28, 3, 99];
console.log("Max:", Math.max(...arr));
console.log("Min:", Math.min(...arr));
//4 . Square root of each number in an array//
let arr2 = [4, 9, 16, 25];
let roots = arr2.map(n => Math.sqrt(n));
console.log(roots);
//5. Generate random integer between 50 and 200//
console.log(Math.floor(Math.random() * 151) + 50);
//6. Find absolute difference between two numbers//
let a = 10, b = 25;
console.log(Math.abs(a - b));
//7. Simulate rolling a dice(1-6)//
console.log(Math.floor(Math.random() * 6) + 1);
//8.Calculate compound interest//
let p = 1000, r = 5, t = 2; // principal, rate, time
let amount = p * Math.pow((1 + r / 100), t);
console.log("Compound Interest:", (amount - p).toFixed(2));
//9.Find area of a circvle using Math.PI//
let radius = 7;
console.log("Area:", Math.PI * radius * radius);
//10. Check if a number is a perfect square//
let numb = 49;
console.log(Number.isInteger(Math.sqrt(numb)) ? "Perfect Square" : "Not Perfect Square");
//
// 11. Round a number upward and downward using ceil and floor//
let num1 = 4.7;
console.log("Ceil:", Math.ceil(num1));   // 5
console.log("Floor:", Math.floor(num1)); // 4

// 12. Find the power of a number (a^b)//
let o = 3, q = 4;
console.log("Power:", Math.pow(o, q)); // 81

// 13. Generate 10 random integers and find their average//
let nums = [];
for (let i = 0; i < 10; i++) {
  nums.push(Math.floor(Math.random() * 100));
}
let average = nums.reduce((a, b) => a + b, 0) / nums.length;
console.log("Numbers:", nums);
console.log("Average:", average);

// 14. Convert radians to degrees and degrees to radians//
let rad = Math.PI / 4;
let deg = 45;
console.log("Radians to Degrees:", rad * (180 / Math.PI));
console.log("Degrees to Radians:", deg * (Math.PI / 180));

// 15. Find the factorial of a number using Math functions//
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial:", factorial(5)); // 120
// DATE FUNCTION//
// 1. Display the current date and time//
let now = new Date();
console.log(now);

// 2. Get the current year, month, and day //
console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth() + 1); // 0-11
console.log("Day:", now.getDate());

// 3. Find how many days are left in the current year//
let lastDay = new Date(now.getFullYear(), 11, 31);
let diff = Math.ceil((lastDay - now) / (1000 * 60 * 60 * 24));
console.log("Days left in year:", diff);

// 4. Print the name of the current day//
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is:", days[now.getDay()]);

// 5. Compare two dates//
let d1 = new Date("2025-01-01");
let d2 = new Date("2025-05-01");
console.log(d1 < d2 ? "d1 is earlier" : "d2 is earlier");

// 6. Add 10 days to the current date//
let future = new Date();
future.setDate(future.getDate() + 10);
console.log("After 10 days:", future);

// 7. Calculate a person's age from birthdate//
let birthdate = new Date("2000-03-15");
let age = now.getFullYear() - birthdate.getFullYear();
console.log("Age:", age);

// 8. Format the date as DD-MM-YYYY//
let dd = now.getDate();
let mm = now.getMonth() + 1;
let yyyy = now.getFullYear();
console.log(`${dd}-${mm}-${yyyy}`);

// 9. Number of days between two dates//
let date1 = new Date("2025-01-01");
let date2 = new Date("2025-02-01");
let daysDiff = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
console.log("Days between:", daysDiff);

// 10. Get the first and last day of current month//
let firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
let lastDayMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
console.log("First day:", firstDay);
console.log("Last day:", lastDayMonth);

// 11. Display current time in HH:MM:SS//
console.log(now.toTimeString().split(" ")[0]);

// 12. Check if today is weekend or weekday//
console.log(now.getDay() === 0 || now.getDay() === 6 ? "Weekend" : "Weekday");

// 13. Display month name//
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Month:", months[now.getMonth()]);

// 14. Countdown to a future date (e.g., New Year)//
let newYear = new Date("2026-01-01");
let msLeft = newYear - now;
let daysLeft = Math.floor(msLeft / (1000 * 60 * 60 * 24));
console.log("Days until New Year:", daysLeft);

// 15. Show the time exactly 1 hour from now//
let oneHourLater = new Date(now.getTime() + (60 * 60 * 1000));
console.log("1 hour later:", oneHourLater.toTimeString());