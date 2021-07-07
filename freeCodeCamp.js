//Caesars Cipher
// function rot13(str) {
//     const x= {
//       'A':"N",'N':"A",'B':"O",'O':"B",'C':"P",'P':"C",'D':"Q",'Q':"D",'E':'R','R':'E','F':'S','S':'F','G':'T','T':'G','H':'U','U':'H','I':'V','V':'I','J':'W','W':'J','K':'X','X':'K','L':'Y','Y':'L','M':'Z','Z':'M'
//   };

//   var alpha = [];
//    for (var i = 0; i < str.length; i++) {
//       if(str[i] >= 'A' && str[i] <= 'Z') {
//          alpha[i] = x[str[i]];
//       }
//       else{
//         alpha[i] = str[i];
//       }
//     }
//     str = alpha.join("");
//  return str;
// }

// console.log(rot13("SERR PBQR PNZC"));
// rot13("SERR CVMMN!");
// rot13("SERR YBIR?");
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");



/*
You are given an object literal representing a part of your musical album collection. Each album has a unique id number as its key and several other properties. Not all albums have complete information.

You start with an updateRecords function that takes an object literal, records, containing the musical album collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire record collection object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the recordCollection object is used for the tests.
*/
// Setup
// var recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };
// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if(prop !== 'tracks' && value !== ''){
//     records[id][prop] = value;
//   }
//   else if(prop === 'tracks' && !records[id].hasOwnProperty(prop)){
//     records[id][prop] = [value];
//   }
//   else if(prop === 'tracks' && value !== '') {
//     records[id][prop].push(value);
//   }
//   else if(value === ''){
//     delete records[id][prop];
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
// updateRecords(recordCollection, 2548, "artist", "");
// updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
// updateRecords(recordCollection, 2468, "tracks", "Free");
// updateRecords(recordCollection, 2548, "tracks", "");
// updateRecords(recordCollection, 1245, "albumTitle", "Riptide");




// function multiplyAll(arr) {
//   var product = 1;
//   // Only change code below this line
// for(var i = 0; i < arr.length; i++){
//   var local = 1;
//   for(var j = 0; j < arr[i].length; j++){
//     local *= arr[i][j];
//   }
//   product *= local;
// }
//   // Only change code above this line
//   return product;
// }

// multiplyAll([[1,2],[3,4],[5,6,7]]);



// function sum(arr, n) {
//   // Only change code below this line
// if(n === 0){
//   return 0;
// }
// else{
//   return sum(arr,n-1) + arr[n-1];
// }
//   // Only change code above this line
// }

// console.log(sum([1], 0));
// console.log(sum([2, 3, 4], 1));
// console.log(sum([2, 3, 4, 5], 3));





/*
Profile Lookup
We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.
*/
// Setup
// var contacts = [
//   {
//       "firstName": "Akira",
//       "lastName": "Laine",
//       "number": "0543236543",
//       "likes": ["Pizza", "Coding", "Brownie Points"]
//   },
//   {
//       "firstName": "Harry",
//       "lastName": "Potter",
//       "number": "0994372684",
//       "likes": ["Hogwarts", "Magic", "Hagrid"]
//   },
//   {
//       "firstName": "Sherlock",
//       "lastName": "Holmes",
//       "number": "0487345643",
//       "likes": ["Intriguing Cases", "Violin"]
//   },
//   {
//       "firstName": "Kristian",
//       "lastName": "Vos",
//       "number": "unknown",
//       "likes": ["JavaScript", "Gaming", "Foxes"]
//   }
// ];

// function lookUpProfile(name, prop) {
// // Only change code below this line
// for(var i = 0; i < contacts.length; i++){
//   if(contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
//       return contacts[i][prop];
//   }
// }
// for(var i = 0; i < contacts.length; i++){
//   if(contacts[i].firstName === name && !contacts[i].hasOwnProperty(prop)){
//     return "No such property";
//   }
// }
// for(var i = 0; i < contacts.length; i++){
//   if(contacts[i].firstName !== name){
//       return "No such contact";
//   }
// }
// // Only change code above this line
// }

// lookUpProfile("Kristian", "lastName");
// lookUpProfile("Sherlock", "likes");
// lookUpProfile("Harry", "likes");
// lookUpProfile("Bob", "number");
// lookUpProfile("Bob", "potato");
// lookUpProfile("Akira", "address");
// lookUpProfile("Akira", "likes");



/**
Use Recursion to Create a Countdown
In a previous challenge, you learned how to use recursion to replace a for loop. Now, let's look at a more complex function that returns an array of consecutive integers starting with 1 through the number passed to the function.

As mentioned in the previous challenge, there will be a base case. The base case tells the recursive function when it no longer needs to call itself. It is a simple case where the return value is already known. There will also be a recursive call which executes the original function with different arguments. If the function is written correctly, eventually the base case will be reached.

For example, say you want to write a recursive function that returns an array containing the numbers 1 through n. This function will need to accept an argument, n, representing the final number. Then it will need to call itself with progressively smaller values of n until it reaches 1. You could write the function as follows:

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
The value [1, 2, 3, 4, 5] will be displayed in the console.

At first, this seems counterintuitive since the value of n decreases, but the values in the final array are increasing. This happens because the push happens last, after the recursive call has returned. At the point where n is pushed into the array, countup(n - 1) has already been evaluated and returned [1, 2, ..., n - 1].

We have defined a function called countdown with one parameter (n). The function should use recursion to return an array containing the integers n through 1 based on the n parameter. If the function is called with a number less than 1, the function should return an empty array. For example, calling this function with n = 5 should return the array [5, 4, 3, 2, 1]. Your function must use recursion by calling itself and must not use loops of any kind.
 */
// function countdown(n){
//   if(n < 1){
//     return[];
//   }
//   else{
//     var arr = countdown(n-1)
//     arr.unshift(n);
//     return arr;
//   }
// }

// console.log(countdown(5));
// console.log(countdown(10));




