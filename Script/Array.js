// 1. Create an array of 5 fruits. Add one more fruit at the end using push().//
let fruits = ["apple", "banana", "orange", "grapes", "mango"];
fruits.push("pineapple");
console.log(fruits);

// 2. Remove the last fruit from an array using pop().//
fruits.pop();
console.log(fruits);

// 3. Add one new fruit at the beginning using unshift().//
fruits.unshift("kiwi");
console.log(fruits);

// 4. Remove the first fruit using shift().//
fruits.shift();
console.log(fruits);

// 5. Find and display the length of the array.//
console.log("Length of array:", fruits.length);

// 6. Convert an array of fruits into a single string using join(", ").//
let fruitString = fruits.join(", ");
console.log(fruitString);

// 7. Create an array of colors and print the last element using length - 1.//
let colors = ["red", "blue", "green", "yellow"];
console.log("Last color:", colors[colors.length - 1]);

// 8. Create an array of 3 names, add two names using push(), and remove one using shift().//
let names = ["John", "Sara", "Alex"];
names.push("Michael", "Emma");
names.shift();
console.log(names);

// 9. Use join() to print the sentence: "I like apple, banana, orange"//
let favFruits = ["apple", "banana", "orange"];
console.log("I like " + favFruits.join(", "));

// 10. Combine push() and pop() to simulate adding and removing queue items.//
let queue = [];
queue.push("item1");
queue.push("item2");
console.log(queue);
queue.pop();
console.log(queue);
//Level-2: Searching and Checking//
// 11. Create an array of animals. Check if "dog" exists using includes().
let animals = ["cat", "tiger", "elephant", "dog"];
console.log(animals.includes("dog")); // true

// 12. Find the position of "cat" in an array using indexOf().
console.log(animals.indexOf("cat")); // 0

// 13. Merge two arrays [1,2,3] and [4,5,6] using concat().//
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let merged = a1.concat(a2);
console.log(merged);

// 14. Create two arrays — boys and girls, merge into students.//
let boys = ["Ram", "Karan", "Amit"];
let girls = ["Sita", "Priya", "Neha"];
let students = boys.concat(girls);
console.log(students);

// 15. Check if "lion" exists in an animal array; if not, add it.//
if (!animals.includes("lion")) {
    animals.push("lion");
}
console.log(animals);

// 16. Create an array of cities and check the index of "Chennai".//
let cities = ["Delhi", "Mumbai", "Chennai", "Kolkata"];
console.log(cities.indexOf("Chennai"));


// 17. Merge three arrays [a,b], [c,d], [e,f] using concat().//
let arr1 = ["a", "b"];
let arr2 = ["c", "d"];
let arr3 = ["e", "f"];
let mergedABC = arr1.concat(arr2, arr3);
console.log(mergedABC);


// 18. Use includes() to check if "watermelon" is in the fruit array.//
let fruits2 = ["apple", "banana", "orange"];
console.log(fruits2.includes("watermelon"));


// 19. Create a combined array of numbers and sort them (use concat() + sort()).//
let n1 = [10, 5, 30];
let n2 = [20, 15];
let numbers = n1.concat(n2).sort((a, b) => a - b);
console.log(numbers);


// 20. Join three small arrays of subjects into one array.//
let s1 = ["Math", "Science"];
let s2 = ["English", "History"];
let s3 = ["Tamil", "Computer"];
let subjects = s1.concat(s2, s3);
console.log(subjects);

//Level 3: Slicing and Splicing //
// 21. Create an array [10, 20, 30, 40, 50]. Use slice(1,4) and print result.
let nums = [10, 20, 30, 40, 50];
console.log(nums.slice(1, 4)); // [20, 30, 40]


// 22. Remove "banana" from ["apple","banana","cherry"] using splice().//
let fruits3 = ["apple", "banana", "cherry"];
fruits3.splice(1, 1);
console.log(fruits3);


// 23. Insert "grape" between "apple" and "cherry" using splice().//
let fruits4 = ["apple", "cherry"];
fruits4.splice(1, 0, "grape");
console.log(fruits4);


// 24. Extract first 3 elements from [5,10,15,20,25] using slice().//
let numbers2 = [5, 10, 15, 20, 25];
console.log(numbers2.slice(0, 3));


// 25. Replace "dog" with "tiger" in ["cat","dog","lion"] using splice().//
let animals2 = ["cat", "dog", "lion"];
animals2.splice(1, 1, "tiger");
console.log(animals2);


// 26. Remove 2 middle items from [1,2,3,4,5] using splice().
let nums2 = [1, 2, 3, 4, 5];
nums2.splice(1, 2); // removes 2 and 3
console.log(nums2);


