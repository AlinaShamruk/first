"use strict";

// let user = {
//     name: 'John',
//     surname: "Smith"
// };
// user.name = "Pete";
// delete user.name;
// console.log(user)
// console.log('-------------------');
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);
// console.log('-------------------');
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };
// function multiplyNumeric() {
//     for (key in menu) {
//         if (typeof menu[key] === "number") {
//             menu[key] *= 2;
//         }
//     }
//     console.log(menu)
// };
// multiplyNumeric();
// console.log('-------------------');
// let arr = [54, 15, 3, 8, 5, 44];
// for (num of arr) {
//     if (num > 7) {
//         console.log(num)
//     }
// }
// console.log('-------------------');
// let arg = [{ 'one': 4 }, { 'two': 11 }, { 'forest': 22 }];
// for (let key of arg) {
//     for (name in key) {
//         if (key[name] > 7) {
//             console.log(name);
//         }
//     }
// }
// console.log('-------------------');
var information = [{
  "firstName": 'Ashton',
  "lastName": 'Kutcher',
  "age": 40
}, {
  "firstName": 'Bradley',
  "lastName": 'Pitt',
  "age": 54
}, {
  "firstName": 'Hannah',
  "lastName": 'Dakota',
  "age": 24
}];
var user = prompt("Введите имя"); // let user = res;

function cheakLastName() {
  for (var _i = 0, _information = information; _i < _information.length; _i++) {
    key = _information[_i];

    if (information.lastName === user) {
      alert("".concat(information));
    } else {
      alert("No results found for your request");
    }
  }
}

;
cheakLastName(); // for (let key of information) {
//     for (let name in key) {
//         if (key[name] == userLastName) {
//             alert(information)
//         } else 
//             alert("No results found for your request");
//     }
// }