/*Use Recursion to Create a Range of Numbers
Continuing from the previous challenge, we provide you another opportunity to create a recursive function to solve a problem.

We have defined a function named rangeOfNumbers with two parameters. The function should return an array of integers which begins with a number represented by the startNum parameter and ends with a number represented by the endNum parameter. The starting number will always be less than or equal to the ending number. Your function must use recursion by calling itself and not use loops of any kind. It should also work for cases where both startNum and endNum are the same.*/

// function rangeOfNumbers(startNum, endNum) {

//   if(startNum > endNum){
//     return[];
//   }
//   else{
//     var arr = rangeOfNumbers(startNum,endNum-1)
//     arr.push(endNum);
//     return arr;
//   }
// };

// rangeOfNumbers(1,5);
// rangeOfNumbers(6,9);
// rangeOfNumbers(4,4);



/*
Use Arrow Functions to Write Concise Anonymous Functions
In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create inline functions. We don't need to name these functions because we do not reuse them anywhere else.

To achieve this, we often use the following syntax:

const myFunc = function() {
  const myVar = "value";
  return myVar;
}
ES6 provides us with the syntactic sugar to not have to write anonymous functions this way. Instead, you can use arrow function syntax:

const myFunc = () => {
  const myVar = "value";
  return myVar;
}
When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";
This code will still return the string value by default.



Write Arrow Functions with Parameters
Just like a regular function, you can pass arguments into an arrow function.

const doubler = (item) => item * 2;
doubler(4);
doubler(4) would return the value 8.

If an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.

const doubler = item => item * 2;
It is possible to pass more than one argument into an arrow function.

const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
multiplier(4, 2) would return the value 8.



Set Default Parameters for Your Functions
In order to help us create more flexible functions, ES6 introduces default parameters for functions.

Check out this code:

const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());
The console will display the strings Hello John and Hello Anonymous.

The default parameter kicks in when the argument is not specified (it is undefined). As you can see in the example above, the parameter name will receive its default value Anonymous when you do not provide a value for the parameter. You can add default values for as many parameters as you want.


*/



//using Rest operator and map property/method onto an array
// function multiply(multiplier, ...theArgs){
//   return theArgs.map((elem) => {
//     return multiplier * elem;
//   })
// }

// let arr = multiply(2,1,2,3);
// console.log(arr);





// Only change code below this line
// class Thermostat{
//   constructor(fah){
//     this.fah = fah;
//   }

//   get temperature(){
//     return (5/9) * (this.fah - 32);
//   }

//   set temperature(updatedFah){
//     this.fah = updatedFah * 9.0 / 5 + 32;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// thermos.temperature = 26;
// temp = thermos.temperature; // 26 in Celsius




/**

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

JACK
J
Jo
Oceans11
RegexGuru
007
9
A1
BadUse3rnam3
Z97
c57bT3
AB1
J%4

/^[a-z][a-z][a-z]*\d*$|^[a-z]\d\d$/i
 */



/**
 * Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
 * (?=\w{6,})(?=\w*\d{2})
 */


/**
 * We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
 */

//  function filteredArray(arr, elem) {
//   let newArr = [];
//   // Only change code below this line
//   for(var i = 0; i < arr.length; i++){
//   let Arr = [];
//     for(var j = 0; j < arr[i].length; j++){
//       if(arr[i].indexOf(elem) == -1){
//         Arr.push(arr[i][j]);
//       }
//     }
//     if(Arr.length >= 1)
//       newArr.push(Arr);
//   }
//   // Only change code above this line
//   return newArr;
// }

// filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18)
// filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2)
// filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter")
// filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3)





//   const rNums = {
//     1:"I",
//     2:'II',
//     3:'III',
//     4:'IV',
//     5: 'V',
//     6:'VI',
//     7:'VII',
//     8: 'VIII',
//     9: 'IX',
//     10: 'X',
//     20: 'XX',
//     30: 'XXX',
//     40: 'XL',
//     50: 'L',
//     60: 'LX',
//     70: 'LXX',
//     80: 'LXXX',
//     90: 'XC',
//     100: 'C',
//     200: 'CC',
//     300: 'CCC',
//     400: 'CD',
//     500: 'D',
//     600: 'DC',
//     700: 'DCC',
//     800: 'DCCC',
//     900: 'CM',
//     1000: 'M',
//     2000: 'MM',
//     3000: 'MMM'
//   }

// function convertToRoman(num) {
//   let myFunc = nums => Number(nums);
//   var intArr = Array.from(String(num), myFunc);
//   let strArr = [];

//   if(intArr.length == 1){
//     return rNums[intArr[0]];
//   }
//   else if(intArr.length == 2){
//     strArr.push(rNums[`${intArr[0]}0`]);
//     strArr.push(rNums[intArr[1]]);
//   }
//   else if(intArr.length == 3){
//     strArr.push(rNums[`${intArr[0]}00`]);
//     strArr.push(rNums[`${intArr[1]}0`]);
//     strArr.push(rNums[intArr[2]]);
//   }
//   else if(intArr.length == 4){
//     strArr.push(rNums[`${intArr[0]}000`]);
//     strArr.push(rNums[`${intArr[1]}00`]);
//     strArr.push(rNums[`${intArr[2]}0`]);
//     strArr.push(rNums[intArr[3]]);
//   }
//   return strArr.join('');
//  }

//  convertToRoman(2) //should return the string II.
//  convertToRoman(3) //should return the string III.
//  convertToRoman(4) //should return the string IV.
//  convertToRoman(5) //should return the string V.
//  convertToRoman(9) //should return the string IX.
//  convertToRoman(12) //should return the string XII.
//  convertToRoman(16) //should return the string XVI.
//  convertToRoman(29) //should return the string XXIX.
//  convertToRoman(44) //should return the string XLIV.
//  convertToRoman(45) //should return the string XLV.
//  convertToRoman(68) //should return the string LXVIII
//  convertToRoman(83) //should return the string LXXXIII
//  convertToRoman(97) //should return the string XCVII
//  convertToRoman(99) //should return the string XCIX
//  convertToRoman(400) //should return the string CD
//  convertToRoman(500) //should return the string D
//  convertToRoman(501) //should return the string DI
//  convertToRoman(649) //should return the string DCXLIX
//  convertToRoman(798) //should return the string DCCXCVIII
//  convertToRoman(891) //should return the string DCCCXCI
//  convertToRoman(1000) //should return the string M
//  convertToRoman(1004) //should return the string MIV
//  convertToRoman(1006) //should return the string MVI
//  convertToRoman(1023) //should return the string MXXIII
//  convertToRoman(2014) //should return the string MMXIV
//  convertToRoman(3999) //should return the string MMMCMXCIX




