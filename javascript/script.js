const navbar = document.querySelector(".navbar");

document.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    console.log("Greater than or equal to 200");
    navbar.style.backgroundColor = "red";
  } else {
    console.log("Less than 200");
    navbar.style.backgroundColor = "";
  }
});

// function test(callback) {
//   callback();
// }

// function test2() {
//   console.log("test 2 function");
// }

// test(test2);

// function testing(age, name, address, displayPerson) {
//     displayPerson(age,name,address)
//  }

//  function displayPerson(param1,param2,param3) {
//  console.log(param1, param2, param3);

//  }

// testing(10, "Ali", "peshawar", displayPerson);

// const arr = [1, 2, 3, 4];
// arr.forEach(function (item, index, values) {
//   console.log(item);
// });

// function longestNum(a, b, c) {
//   if(a < 1 || b < 1 || c < 1)  {
//     return "values must be greater than 1"
//   }

//   return a + b + c

// }

// console.log(longestNum(0,0,0));

// console.log("5" === 5);

// prime and consonant number

// function checkPrime(number) {
//     if (number <= 1) {
//         console.log("The given number " + number + " is not a prime number");
//         return;
//     }

//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             console.log("The given number " + number + " is not a prime number");
//             return;
//         }
//     }

//     console.log("The given number " + number + " is a prime number");
// }

// checkPrime(13);

// const arr = [
//   {
//     name: "Rahim Shah",
//     address: "Peshawar",
//     contact: "0345678923",
//   },
//   {
//     name: "Abid Jamal",
//     address: "Lakki Marwat",
//     contact: "0345678836",
//   },
//   {
//     name: "Abid",
//     address: "Swabi",
//     contact: "0345678836",
//   },
//   {
//     name: "Ali",
//     address: "Peshawar",
//     contact: "0345634523",
//   },
// ];
// console.log(arr);
// let changeAddress = arr.map((user) => {
//   if (user.address == "Peshawar") {
//     user.address = "Islamabad";
//   }
//   return user;
// });

// "primitive vs non primitive"
// "number, string, boolean, null, undefine primitive. it is by value"
// discusion 
// var a = 5;
// var b = a;
// b = 10;
// console.log(a);
// console.log(b);
// let str1 = "Rahim Shah";
// let str2 = str1;
// str2 = "Abid Jamal"
// console.log(str1);
// console.log(str2);




// "array, object not primitive and it is by refrence"
// discussion
// const nums = [1,2,3,4]
// const nums2 = nums 
// nums2[0] = 10 
// console.log(nums);
// for objects 
// let obj1 = {
//     name: "Rahim Shah",
//     address: "Lakki Marwat",
//     contact: "0234567543"
// }

// let obj2 = obj1;
// obj2.name = "Abid Jamal"
// console.log(obj1);




