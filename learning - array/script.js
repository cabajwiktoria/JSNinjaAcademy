"use strict";

// const list = [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];

// const list2 = [4, 2, 1, 8, 3];

// const list3 = [-10, -7, 3, 5, 3 , 2 ,-2];

// function solution1(arr){ // 2, 1, 4, 3, 8
//     const n = arr.length; // 5
//     for (let i=0; i< n; i++) {  // i =2
//         for (let j=0; j< n - 1 - i; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 const temp = arr[j]; // 4
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     console.log([arr[0], arr[1]]);
// }

// solution1(list);

// console.log(list.sort());

// function solution2(arr) {
//     let max = arr[0];
//     for(let i = 1; i< arr.length; i++){
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     let counter = 0;
//     for (let i=0; i<arr.length; i++) {
//         if (Math.abs(arr[i]) > max) {
//             counter = counter +1; // counter +=1; counter++;
//         }
//     }
//     console.log(counter);
// }

// solution2(list3);

// // [-10, -7, 3, 5, 3 , 2 ,-2, -4];
// function solution3(arr) {
//     let max; // -2
//     for (let i=0; i< arr.length; i++) {
//         if (arr[i] < 0) {
//             max = arr[i];
//         }
//     }

//     for (let i=0; i<arr.length; i++) {
//         if(arr[i] < 0) {
//             if (arr[i] > max) {
//                 max = arr[i];
//             }
//         }
//     }
// }

// true && true == true

// false || true == true

// [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];

/**
 * 3 => 3
 * 5 => 2
 * 2 => 3
 * 6 => 2
 * 8 => 1
 * 45 => 2
 * 7 => 1
 * 56 => 1
 * -3 => 1
 */

// function solution4(arr) {
//     const hashMap = {};
//     for(let i=0; i<arr.length; i++) {
//         if (hashMap[arr[i]] !== undefined) {
//             hashMap[arr[i]] = hashMap[arr[i]] + 1;
//         } else {
//             hashMap[arr[i]] = 1;
//         }
//     }
// }

// [3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3];

/**
 * [
 *  [3, 3],
 *  [5, 1],
 *  [2, 3],
 *  [6, 1],
 *  [8, 1],
 * ]
 *
 */
// function solution4_2(arr) {
//     const resultList = [];
//     for (let i=0; i<arr.length; i++){

//         let flag = true;
//         for(let j=0; j< resultList.length; j++) {
//             if(resultList[j][0] == arr[i]) {
//                 resultList[j][1]++;
//                 flag = false;
//             }
//         }

//         if (flag) {
//             resultList.push(    [ arr[i] , 1 ]   );
//         }
//     }
//     let max = resultList[0];
//     for(let i = 1; i< resultList.length; i++) {
//         if(max[1] <= resultList[i][1]) {
//             max = resultList[i];
//         }
//     }

//     console.log(max[0]);
// }

// solution4_2([3,5,2,6,8,3,2,45,6,45,7,2,3,5,56, -3])

// ZADANKO 1
// funkcja która liczy średnia arytmetyczna dodatnich elementów

const list1a = [1, 2, 3, 4, 5];
const list1b = [3, 8, -8, 10, 5];

function positiveAverage(arr) {
  let positive = [];
  let summary = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive.push(arr[i]);
      summary = summary + arr[i];
    }
  }
  const average = summary / positive.length;
  console.log(average);
  //   console.log(positive, summary);
  //   console.log(summary / positive.length);
}
positiveAverage(list1a);
positiveAverage(list1b);

function positiveAverage2(arr) {
  let summary = 0;
  let numbers = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      summary = summary + arr[i];
      numbers = numbers + 1;
    }
  }
  const average = summary / numbers;
  console.log(average);
  //   console.log(positive, summary);
  //   console.log(summary / positive.length);
}
positiveAverage2(list1a);
positiveAverage2(list1b);

// ZADANKO 2
// znalesc najwieszą liczbe i jego index

const list2a = [5, 2, 6, 4, 2, 7, 3, 4, 7, 9, 1, 2, 5, 5, 4, 3];
const list2b = [100, 102, 99];

function biggestIndex(arr) {
  let biggest = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  let index = arr.indexOf(biggest);
  console.log(biggest, index);
}

biggestIndex(list2a);
biggestIndex(list2b);

function biggestIndex2(arr) {
  let biggest = 0;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
      index = [i];
    }
  }
  console.log(biggest, index);
}

biggestIndex2(list2a);
biggestIndex2(list2b);

// ZADANKO 3
// transfer listy o jakąś liczbę

const list3a = [1, 2, 3, 4, 5];
const number3a = 2;

const list3b = [1, 2, 3, 4, 5];
const number3b = -2;

const list3c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const number3c = 4;

function transfer(arr, number) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    let newIndex = i + number;
    if (newIndex < 0) {
      newIndex = newIndex + arr.length;
    }
    if (newIndex >= arr.length) {
      newIndex = newIndex - arr.length;
    }
    newArray[newIndex] = arr[i];
  }
  console.log(newArray);
}

transfer(list3a, number3a);
transfer(list3b, number3b);
transfer(list3c, number3c);

// ZADANKO 4
// zwrocic liste niepowtarzanych elementów

const list4a = [1, 2, 3, 3, 4, 5];
const list4b = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

function uniqueItems(arr) {
  let newArray = [];

  for (let i = 0; i < arr.length; i++)
    if (newArray.includes(arr[i])) {
    } else newArray.push(arr[i]);
  console.log(newArray);
}

uniqueItems(list4a);
uniqueItems(list4b);