//palindrome checker
// function palindrome(str) {

// var newStr = str.replace(/[_]*[,]*[ ]*[.]*[-]*[()]*/g,"").toLowerCase();

// for(var i = 0, j = newStr.length-1; i < newStr.length && j >= 0; i++, j--) {
//   if(newStr[i] != newStr[j]){
//     return false;
//   }
// }
//   return true;
// }

// console.log(palindrome("eye"));
// console.log(palindrome("_eye"));
// console.log(palindrome("race car"));
// console.log(palindrome("not a palindrome"));
// console.log(palindrome("A man, a plan, a canal. Panama"));
// console.log(palindrome("never odd or even"));
// console.log(palindrome("nope"));
// console.log(palindrome("almostomla"));
// console.log(palindrome("My age is 0, 0 si ega ym."));
// console.log(palindrome("1 eye for of 1 eye"));
//console.log(palindrome("0_0 (: /-\ :) 0-0"));
//console.log(palindrome("five|\_/|four"));




// function countOnline(usersObj) {
//   // Only change code below this line
//   let count = 0;
//   for(let user in usersObj){
//     if(usersObj[user].online){
//       count++;
//     }
//     //console.log(user[online])
//   }
//   return count;
//   // Only change code above this line
// }

// console.log(countOnline({ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }));
// console.log(countOnline({ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }));
// console.log(countOnline({ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }));




// let user = {
//   name: 'Kenneth',
//   age: 28,
//   data: {
//     username: 'kennethCodesAllDay',
//     joinDate: 'March 26, 2016',
//     organization: 'freeCodeCamp',
//     friends: [
//       'Sam',
//       'Kira',
//       'Tomo'
//     ],
//     location: {
//       city: 'San Francisco',
//       state: 'CA',
//       country: 'USA'
//     }
//   }
// };

// function addFriend(userObj, friend) {
//   // Only change code below this line
//   return userObj.data.friends[userObj.data.friends.push(friend) - 1];
//   // Only change code above this line
// }

// console.log(addFriend(user, 'Pete'));




// function reverseString(str) {
//   let newStr = "";
//   for(var i = str.length - 1; i >= 0; i--){
//     newStr+=str[i];
//   }
//   return newStr;

//   /**
//    * return str.split('').reverse('').join('');
//    */
// }

// console.log(reverseString("hello"));


// function findLongestWordLength(str) {
//   let arr = str.split(' ');
//   let newStr = arr[0];

//   for(let i = 1; i < arr.length; i++){
//     if(arr[i].length > newStr.length){
//       newStr = arr[i];
//     }
//   }
//   return newStr.length;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));



// function largestOfFour(arr) {
//   let newArr = [];
//   let num = 0;

//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//       if(arr[i][j] > num){
//         num = arr[i][j];
//       }
//     }
//     newArr.push(num);
//     if(i != arr.length - 1)
//       num = arr[i+1][i];
//   }
//   return newArr;
// }

// console.log
// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])
// largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])
// largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])




// function confirmEnding(str, target) {
//   return str.substr(str.length - target.length) === target
// }

// confirmEnding("Bastian", "n")
// confirmEnding("Congratulation", "on")
// confirmEnding("Connor", "n")
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
// confirmEnding("He has to give me a new name", "name")
// confirmEnding("Open sesame", "same")
// confirmEnding("Open sesame", "sage")
// confirmEnding("Open sesame", "game")
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")
// confirmEnding("Abstraction", "action")




// function repeatStringNumTimes(str, num) {
//   let newStr = str;
//   if(num > 0){
//     for(let i = 0; i < num-1; i++){
//       str+=newStr;
//     }
//   }
//   else{
//     str = '';
//   }
//   return str;
// }

// repeatStringNumTimes("*", 3)
// repeatStringNumTimes("abc", 3)
// repeatStringNumTimes("abc", 4)
// repeatStringNumTimes("abc", 1)
// repeatStringNumTimes("*", 8)
// repeatStringNumTimes("abc", -2)
// repeatStringNumTimes("abc", 0)




// function truncateString(str, num) {
//   if(num < str.length) {
//   return str.substr(0, num).concat('...');
//   }
//   else{
//     return str;
//   }
// }

// confirmEnding("Bastian", "n")
// confirmEnding("Congratulation", "on")
// confirmEnding("Connor", "n")
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
// confirmEnding("He has to give me a new name", "name")
// confirmEnding("Open sesame", "same")
// confirmEnding("Open sesame", "sage")
// confirmEnding("Open sesame", "game")
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")
// confirmEnding("Abstraction", "action")




// function fn(arr, func){
//   let num = 0;
//   let a = arr.map(num => num % 2 === 0);
//   return a;
// }

// console.log(fn([2,4], num => num % 2 === 0))


//function findElement(arr, func) {
  //there is no way to break or return a JS forEach
  //  arr.forEach(element => {
  //   if(func(element)) {
  //     return element;
  //   }
  // });
  // return undefined;

  //there is no way to break or return a JS for...in
  // for (const key in arr) {
  //   if(func(key)){
  //     return key;
  //   }
  // }
  // return num;

  //solution 1
  //   for (const key of arr) {
  //   if(func(key)){
  //     return key;
  //   }
  // }
  // return undefined;

  // solution 2
//   return arr.find(func);
// }

// console.log(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0));
// console.log(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }));



// function booWho(bool) {
//   return typeof bool === 'boolean';
// }

// console.log(booWho(null));
// console.log(booWho(true));
// console.log(booWho(false));



// function titleCase(str) {
//   let arr = str.split(' ');

