/*Challenges

String Manipulation Challenge
Task: Write a function that takes a string and returns the number of vowels in the string.
Example: countVowels("hello world") should return 3.
Hint: use the .includes() method*/

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("hello world")); // Output: 3



/*Loop and Conditional Challenge
Task: Write a function that takes an array of numbers and returns a new array containing only the numbers greater than a given threshold.
Example: filterGreaterThan([1, 2, 3, 4, 5], 3) should return [4, 5].
Hint: you can use traditional looping or the .filter() method here. Arrow functions are also extremely helpful with the .filter()*/






/*Array Method Challenge
Task: Write a function that takes an array of numbers and returns a new array with each number squared.
Example: squareNumbers([1, 2, 3, 4]) should return [1, 4, 9, 16].
Hint: the .map() is your friend here. Also perhaps the arrow function inside your .map()*/






/*Functional Challenge
Task: Write a function that takes an array of integers and returns a new array where each element is multiplied by its index.
Example: multiplyByIndex([1, 2, 3, 4]) should return [0, 2, 6, 12].*/






/*Conditional Challenge
Task: Write a function that takes a year and returns true if the year is a leap year, and false otherwise.
Example: isLeapYear(2020) should return true.*/



/*function countVowels(str){
    let count = 0;;
    const vowels = "aeiou";
    for(let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        };
    };
    return count
}

console.log(countVowels("hellO world"))

function filterGreaterThan(arr, thresh) {
    return arr.filter((x) => x > thresh)
}

console.log(filterGreaterThan([1, 2, 3, 4, 5], 3))

function squareNumbers(arr) {
    return arr.map((x) => x*x)
}

console.log(squareNumbers([1, 2, 3, 4]))

function multiplyByIndex(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * i);
    }
    return newArr;
};

console.log(multiplyByIndex([1, 2, 3, 4]))

function isLeapYear(year) {
    return (year%4 == 0 && (year%100 != 0 || year%400 == 0));
};

console.log(isLeapYear(2000))

function multiplyByIndex(arr) {
    const results = []
    arr.forEach((el, index) => {
      results.push(el * index)
    })
    return results
  }
  console.log(multiplyByIndex([5,3,2,6])); */