// Question 01

// var arr = [12, 1, 10, 3, 4, 2, 8, 5, 7, 9, 6, 11];

// var sortedArr = [];
// var min;

// for (var i = 0; i < arr.length; i++) {
//   min = i;
//   for (var j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[min]) {
//       min = j;
//     }
//   }
//   let temp = arr[i];
//   arr[i] = arr[min];
//   arr[min] = temp;

//   sortedArr.push(arr[i]);
// }
// console.log("Sorted array in ascending order:", sortedArr);
 
// Question 02

// var numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];

// var missingNumber = 7;

// var totalNumbers = 10;

// var expectedSum = (totalNumbers * (totalNumbers + 1)) / 2;
// var actualSum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     actualSum += numbers[i];
// }

// var foundMissingNumber = expectedSum - actualSum;

// console.log("Original Array:", numbers);
// console.log("Missing Number:", foundMissingNumber);