//   for(let i = 0; i < arr.length; i++){
//     str = arr[i].substr(1);
//     arr[i] = arr[i][0].toUpperCase() + str;
//   }

//   let strArr = [''];

//   for(let i = 0; i < arr.length; i++){
//     strArr[i] = arr[i][0];
//     for(let j = 1; j < arr[i].length; j++){
//       if(arr[i][j] == arr[i][j].toUpperCase()){
//         strArr[i] += arr[i][j].toLowerCase();
//       }
//       else{
//         strArr[i] += arr[i][j].toLowerCase();
//       }
//     }
//   }
//   return strArr.join(' ');
// }

// titleCase("I'm a little tea pot")
// titleCase("sHoRt AnD sToUt")
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")





// function frankenSplice(arr1, arr2, n) {
//   for(let i = 0; i < arr1.length; i++){
//       arr2.splice(n,0,arr1[i])
//       n++;
//   }
//   return arr2;
// }

// frankenSplice([1, 2, 3], [4, 5], 1);

// function frankenSplice(arr1, arr2, n) {
//   let arr3 = arr2.slice(0,n);
//   for(let i = 0; i < arr1.length; i++) arr3.push(arr1[i]);
//   for(let i = n; i < arr2.length; i++) arr3.push(arr2[i]);
//   return arr3;
// }

// frankenSplice([1, 2, 3], [4, 5], 1)
// frankenSplice([1, 2], ["a", "b"], 1)
// frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)



// function bouncer(arr) {
//   for(let i = 0; i < arr.length; i++){
//      if(!arr[i] ){
//       arr.splice(i,1);
//       --i;
//     }
//   }
//   return arr;
// }

//bouncer([7, "ate", "", false, 9]);
//bouncer([false, null, 0, NaN, undefined, ""])
//bouncer(["a", "b", "c"])
//bouncer([null, NaN, 1, 2, undefined])



// function getIndexToIns(arr, num) {
//   arr.sort((a,b) => a - b);

//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == num)
//       return i;
//     else if(arr[i] < num && arr[i+1] > num)
//       return i+1;
//   }
//   return arr.length;
// }

// getIndexToIns([10, 20, 30, 40, 50], 35)
// getIndexToIns([10, 20, 30, 40, 50], 30)
// getIndexToIns([40, 60], 50)
// getIndexToIns([3, 10, 5], 3)
// getIndexToIns([5, 3, 20, 3], 5)
// getIndexToIns([2, 20, 10], 19)
// getIndexToIns([2, 5, 10], 15)
// getIndexToIns([], 1)



// function mutation(arr) {
//   arr[0] = arr[0].toLowerCase();
//   arr[1] = arr[1].toLowerCase();

//   let count = 0;
//   for(let j = 0; j < arr[1].length; j++){
//     for(let i = 0; i < arr[0].length; i++){
//       if(arr[1][j] === arr[0][i]) {
//         ++count;
//         if(count == arr[1].length) {
//           return true;
//         }
//         else if(j == arr[1].length-1)
//           return false;
//       }
//     }
//   }
//   return false;
// }

// console.log(mutation(["voodoo", "no"]));



// function chunkArrayInGroups(arr, size) {
//   let oldSize = size;
//   let newArr = [];
//   newArr.push(arr.slice(0, size));
//   while(size < arr.length)
//     newArr.push(arr.slice(size, size+size == arr.length ? size+=arr.length: size+=oldSize));
//   return newArr;
// }

//  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)) //should return [["a", "b"], ["c", "d"]].
//  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)) //should return [[0, 1, 2], [3, 4, 5]].
//  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)) //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)) //should return [[0, 1], [2, 3], [4, 5]].
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)) //should return [[0, 1, 2, 3], [4, 5]].
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)) //should return [[0, 1, 2], [3, 4, 5], [6]].
//   console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)) //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].




// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
// function sumAll(arr) {
//   let newArr = arr.map((obj) => {
//     if(obj == arr[arr.length - 1]){
//       let count = obj;
//       let val = arr[0], accum = arr[0];
//       if(arr[0] < arr[1]){
//         while(count != val){
//           accum += count;
//           --count;
//         }
//       }
//       else{
//         while(count != val){
//           accum += count;
//           ++count;
//         }
//       }
//       return accum;
//     }
//   })
//   return parseInt(newArr[1]);
// }

// sumAll([1, 4]) //should return 10.
// sumAll([4, 1]) //should return 10.
// sumAll([5, 10]) //should return 45.
// sumAll([10, 5]) //should return 45.




// The global variable
// var watchList = [
//   {
//     "Title": "Inception",
//     "Year": "2010",
//     "Rated": "PG-13",
//     "Released": "16 Jul 2010",
//     "Runtime": "148 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Christopher Nolan",
//     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//     "Language": "English, Japanese, French",
//     "Country": "USA, UK",
//     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.8",
//     "imdbVotes": "1,446,708",
//     "imdbID": "tt1375666",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Interstellar",
//     "Year": "2014",
//     "Rated": "PG-13",
//     "Released": "07 Nov 2014",
//     "Runtime": "169 min",
//     "Genre": "Adventure, Drama, Sci-Fi",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan, Christopher Nolan",
//     "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//     "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     "Language": "English",
//     "Country": "USA, UK",
//     "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//     "Metascore": "74",
//     "imdbRating": "8.6",
//     "imdbVotes": "910,366",
//     "imdbID": "tt0816692",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "The Dark Knight",
//     "Year": "2008",
//     "Rated": "PG-13",
//     "Released": "18 Jul 2008",
//     "Runtime": "152 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Christopher Nolan",
//     "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//     "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//     "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//     "Language": "English, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//     "Metascore": "82",
//     "imdbRating": "9.0",
//     "imdbVotes": "1,652,832",
//     "imdbID": "tt0468569",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "Rated": "PG-13",
//     "Released": "15 Jun 2005",
//     "Runtime": "140 min",
//     "Genre": "Action, Adventure",
//     "Director": "Christopher Nolan",
//     "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//     "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//     "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//     "Language": "English, Urdu, Mandarin",
//     "Country": "USA, UK",
//     "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//     "Metascore": "70",
//     "imdbRating": "8.3",
//     "imdbVotes": "972,584",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Response": "True"
//   },
//   {
//     "Title": "Avatar",
//     "Year": "2009",
//     "Rated": "PG-13",
//     "Released": "18 Dec 2009",
//     "Runtime": "162 min",
//     "Genre": "Action, Adventure, Fantasy",
//     "Director": "James Cameron",
//     "Writer": "James Cameron",
//     "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//     "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//     "Language": "English, Spanish",
//     "Country": "USA, UK",
//     "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//     "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//     "Metascore": "83",
//     "imdbRating": "7.9",
//     "imdbVotes": "876,575",
//     "imdbID": "tt0499549",
//     "Type": "movie",
//     "Response": "True"
//   }
// ];