// 27. Add 2 new colors in between using splice().//
let colors2 = ["red", "blue"];
colors2.splice(1, 0, "green", "yellow");
console.log(colors2);


// 28. Copy the last 2 items from an array using slice(-2).//
let arrX = [100, 200, 300, 400];
console.log(arrX.slice(-2)); // [300, 400]


// 29. Clone an entire array using slice().//
let original = ["A", "B", "C"];
let clone = original.slice();
console.log(clone);


// 30. Create a copy of an array without changing the original (slice immutability).//
let originalArr = [1, 2, 3, 4];
let copiedArr = originalArr.slice();
copiedArr.push(5);
console.log("Original:", originalArr);
console.log("Copied:", copiedArr); 

//LEVEL 4: forEach, map,filter//

// 31. Use forEach() to print all numbers in [10,20,30,40].//
[10, 20, 30, 40].forEach(num => console.log(num));


// 32. Use map() to double each number in [1,2,3,4,5].//
let doubled = [1, 2, 3, 4, 5].map(num => num * 2);
console.log(doubled);


// 33. Use map() to convert an array of names to uppercase.//
let name = ["ajay", "bala", "anu"];
let upperNames = name.map(name => name.toUpperCase());
console.log(upperNames);


// 34. Use filter() to keep only even numbers from [10,15,20,25,30].//
let num = [10, 15, 20, 25, 30];
let evens = num.filter(n => n % 2 === 0);
console.log(evens);


// 35. Filter out names that start with letter "A" from ["Ajay","Bala","Anu","Deepa"].//
let nlist = ["Ajay", "Bala", "Anu", "Deepa"];
let aNames = nlist.filter(name => name.startsWith("A"));
console.log(aNames);


// 36. Use forEach() to print "Student: <name>" for each student.//
nlist.forEach(name => console.log("Student: " + name));


// 37. Use map() to create a new array of squared values from [2,4,6,8].//
let squared = [2, 4, 6, 8].map(n => n * n);
console.log(squared);


// 38. Filter out all negative numbers from [10, -5, 8, -3, 12].//
let mixed = [10, -5, 8, -3, 12];
let positiveOnly = mixed.filter(n => n >= 0);
console.log(positiveOnly);


// 39. Use map() to add "Mr./Ms." before each name in an array.//
let persons = ["Ajay", "Bala", "Anu"];
let titled = persons.map(name => "Mr./Ms. " + name);
console.log(titled);


// 40. Filter the array of marks [40,55,75,90,35] to show only pass marks (>=50).//
let marks = [40, 55, 75, 90, 35];
let pass = marks.filter(m => m >= 50);
console.log(pass);

//LEVEL 5: reduce, sort,reverse,find,some,every//

// 41. Use reduce() to find the sum of [5,10,15,20].//
let sum = [5, 10, 15, 20].reduce((a, b) => a + b, 0);
console.log(sum);


// 42. Use reduce() to find the product of [2,3,4,5].//
let product = [2, 3, 4, 5].reduce((a, b) => a * b, 1);
console.log(product);


// 43. Sort [30,10,50,20,40] in ascending order using sort().//
let arrSort = [30, 10, 50, 20, 40];
arrSort.sort((a, b) => a - b);
console.log(arrSort);


// 44. Reverse an array of numbers [1,2,3,4,5] using reverse().//
let revArr = [1, 2, 3, 4, 5];
revArr.reverse();
console.log(revArr);


// 45. Use find() to get the first number greater than 50 from [10,60,30,80,40].//
let num2 = [10, 60, 30, 80, 40];
let firstAbove50 = num2.find(n => n > 50);
console.log(firstAbove50);


// 46. Use some() to check if any number is above 100 in [10,50,80,30].//
let nums3 = [10, 50, 80, 30];
let anyAbove100 = nums3.some(n => n > 100);
console.log(anyAbove100);

//47. Use every() to check if all numbers are positive//
let num3 = [2, 4, 6, 8];
let allPositive = num3.every(n => n > 0);
console.log(allPositive); // true
//48.use sort() to arrange names alphabetically//
let nam1 = ["Deepa", "Ajay", "Bala", "Chitra"];
names.sort();
console.log(nam1);
//49.use reverse()//
let student1 = ["Deepa", "Ajay", "Bala", "Chitra"];
students.sort().reverse();
console.log(student1);
//50. combine filter()+ reduce()//
let number1 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenSum = number1
  .filter(n => n % 2 === 0)
  .reduce((a, b) => a + b, 0);

console.log(evenSum); // 20