"use strict";

// ZADANIA STRINGI
// Zadanie 1 - Oczyscic string od liczb. Przyklad "asd78fdsd9sdf7asdf" zwraca "asdfdsdsdfasdf"

let string1 = "asd78fdsd9sdf7asdf";
function stringWithoutNumbers1(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] !== "0" &&
      string[i] !== "1" &&
      string[i] !== "2" &&
      string[i] !== "3" &&
      string[i] !== "4" &&
      string[i] !== "5" &&
      string[i] !== "6" &&
      string[i] !== "7" &&
      string[i] !== "8" &&
      string[i] !== "9"
    ) {
      array.push(string[i]);
    }
  }
  //   console.log(array);
  let newString = array.join("");
  console.log(`Exercise 1 result 1: ${newString}`);
}
stringWithoutNumbers1(string1);

function stringWithoutNumbers2(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (isNaN(string[i])) {
      array.push(string[i]);
    }
  }
  let newString = array.join("");
  console.log(`Exercise 1 result 2: ${newString}`);
}

stringWithoutNumbers2(string1);

function stringWithoutNumbers3(string) {
  let newString = string.replace(/[0-9]/g, "");
  console.log(`Exercise 1 result 3: ${newString}`);
}

stringWithoutNumbers3(string1);

// Zadanie 2 - Usunąc spacje z stringa.

let string2 = "sadfsa fsdafasdf sadfsadf sadfasdf sadfsafd";

function stringWithoutSpaces1(string) {
  let array = string.split(" ");
  //   console.log(array);
  let newString = array.join("");
  console.log(`Exercise 2 result: ${newString}`);
}

function stringWithoutSpaces2(string) {
  let array = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") {
      array.push(string[i]);
    }
  }
  let newString = array.join("");
  console.log(`Exercise 2 result: ${newString}`);
}

stringWithoutSpaces1(string2);
stringWithoutSpaces2(string2);

// Zadanie 3 - Oczyscic string od powtórzen przyklad "abcddejfksdfjksdufwi" zwraca "abcdejfksuwi"

let string3 = "abcddejfksdfjksdufwi";

function stringWithoutRepeating1(string) {
  let array = string.split("");
  let newArray = [];
  for (let i = 0; i < array.length; i++)
    if (newArray.includes(array[i])) {
    } else {
      newArray.push(array[i]);
    }
  //   console.log(newArray);
  let newString = newArray.join("");
  console.log(`Exercise 3 result: ${newString}`);
}

function stringWithoutRepeating2(string) {
  let newString = "";
  let freq = {};
  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
      newString = newString + character;
    }
  }
  console.log(`Exercise 3 result: ${newString}`);
}

stringWithoutRepeating1(string3);
stringWithoutRepeating2(string3);