// var ratings = [];
// // for(var i=0; i < watchList.length; i++){
// //   ratings.push({title: watchList[i]["Title"],  rating: watchList[i]["imdbRating"]});
// //
// ratings = watchList.map(elem =>  {
//   return {
//   'title': elem.Title,
//   'rating': elem.imdbRating
//  }
// })

// console.log(JSON.stringify(ratings));



// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.
// var s = [23, 65, 98, 5];

// Array.prototype.myMap = function(callback) {
//   var newArray = [];
//   this.forEach(element => newArray.push(callback(element)))
//   return newArray;
// };

// var new_s = s.myMap(function(item) {
//   return item * 2;
// });

// console.log(new_s);

//new_s should equal [46, 130, 196, 10].



//Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.
// var s = [23, 65, 98, 5];

// Array.prototype.myFilter = function(callback) {
//   var newArray = [];
//   this.forEach(elem => callback(elem) ? newArray.push(elem) : 0)
//   return newArray;
// };

// var new_s = s.myFilter(function(item) {
//   return item % 2 === 1;
// });

//new_s should equal [23, 65, 5].




//The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.

// var filteredList = watchList.map(elem =>  {
//   return {
//   'title': elem.Title,
//   'rating': elem.imdbRating
//  }
// }).filter(elem => parseInt(elem.rating) >= 8.0)

// // filteredList = filteredList.filter(elem => {
// //   return parseInt(elem.rating) >= 8.0
// // })
// // Only change code above this line

// console.log(filteredList);

//  filteredList should equal [{"title": "Inception","rating": "8.8"},{"title": "Interstellar","rating": "8.6"},{"title": "The Dark Knight","rating": "9.0"},{"title": "Batman Begins","rating": "8.3"}].




//The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.

// function getRating(watchList){
//   var averageRating;
//   let list = watchList.map(elem =>  {
//     return {
//     'director': elem.Director,
//     'rating': elem.imdbRating
//   }
//   }).filter(elem => elem.director === 'Christopher Nolan')
//   averageRating = (list.reduce((accum, curVal) => accum + parseFloat(curVal.rating), 0)) / list.length
//   return averageRating;
// }
// console.log(getRating(watchList));

//The getRating(watchList) should equal 8.675.





//Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

//Note: Your function should not use any kind of for or while loops or the forEach() function.


// const squareList = arr => {
//   return arr.filter(elem => elem >=0 && Number.isInteger(elem)).map(elem => elem * elem)
// };

// console.log(squareList([-3, 4.8, 5, 3, -3.2]));
// console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])) //should return [16, 1764, 36].
// console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])) //should return [9, 100, 49]



//Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
// function alphabeticalOrder(arr) {
//   return arr.sort((a, b) => {
//     return a === b ? 0 : a < b ? -1: 1;
//   })
// }
// alphabeticalOrder(["a", "d", "c", "a", "z", "g"]) //should return ["a", "a", "c", "d", "g", "z"].
// alphabeticalOrder(["x", "h", "a", "m", "n", "m"]) //should return ["a", "h", "m", "m", "n", "x"].
// alphabeticalOrder(["a", "a", "a", "a", "x", "t"]) //should return ["a", "a", "a", "a", "t", "x"].




//Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
// var globalArray = [5, 6, 3, 2, 9];
// function nonMutatingSort(arr) {
//   return [...arr].sort((a,b) => a-b)
// }

// nonMutatingSort(globalArray); //should return [2, 3, 5, 6, 9].
// nonMutatingSort([1, 30, 4, 21, 100000]) //should return [1, 4, 21, 30, 100000].
// nonMutatingSort([140000, 104, 99]) //should return [99, 104, 140000].





// function splitify(str) {
//   return str.split(/\W/)
// }

// splitify("Hello World,I-am code") //should return ["Hello", "World", "I", "am", "code"].
// splitify("Earth-is-our home") //should return ["Earth", "is", "our", "home"].
// splitify("This.is.a-sentence") //should return ["This", "is", "a", "sentence"].



// function sentensify(str) {
//   // Only change code below this line
//   return str.split(/\W/).join(" ");
//   // Only change code above this line
// }
// console.log(sentensify("May-the-force-be-with-you"));
// sentensify("The.force.is.strong.with.this.one") //should return the string The force is strong with this one.
// sentensify("There,has,been,an,awakening") //should return the string There has been an awakening.




// function urlSlug(title) {
//   return title.split(' ').map(elem => elem.toLowerCase()).filter(elem => elem!='').join('-')
// }

// urlSlug(" Winter Is  Coming") //should return the string winter-is-coming.
// urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") //should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.
// urlSlug("Hold The Door") //should return the string hold-the-door.





// function checkPositive(arr) {
//   return arr.every(curVal => curVal > 0 )
// }
// checkPositive([1, 2, 3, -4, 5]) //should return false.
// checkPositive([1, 2, 3, 4, 5]) //should return true.
// checkPositive([1, -2, 3, -4, 5]) //should return false.



// function checkPositive(arr) {
//   return arr.some(curVal => curVal > 0 )
// }
// checkPositive([1, 2, 3, -4, 5]) //should return false.
// checkPositive([1, 2, 3, 4, 5]) //should return true.
// checkPositive([1, -2, 3, -4, 5]) //should return false.





//Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

// function diffArray(arr1, arr2) {
//   var newArr = [];

//   arr1.forEach(elem => {
//     if(arr2.indexOf(elem) === -1)
//       newArr.push(elem);
//   });
//   arr2.forEach(elem => {
//     if(arr1.indexOf(elem) === -1)
//       newArr.push(elem);
//   });

//   return newArr;
// }

// console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])) //should return ["pink wool"].
// ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] //should return ["diorite", "pink wool"]. //should return [].
// ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] //should return [].
// [1, 2, 3, 5], [1, 2, 3, 4, 5] //should return [4].
// [1, "calf", 3, "piglet"], [1, "calf", 3, 4] //should return ["piglet", 4]
// [], ["snuffleupagus", "cookie monster", "elmo"] //should return ["snuffleupagus", "cookie monster", "elmo"].
// console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"])) //should return [1, "calf", 3, "piglet", 7, "filly"]
// // console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]))
// // console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]))




// function destroyer(arr) {
//   let newArr = Array.from(arguments).sort(function (a,b) {return a - b;})
//   , dubArr = newArr.splice(0,1), Arr = [];

//   for(let i = 0; i < dubArr[0].length; i++){
//     if(newArr.indexOf(dubArr[0][i]) === -1){
//       Arr.push(dubArr[0][i]);
//     }
//   }
// return Arr;
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3) //should return [1, 1].
// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) //should return [1, 5, 1].
// destroyer([3, 5, 1, 2, 2], 2, 3, 5) //should return [1].
// destroyer([2, 3, 2, 3], 2, 3) //should return [].
// destroyer(["tree", "hamburger", 53], "tree", 53) //should return ["hamburger"].
// destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") //should return [12,92,65].







// function whatIsInAName(collection, source) {
//   var srcKeys = Object.keys(source);

//   return collection.filter(obj => {
//     for(var i = 0; i < srcKeys.length; i++){
//       if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]){
//         return false;
//       }
//     }
//     return true;
//   });
// }

// console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })) //should return [{ first: "Tybalt", last: "Capulet" }].
// console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 })) //should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })) //should return [{ "apple": 1, "bat": 2, "cookie": 2 }].
// console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 })) //should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }].
// console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3})) //should return []





// function spinalCase(str) {
//   let s = "";
//   for(let i = 0; i < str.length; i++){
//     if(str[i] == ' ')
//       s += '-'
//     else if(str[i] == str[i].toUpperCase() && /\w/.test(str[i])){
//       if(/\w/.test(str[i]) && i != 0 && (s[s.length - 1] !== '-' && s[s.length - 1] !== '_' )) {
//         s += '-';
//         if(str[i] != '_')s += str[i].toLowerCase();
//       }
//       else{
//         s += str[i].toLowerCase();
//       }
//     }
//     else
//       s += str[i].toLowerCase();
//   }
//   return s;
// }

// console.log(spinalCase("The_Andy_Griffith_Show")) //should return the string the-andy-griffith-show.
// console.log(spinalCase("This Is Spinal Tap")) //should return the string this-is-spinal-tap.
// console.log(spinalCase("thisIsSpinalTap")) //should return the string this-is-spinal-tap.
// console.log(spinalCase("Teletubbies say Eh-oh")) //should return the string teletubbies-say-eh-oh.
// console.log(spinalCase("AllThe-small Things") )//should return the string all-the-small-things.



// function translatePigLatin(str) {
//   let arr = ['a', 'e', 'i', 'o', 'u'];

//   for (const iter of arr) {
//     if(iter === str[0])
//       return str.concat("way")
//   }

//   let next = "", prev = '', check = true;

//   for(let i = 0; i < str.length && check; i++){
//     if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
//       for(let k = i; k < str.length; k++) {
//         next += str[k];
//         check = false;
//       }
//     }
//     else{
//       prev += str[i];
//     }
//   }
//   return next += prev + "ay";
// }

// translatePigLatin("california") //should return the string aliforniacay.
// translatePigLatin("paragraphs") //should return the string aragraphspay.
// translatePigLatin("glove") //should return the string oveglay.
// translatePigLatin("algorithm") //should return the string algorithmway.
// translatePigLatin("eight") //should return the string eightway.
//Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.
//Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.





// function myReplace(str, before, after) {

//   let bf = before.split('').slice(0,1).join('');
//   let af = after.split('').slice(0,1).join('');

//   if(bf == bf.toUpperCase()){
//     af = af.toUpperCase();
//   }
//   else{
//     af = af.toLowerCase();
//   }

//   for(let i = 1; i < after.length; i++){
//     af += after[i];
//   }
//   return str.replace(before, af);
// }

// myReplace("Let us go to the store", "store", "mall") //should return the string Let us go to the mall.
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return the string He is Sitting on the couch.
// myReplace("I think we should look up there", "up", "Down") //should return the string I think we should look down there.
// myReplace("This has a spellngi error", "spellngi", "spelling") //should return the string This has a spelling error.
// myReplace("His name is Tom", "Tom", "john") //should return the string His name is John.
// myReplace("Let us get back to more Coding", "Coding", "algorithms") //should return the string Let us get back to more Algorithms.





// function pairElement(str) {

//   let outer = [];
//   let s = str.split('');

//   s.forEach(elem =>{
//     if(elem === 'A'){
//       outer.push(['A', 'T'])
//     }
//     else if(elem === 'T'){
//       outer.push(['T', 'A'])
//     }
//     else if(elem === 'C'){
//       outer.push(['C', 'G'])
//     }
//     else if(elem === 'G'){
//       outer.push(['G', 'C'])
//     }
//   })
//   return outer;
// }

// pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].





// function fearNotLetter(str) {

//   let s = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//   let sr = str.split('');
//   let idx = s.indexOf(sr[0]);

//   if(idx !== -1){
//     let local = s.slice(idx, idx+sr.length);
//     for(let i = 0; i < local.length; i++){
//       if(sr[i] !== local[i]){
//         return local[i];
//       }
//     }
//   }
// }

// fearNotLetter("abce") //should return the string d.
// fearNotLetter("abcdefghjklmno") //should return the string i.
// fearNotLetter("stvwx") //should return the string u.
// fearNotLetter("bcdf") //should return the string e.
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") //should return undefined.





// function uniteUnique(arr, ...Args) {
//   for(let i = 0; i < Args.length; i++){
//       for(let k = 0; k < Args[i].length; k++){
//         if(!arr.includes(Args[i][k])){
//           arr.push(Args[i][k]);
//         }
//       }
//   }
//   return arr;
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
// uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, 3, 5, 4, 6, 7, 8].




// function convertHTML(str) {

//   ///([&]*)([<]*)([>]*)(["]*)([']*)/g
//   ///[^\w|\s]*/g
//   let reg = /&|<|>|"|'/g
//   let char = str.match(reg);
//   let s = str;

//   for(let i = 0; char !== null && i < char.length; i++){
//     if(char[i] === '&'){
//       s = s.replace('&','&amp;')
//     }
//     else if(char[i] === '<'){
//       s = s.replace('<','&lt;')
//     }
//     else if(char[i] === '>'){
//       s = s.replace('>','&gt;')
//     }
//     else if(char[i] === '\"'){
//       s = s.replace('\"','&quot;')
//     }
//     else if(char[i] === '\''){
//       s = s.replace('\'','&apos;')
//     }
//   }

//   //let s = str.replace(/(&|<|>|"|')/g,...char);

//   // function replacer(match, ...args){
//   // }
//   //let s = str.replace(/(&|<|>|"|')/g,replacer);

//   return s;
// }

// convertHTML("Dolce & Gabbana") //should return the string Dolce &amp; Gabbana.
// convertHTML("Hamburgers < Pizza < Tacos") ///should return the string Hamburgers &lt; Pizza &lt; Tacos.
// convertHTML("Sixty > twelve") //should return the string Sixty &gt; twelve.
// convertHTML('Stuff in "quotation marks"') //should return the string Stuff in &quot;quotation marks&quot;.
// convertHTML("Schindler's List") //should return the string Schindler&apos;s List.
// convertHTML("<>") //should return the string &lt;&gt;.
// convertHTML("abc") //should return the string abc.




// function sumFibs(num) {

// let n = 0;
// let fib = [];

// fib[0] = 0;
// fib[1] = 1;
// for (let i = 2; i <= num && (fib[i - 2] + fib[i - 1] <= num); i++) {
//     fib[i] = fib[i - 2] + fib[i - 1];
// }
// fib.filter(elem => elem % 2 === 1).map(elem => n+=elem)

// return n;
// }

// sumFibs(1) //should return a number.
// sumFibs(1000) //should return 1785.
// sumFibs(4000000) //hould return 4613732.
// sumFibs(4) //should return 5.
// sumFibs(75024) //should return 60696.
// sumFibs(75025) //should return 135721.





// function sumPrimes(num) {
//   let n = 0;
//   let check = true;
//   const isPrime = num => {
//     for(let i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
//   for(let i = 0; check; i++){
//     if(isPrime(i)){
//       if(i > num){
//         check = false;
//       }
//       else{
//         n+=i;
//       }
//     }
//   }
//   return n;
// }

// sumPrimes(10) //should return 17.
// sumPrimes(977) //should return 73156.




// function dropElements(arr, func) {
//   let a= [];
//   arr.forEach(elem => {
//     if(func(elem)){
//       a = arr.splice(arr.indexOf(elem))
//     }
//   });
//   return a;
// }

// dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) //should return [3, 4].
// dropElements([0, 1, 0, 1], function(n) {return n === 1;}) //should return [1, 0, 1].
// dropElements([1, 2, 3], function(n) {return n > 0;}) //should return [1, 2, 3].
// dropElements([1, 2, 3, 4], function(n) {return n > 5;}) //should return [].
// dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) //should return [7, 4].
// dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) //should return [3, 9, 2].




// function steamrollArray(arr) {
//  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? steamrollArray(val) : val), [])
// }

// steamrollArray([[["a"]], [["b"]]]) //should return ["a", "b"].
// steamrollArray([1, [2], [3, [[4]]]]) //should return [1, 2, 3, 4].
// steamrollArray([1, [], [3, [[4]]]]) //should return [1, 3, 4].
// steamrollArray([1, {}, [3, [[4]]]]) //should return [1, {}, 3, 4].




// const binaryAgent = str => str.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join("");

// console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));





// function truthCheck(collection, pre) {
// let check = true;
//   for(let i = 0; i < collection.length && check; i++){
//     if(collection[i].hasOwnProperty(pre)){
//       if(collection[i][pre]){
//         check = true;
//       }
//       else{
//         check = false;
//       }
//     }
//     else{
//       check = false;
//     }
//   }
//   return check;
// }

// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") //should return true.
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex") //should return false.
// truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age") //should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat") //should return false.
// truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat") //should return true.
// truthCheck([{"single": "yes"}], "single") //should return true.
// truthCheck([{"single": ""}, {"single": "double"}], "single") //should return false.
// truthCheck([{"single": "double"}, {"single": undefined}], "single") //should return false.
// truthCheck([{"single": "double"}, {"single": NaN}], "single") //should return false.




// function addTogether(...args) {
//   if(args.length === 1){
//     if(args[0] !== parseInt(args[0], 10))
//        return undefined;
//     return function (x) {
//       if(x !== parseInt(x, 10))
//         return undefined;
//       return args[0] + x;
//     }
//   }
//   else{
//     if(args[0] !== parseInt(args[0], 10) || args[1] !== parseInt(args[1], 10))
//       return undefined;
//     return args[0] + args[1];
//   }
// }

// addTogether(2, 3) //should return 5.
// addTogether(23, 30) //should return 53.
// addTogether(5)(7) //should return 12.
// addTogether("http://bit.ly/IqT6zt") //should return undefined.
// addTogether(2, "3") //should return undefined.
// addTogether(2)([3]) //should return undefined.





// var Person = function(firstAndLast) {
//   // Only change code below this line
//   let name = firstAndLast.split(' ');
//   let firstName = name[0];
//   let lastName = name[1]
//   // Complete the method below and implement the others similarly
//   this.getFirstName = function() {
//     return firstName;
//   }
//   this.getLastName = function() {
//     return lastName;
//   }
//   this.getFullName = function() {
//     return firstName + ' ' + lastName;
//   };
//   this.setFirstName = function(name) {
//     firstName = name;
//   }
//   this.setLastName = function(name) {
//     lastName = name;
//   }
//   this.setFullName = function(name) {
//     let s = name.split(' ');
//     firstName = s[0];
//     lastName = s[1];
//   }
// };

// Object.keys(bob).length //should return 6.
// bob instanceof Person //should return true.
// bob.firstName //should return undefined.
// bob.lastName //should return undefined.
// bob.getFirstName() //should return the string Bob.
// bob.getLastName() //should return the string Ross.
// bob.getFullName() //should return the string Bob Ross.
// bob.getFullName() //should return the string Haskell Ross after bob.setFirstName("Haskell").
// bob.getFullName() //should return the string Haskell Curry after bob.setLastName("Curry").
// bob.getFullName() //should return the string Haskell Curry after bob.setFullName("Haskell Curry").
// bob.getFirstName() //should return the string Haskell after bob.setFullName("Haskell Curry").
// bob.getLastName() //should return the string Curry after bob.setFullName("Haskell Curry").





// function orbitalPeriod(arr) {
//   var GM = 398600.4418;
//   var earthRadius = 6367.4447;
  
//   return arr.map(elem => {
//     return {
//       name: elem.name,
//       orbitalPeriod: Math.round((2 * Math.PI) * Math.sqrt((Math.pow(earthRadius + elem.avgAlt, 3)) / GM))
//     }
//   });
// }

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]) //should return [{name: "sputnik", orbitalPeriod: 86400}].
// console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]))




// function telephoneCheck(str) {
//   let reg = /^\d?\s\d{3}-\d{3}-\d{4}$|^1\s\(\d{3}\)\s\d{3}-\d{4}$|^\d{10}$|^\d{3}-\d{3}-\d{4}$|^\(\d{3}\)\d{3}-\d{4}$|^1\(\d{3}\)\d{3}-\d{4}$|^\d\s\d{3}\s\d{3}\s\d{4}$/g
//   return reg.test(str);
// }

// telephoneCheck("555-555-5555") should return a boolean.
// telephoneCheck("1 555-555-5555") should return true.
// telephoneCheck("1 (555) 555-5555") should return true.
// telephoneCheck("5555555555") should return true.
// telephoneCheck("555-555-5555") should return true.
// telephoneCheck("(555)555-5555") should return true.
// telephoneCheck("1(555)555-5555") should return true.
// telephoneCheck("555-5555") should return false.
// telephoneCheck("5555555") should return false.
// telephoneCheck("1 555)555-5555") should return false.
// telephoneCheck("1 555 555 5555") should return true.
// telephoneCheck("1 456 789 4444") should return true.
// telephoneCheck("123**&!!asdf#") should return false.
// telephoneCheck("55555555") should return false.
// telephoneCheck("(6054756961)") should return false.
// telephoneCheck("2 (757) 622-7382") should return false
// telephoneCheck("0 (757) 622-7382") should return false.
// telephoneCheck("-1 (757) 622-7382") should return false.
// telephoneCheck("2 757 622-7382") should return false.
// telephoneCheck("10 (757) 622-7382") should return false.
// telephoneCheck("27576227382") should return false.
// telephoneCheck("(275)76227382") should return false.
// telephoneCheck("2(757)6227382") should return false.
// telephoneCheck("2(757)622-7382") should return false.
// telephoneCheck("555)-555-5555") should return false.
// telephoneCheck("(555-555-5555") should return false.
// telephoneCheck("(555)5(55?)-5555") should return false.
// telephoneCheck("55 55-55-555-5") should return false.




// function checkCashRegister(price, cash, cid) {

//   let fund = 0.0, change = (cash - price), add = 0, c = cash - price;
//   for(let i = 0; i < cid.length; i++){
//     for(let k = 1; k < cid[i].length; k++){
//       fund += cid[i][k];
//     }
//   }

//   if(fund < change){
//     return {
//       status: "INSUFFICIENT_FUNDS", change: []
//     }
//   }
//   else if(fund === change){
//     return {
//       status: "CLOSED", change: [...cid]
//     }
//   }
//   else{

//     let arr = [];
    
//     for(let i = cid.length - 1; i >= 0; i--){
//         if(cid[i][1] <= change){
//           arr.push(cid[i]);
//           change -= cid[i][1];
//           add += cid[i][1];
//         }
//         else{
//             if(cid[i][0] === "ONE HUNDRED" && (100 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+100 <= change; ch +=100);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "TWENTY" && (20 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+20 <= change; ch +=20);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "TEN" && (10 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+10 <= change; ch +=10);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "FIVE" && (5 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+5 <= change; ch +=5);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "ONE" && (1 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+1 <= change; ch +=1);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "QUARTER" && (0.25 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+0.25 <= change; ch +=0.25);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "DIME" && (0.10 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+0.10 <= change; ch +=0.10);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "NICKEL" && (0.05 < change)){
//               let ch = 0;
//               for(; ch < cid[i][1] && ch+0.05 <= change; ch +=0.05);
//               if(ch){
//                 change = (change - ch);
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//             else if(cid[i][0] === "PENNY" && (0.01 < change)){
//               let ch = 0;
//               change = (change - ch).toFixed(2);
//               for(; ch < cid[i][1] && ch+0.01 <= change; ch +=0.01);
//               if(ch){
//                 arr.push([cid[i][0], ch]);
//                 add += ch;
//               }
//             }
//         }
//     }

//     if(Math.round(add) !== Math.round(c)){
//       return {
//         status: "INSUFFICIENT_FUNDS", change: []
//       }
//     }
//     else{
//       return {
//         status: "OPEN", change: [...arr]
//       }
//     }
//   }
// }

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return an object.
// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) //should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "INSUFFICIENT_FUNDS", change: []}.
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) //should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.



