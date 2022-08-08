// This is practice file.

// FIXME: Only for practice

// console.log("Hello world");

// var a = 10;
// console.log(a);

// let b = 10;
// console.log(b);

// a = "Pratik";
// console.log(a);

// var 1name = "Pratik";  //INvalid
// console.log(1name);

// _2name = "Praftik";
// console.log(_2name);

// var $name = "defd";
// console.log($name);

// var f name = "Oaas";

// let fName = "Pratik";

// fName = "Rasju";

// console.log(fName);

// let fName = "Boisar";

// var lName = "Maru";
// var lName = "Maurya";
// console.log(lName);

// const pi = 3.14;
// pi = 21.4;
// console.log(pi);

// let cartoon = "Doraemon";
// console.log(cartoon[1]);
// console.log(cartoon[cartoon.length-1]);

// let fName = "Pratik";
// console.log(fName.trim());
// console.log(fName.toUpperCase);
// console.log(fName.toLowerCase());

// Slice method
// let cartoon = "Doraemon";
// let word = cartoon.slice(5);
// console.log(word);

// let fName = "Pratik";
// let age = 20;
// let bool = true;
// let float = 22.33;

// console.log(typeof fName);
// console.log(typeof age);
// console.log(typeof bool);
// console.log(typeof float);

// String conversion
// let num  = "20";
// num = +num;
// console.log(typeof num);

// let strings = 23;
// strings  = strings+"";
// console.log(typeof strings);

// Concat
// let fName = "Pratik";
// let lName = "Maru";
// let fullName = fName + lName;

// console.log(fullName);

// console.log(`Hii my name first name is ${fName} and my last name is ${lName} `);

// let fName = null;
// console.log(fName);

// const fNmwe;
// console.log(fNmwe);

// let names = null;
// console.log(typeof names);

// console.log(Number.MAX_SAFE_INTEGER);

// let num = 10n;
// let num2 =  BigInt(9007199254740991);

// let num3 = num + num2;
// console.log(num3);

// let num1 = "5";
// let num2 = 5;
// console.log(num1 == num2);
// console.log(num1 === num2);

// let num2 = 6;
// let num1 = 6;
// console.log(num1 != num2);
// console.log(num1 !== num2);

// truthy and falsy values

// let fName = false;
// let lName = 0;
// let zero = "";
// let fe = null;
// let zion = undefined;

// if(fName){
//     console.log(fName);
// }
// else{
//     console.log("Usjfdgfdsjm");
// }

// if(false){
//     console.log("Hello");
// }
// else{
//     console.log("bye");
// }

// let num = 1;
// let ans = num%2==0 ? "Divisible by 2" : "Not divisible by 2";
// console.log(ans);

// let fName = "Praik";
// let age = 10;

// if(fName[0] === 'P' && age === 20){
//     console.log("Hurray");
// }
// else{
//     console.log("Sorry");
// }

// let num = 100;
// if(num < 50){
//     if(num === 20){
//         console.log("Num is 20");
//     }
//     else{
//         console.log("Num is less than 50");
//     }
// }
// else{
//     console.log('Bye Bye');
// }

// let num = 0;
// if(num > 20){
//     console.log(">20");
// }
// else if(num > 10){
//     console.log(">10");
// }
// else if(num > 5){
//     console.log(">5");
// }
// else{
//     console.log("Chal haat");
// }

// let  num = 1000;

// switch(num){
//     case 10:
//         console.log("10");
//         break;
//     case 20:
//         console.log("20");
//         break;
//     default:
//         console.log("Bye bye");
// }

// let num = 10;

// while(num !== 0){
//     console.log(num);
//     num--;
// }

// let num = 20;

// do{
//     console.log(num);
//     num--;
// }while(num < 10);

// let num = 1;
// for(let i=0;i<10;i++){
//     // console.log(i);
//     console.log(num);
// }

// let num = 4;
// for(let i=0;i<10;i++){
//     if(i===num){
//         console.log("Sorry im contunue");
//         continue;
//     }
//     console.log(i);
// }

// Arrays.

// let arr = [1,2,3,4,5];

// console.log(arr);
// console.log(arr[0]);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// let mixedArr  = [1,"Pratik",0.22,true,null,undefined];

// for(let i=0;i<mixedArr.length;i++){
//     console.log(mixedArr[i]);
// }

// let arr = [1,2,3];
// console.log(typeof arr);
// console.log(Array.isArray(arr));

// const obj = {};
// console.log(typeof obj);
// console.log(Array.isArray(obj));

// Array methods
// let arr1 = [1,23,4,56,6,323];
// arr1.push(100000);
// arr1.pop();
// console.log(arr1);
// arr1.shift();
// console.log(arr1);
// arr1.unshift(12);
// console.log(arr1)

// arr1.reverse();
// arr1.sort();
// console.log(arr1);

// let num1 = 10;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1 = 1000;
// console.log(num1);
// console.log(num2);

// Reference data typees

// const arr1 = [1,2,3,4,5];
// const arr2 = arr1;

// console.log(arr1);
// console.log(arr2);

// arr1[1]  = 200;
// console.log(arr1);
// console.log(arr2);

// Array clone

// const arr1 = [1,2,3,4,5];
// let arr2 = arr1.slice(0);
// // console.log(arr2);
// arr2 = arr2.concat(arr1);
// arr2.sort();
// console.log(arr2);

// For in loop
// let arr = [1,2,3];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// const arr2 = [1,2,3];
// arr2.push(100);
// console.log(arr2);
// let arr1 = [1,2];
// arr2 = arr1;
// console.log(arr2);

// let arr = [1,2,3,4,5];
// let i=0;
// while(i !== arr.length ){
//     console.log(arr[arr.length-i-1]);
//     i++;
// }

// for of loop
// let arr1 = [1,2,3,4];

// for(let arr of arr1){
//     console.log(arr);
// }

// for in loop
// let arr = [1,2,3,4];

// for(let i in arr){
//     // console.log(i)
//     console.log(arr[i]);
// }

// Array destructuring

// const fruits = ["Apple","Mango","Grapes","Peach"];

// let [fruit1,,,fruit2] = fruits;
// console.log(fruit1);
// console.log(fruit2);

// let [fruits1,fruits2,...remainingFruits] = fruits;
// console.log(fruits1);
// console.log(fruits2);
// console.log(remainingFruits);

// Objects reference data type

// const obj =
// {
//     id : 01,
//     name : "Pa",
//     address : "Mira Road"
// }

// console.log(obj);
// console.log(obj.name);
// console.log(obj.address);

// obj.salary = 27000;
// console.log(obj);

// console.log(obj["id"]);
// console.log(obj["name"]);
// let salary = "Salary";
// obj[salary] = 27000;
// console.log(obj);

// for(let o in obj){
//     console.log(obj[o]);
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// for(let o of Object.keys(obj)){
//     console.log(obj[o]);
// }

// const key1 = "Obj1";
// const key2 = "Obj2";

// const obj1 = {
//     [key1] : "Kads",
//     [key2] : "Kadserty"
// }
// console.log(obj1);

// Spread operator
// let arr1 = [1,2,3,4];
// let arr2 = [..."abcdefghi"];
// console.log(arr2);

// const obj1 = {
//     name : "Pratik",
//     age : 20,
//     add : "Mumbai"
// }

// const obj2 = {
//     hobby : "Guitar",
//     goals : "Visit France"
// }

// const obj3 = {...obj1,...obj2};

// console.log(obj3);
// console.log(obj3.goals);

// let {hobby:Best,goals} = obj2;

// console.log(Best);
// console.log(goals);

// let arr = [
//     {
//         id : 01,
//         name : "Pratik",
//         age : 20
//     },
//     {
//         id : 02,
//         name : "Raju",
//         age : 29
//     },
//     {
//         id : 03,
//         name : "Shyam",
//         age : 27
//     }
// ];

// console.log(arr[0].name);

// const arr1 = [];

// for(let i=0;i<arr.length;i++){
//     // console.log(arr[i].name);
//     arr1.push(arr[i].name);
// }

// console.log(arr1);

// const [{id},,user2] = arr;
// console.log(id);
// console.log(user2);

// Functions
// function sing(){
//     console.log("Happy birthday to you....");
// }

// sing();
// sing();
// sing();
// sing();

// function add(a,b){
//     return a+b;
// }

// console.log(add(10,20));

// function isEven(a){
//     return a%2===0;
// }
// console.log(isEven(15));

// Function expression
// let func = function(a){
//     console.log(a)
//     console.log("Hello guys");
// }
// func(10);

// var myFn = (a=20,b=10) => {
//     return a+b;
// }
// console.log(myFn());

// Arrow function in one line.
// let myFunc = a =>  a*a;
// console.log(myFunc(2));

// const findIdx = (arr,target) => {
//         for(let i=0;i<arr.length;i++){
//             if(arr[i] === target){
//                 return i;
//             }
//         }
//         return -1;
// }
// let arrs = [12,2,132,33,22,44,55,66,44,322,1];
// console.log(findIdx(arrs,13));

// Hoisting

// // Allowed.
// console.log(myFunc());
// // Normal function declaration!
// function myFunc() {
//     var num = 10;
//     return 1;
// }

// Not allowed
// Function expression

// func();
// let func = function(){
//     console.log("Inside func");
// }

// Arrow Function
// func2();
// let func2 = () => {
//     console.log("Im in func2");
// }

// Func insinde func

// function myFunc1(){
//     function myFunc2(){
//         console.log("im inside func 2");
//     }
//     return myFunc2;
// }
// const storeFunc = myFunc1();
// storeFunc();

// const func1 = () => {
//     const func2 = () => {
//         console.log("Im in Func 2");
//     }

//     const add = (a,b) => {
//         console.log(a+b);
//     }

//     func2();
//     add(3,6);
//     console.log("Im in func1");
// }

// func1();
// func2();

// Lexical scope   Means globAal scope and local scope vala concept ata hai yaha.
// var a = 5;
// function add(){
//     // var a = 10;
//     function printA(){
//         // a = 20;
//         console.log(a);
//     }
//     printA();
// }
// add();

// Block scope vs function scope

// {
//     var a = 10;
// }
// console.log(a);

// {
//     let b = 20;
// }
// // console.log(b);

// {
//     const c = 120;
// }
// console.log(c);

// function myApp(){
//     if(true){
//         let fName = "Pratik";
//         var lName = "Maru";
//     }
//     // console.log(fName);
//     console.log(lName);
// }
// console.log(lName);
// myApp();

// function multiply(...arr){
//     let ans = 1;
//     for(let i=0;i<arr.length;i++){
//         ans *= arr[i];
//     }
//     return ans;
// }

// console.log(multiply(1,2,3,4,5,6));

// function printDetails({name,age}){
//     console.log(name);
//     console.log(age);
// }

// const details = {
//     name : "Pratik",
//     age : 22,
//     location : "Mira Road"
// }

// printDetails(details);

// Callback function

// let hello = (callb) => {
//     callb();
// };

// let callb = () => {
//     console.log("Hii Im callback function. ");
// }

// hello(callb);

// Function returning function

// let returnFn = () => {
//     console.log("Hey Im in return fn block!");
// }

// let callfn = () => {
//     console.log('Hey Im in call Fn block');
//     return returnFn;
// }

// let storedFn = callfn();
// storedFn();

// function hello(){
//     console.log("Hello");
//     return function(){
//         console.log("Bye");
//     }
// }

// let a = hello();
// console.log(a);
// a();

// Array methods
// let numbers = [1,2,3,4,5,6];

// numbers.forEach(element => {
//     console.log(element*element);
// })

// const data = [
//     {pid:1,pName:"Sofa",price:12000},
//     {pid:2,pName:"Bed",price:1230},
//     {pid:3,pName:"Table",price:52000},
//     {pid:4,pName:"Frame",price:22000},
// ]

// data.forEach(element=>{
//     console.log(element.pName);
// })

// for(let d of data){
//     console.log(d.pName);
// }

// let num = [1,2,3,4,5];

// num.forEach(function(ele,idx){
//     console.log(ele,idx);
// })

// Map method Most important method in JavaScript.
// let numbers = [2,1,4,3,6,4,8];

// const resArr = numbers.map((element,idx) => {
//     return `At index: ${idx} value is: ${element*element}`;
// });
// console.log(resArr);

// Real world example
// let details = [
//     {uId:01,uName:"Baburoa",uSalary:12000},
//     {uId:02,uName:"Raju",uSalary:11000},
//     {uId:03,uName:"Shyam",uSalary:15000},
// ]

// console.log(details);

// const salary = details.map( element => {
//     return element.uSalary;
// })

// console.log(salary);

// Filter method (Its should return boolean values)

// let numbers = [12,12,22,114,43,2,2,1];

// const arr = numbers.filter(element=>{
//     return element%2 === 0;
// });
// console.log(arr);

// Reduce method of an array
// let numbers = [12,2,42,44,3,65,76,33,99,72];

// let ans = numbers.reduce((acc,currVal) => {
//     return acc + currVal;
// });

// console.log(ans);

// Sort methods.

// let numbers = [1,5,3,1,7,8,4,2,4,7,2321,121,23,321,312,1232,1321,221,321,32,6];
// // numbers.sort();
// // console.log(numbers);

// numbers.sort( (a,b) => {
//     return b-a;
// })

// console.log(numbers);

// const productDetails = [
//     {pId:1,pName:"Phone",price:12000},
//     {pId:2,pName:"Charger",price:2000},
//     {pId:3,pName:"Laptop",price:52000},
//     {pId:4,pName:"TV",price:32000},
// ];

// productDetails.sort((a,b)=>{
//     return b.price-a.price;
// })

// console.log(productDetails);

// const sorted = productDetails.slice(0).sort((a,b)=>{
//     return a.price - b.price;
// })

// console.log(sorted);
// console.log(productDetails);

// Find Method

// const myArr = ["Doggy","cat","Bhalooo"];

// const returned = myArr.find((a)=>{
//     // console.log(a);
//     if(a.length === 3){
//         return a;
//     }
// })

// console.log(returned);

// const prod = [
//     {pId:01,pName:"Phone",price:12000},
//     {pId:02,pName:"SmartWatch",price:14900},
//     {pId:03,pName:"NeckBand",price:2000},
// ]

// const goted = prod.find( (e) => {
//     if(e.price < 15000){
//         return e;
//     }
// });
// console.log(goted);

// Every method.

// const numbers = [2,4,6];

// const res = numbers.every((ele)=>{
//     return ele%2 === 0;
// });
// console.log(res);

// const prod = [
//     {pId:01,pName:"Phone",price:12000},
//     {pId:02,pName:"SmartWatch",price:14900},
//     {pId:03,pName:"NeckBand",price:2000},
// ]

// const res = prod.every((ele)=>{
//     return ele.price<10000;
// });
// console.log(res);

// Some methods.

// let num = [1,3,5,7];

// const bool = num.some((ele)=>{
//     return ele%2===0;
// });
// console.log(bool);

// const prod = [
//     {pId:01,pName:"Phone",price:12000},
//     {pId:02,pName:"SmartWatch",price:14900},
//     {pId:03,pName:"NeckBand",price:2000},
// ]

// const ans = prod.some((ele)=>{
//     return ele.price<150;
// });
// console.log(ans);

// const arr = new Array(10).fill(-1);
// console.log(arr);

// arr.fill(2,2,5);
// console.log(arr);

// let arr = [10,20,30,40,50,60];
// const del = arr.splice(2,2,100);
// arr.splice(2,0,100);
// console.log(arr);
// console.log(del);

// arr.splice(2,1,100);
// console.log(arr);

// const mySet = new Set();
// mySet.add(1);
// mySet.add(2);
// mySet.add(3);
// mySet.add(4);
// mySet.add(1);
// console.log(mySet);

// console.log(mySet[0]);
// mySet.delete(3);
// console.log(mySet);

// console.log(mySet.length());
// let i=0;
// for(let s of mySet){
//     i++;
// }
// console.log(i);

// const map = new Map([["School","Hello"],["age",24]]);

// map.set(1,"One");
// map.set([1,2,3,4,5],"Array");
// map.set(true,"Boolean");
// console.log(map);
// console.log(map.get(1));

// for(let m of map.keys()){
//     console.log(m);
// }

// for(let m of map.values()){
//     console.log(m);
// }

// console.log(map);

// Fo in loop nhi laga sakte not possible at all.
// for(let m in map){
//     console.log(m);
// }

// for(let m of map){
//     console.log(typeof m);
//     console.log(Array.isArray(m));
// }

// // So this is giving array so now we can also destructure it.

// for(let [key,value] of map){
//     console.log(key,value);
// }

// const person = {
//     fName : "Pratik",
//     age : 20
// }

// const addInfo = new Map();
// addInfo.set(person,{location:"Mumbai",state:"Maharashtra",pincode:401107});
// console.log(addInfo.get(person).location);

// const product = {
//     pId : 012,
//     pName : "Furniture"
// }

// const addProdInfo = new Map();

// addProdInfo.set(product,{price:4000,prodCol:"ReddishBrown"});

// console.log(addProdInfo);
// console.log(addProdInfo.get(product).prodCol);

// Cloning object

// let arr1 = [1,2,3,4,5];
// let arr2 = Object.assign([],arr1);
// console.log(arr1);
// console.log(arr2);

// arr1[2] = 100;
// console.log(arr1);
// console.log(arr2);

// OptionalChaining
// ?.
// const details = {
//     fName : "Pratik",
//     age : 20,
//     address : {houseNo:200}
// }

// console.log(details.fName);
// console.log(details?.address?.houseNo);

// Methods :- Methods are function inside an object.

// function info(){
//     console.log(`first name is ${this.fName} and age is ${this.age}`);
// }

// const person1 = {
//     fName : "Pratik",
//     age : 20,
//     display : info,
// };
// person1.display();

// console.log(window);
// console.log(this);

// ______________________________________________

// Doing practice once again. 😉

// console.log("Hello world");

// var a = 10;
// console.log(a);

// var fName = "Pratik Maru";
// console.log(fName);

// fName = "Rohan Maurya";
// console.log(fName);

// var fName = "Raju Halkat";
// let fName = "Babu rao";
// console.log(fName);

// Naming rules.
// var 1Name = "Pratik";
// console.log(1Name);

// var _1name = "Pratik";
// console.log(_1name);

// var $name = "Raju";
// console.log($name);

// var first name = "Ps";
// console.log(first name);

// Let keyword.

// const pi = 3.14;
// console.log(pi);
// const val ;
// console.log(val);

// String Indexing.
// let fName = "Doraemon";
// console.log(fName[0]);
// console.log(fName.length);
// console.log(fName[fName.length-1]);

// let fullName = "Joshuan Brijlani";
// console.log(fName.trim());
// console.log(fName.toUpperCase());
// console.log(fName);
// let [fName,lName] = fullName.split(" ");
// console.log(fName);
// console.log(lName);

// let fName = fullName.slice(0,7);
// console.log(fName);

// for(let i=0;i<fName.length;i++){
//     if(fName[i] === ' '){
//         console.log("sfrgthyjghmbnvfrtrhyf");
//     }
// }

// let ans = fullName.slice(8);
// console.log(ans);

// let fName = "Pratik Maru";
// let age = "20a";
// let flag = true;

// age = String(age);
// age = Number(age);
// console.log(typeof age);
// console.log(age);

// console.log(typeof fName);
// console.log(typeof age);
// console.log(typeof flag);
//  let arr = [1,3,45,6,1];
//  console.log(typeof arr);

// Template string
// let fName = "Pratik";
// let age = 20;
// console.log(`My name is ${fName} and my age is ${age}`);

// let fName = ;
// console.log(fName);

// == vs ===
// let num1 = 5;
// let num2 = "10";
// console.log(num1 != num2);
// console.log(num1 !== num2);

// truthy falsy values.

// let fName = "";
// if(fName){
//     console.log(fName);
// }
// else{
//     console.log("Not exisits");
// }

// let age = 2;
// let ans = age>=18 ? "allowed" : "Not allowed";
// console.log(ans);

// AND / OR
// let fName = "Aatik";
// let age = 2;

// if(fName[0] === 'P' || age >= 18){
//     console.log("Valid");
// }
// else{
//     console.log("Not valid 🎶");
// }

// let age = 130;
// if(age > 20 && age < 50){
//     if(age < 10){
//         console.log("Not allowed");
//     }
//     else{
//         console.log("allowed");
//     }
// }
// else{
//     console.log("No problem");
// }

// let temp = -30;

// if(temp < 10){
//     console.log("Very very cold");
// }
// else if(temp < 20){
//     console.log("Very cold");
// }
// else if(temp < 30){
//     console.log("hot");
// }
// else{
//     console.log("Very cold");
// }

// let num = 3;

// switch(num){
//     case 0:
//         console.log("Monday");
//         break;
//     case 1:
//         console.log("Tueday");
//         break;
//     case 2:
//         console.log("Bhasad");
//         break;
//     case 3:
//         console.log("Chal bye day");
//         break;
//     default:
//         console.log("Wrong Input");
//         break;
// }

// While loop
// let num = 10;
// while(num !== 0){
//     console.log(num);
//     num--;
// }

// let num = 10;
// for(let i=0;i<num;i++){
//     console.log(i,num);
// }

// let num = 10;
// for(let i=num;i>0;i--){
//     if(i%2 === 0){
//         continue;
//     }
//     else if(i === 3){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }

// let num = 10;
// do{
//     console.log(num);
//     num++;
// }while(num < 5);

// console.log(num);

// Reference data type.
// Array
// let mixedArr = [1,2,3,4,true,"Hello"];
// let dupArr = mixedArr;
// console.log(typeof mixedArr);
// console.log(Array.isArray(mixedArr));

// const obj = {};
// console.log(typeof obj);
// console.log(Array.isArray(obj));

// mixedArr.push([1,2,3,4,5]);
// mixedArr.pop();

// mixedArr.unshift(1000);
// console.log(mixedArr);

// dupArr[0] = "Hello";
// console.log(mixedArr);

// How to clone an array.
// let arr = mixedArr.slice(0);
// console.log(arr);
// arr[0] = "10000";
// console.log(arr);
// console.log(mixedArr);

// Array methods .

// let arr = [1,2,3,4,5,6,7,8];

// arr.push(100);
// console.log(arr);

// const poped = arr.pop();
// console.log(poped);

// arr.reverse();
// console.log(arr);

// let arr1 = [1,2,3,4];
// let arr2 = [].concat(arr1);
// console.log(arr2);

// console.log(addressOf(arr2));

// for loop

// let arr = ["vale1","vale2","vale3"];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// const arr = [1,2,3,4,5];
// arr[0] = 100;
// console.log(arr);
// const arr2 = [1,2,3,4];
// arr = arr2;
// console.log(arr);

// let arr = [17,82,839,94,5,6];

// for(let i of arr){
//     console.log(i);
// }

// for(let i in arr){
//     console.log(arr[i]);
// }

// const myArr = [1,2,3,4,5];
// const [val1,val2,...res] = myArr;
// console.log(val1);
// console.log(val2);
// console.log(res);

// const obj = {
//     fName : "Pratik",
//     lName : "Maru",
//     age : 20,
//     "address real" : "asfdghfbvsdaf",
// }

// console.log(obj);
// console.log(obj.fName);
// console.log(obj["lName"]);
// console.log(obj["address real"]);
// obj.price = 13000;
// console.log(obj);

// const person = {
//     pName : "Pratik",
//     age : 22,
//     number : 1234456789,
//     address : "Mumbai"
// }

// for(let key in person){
//     console.log(person[key]);
// }

// for(let i of Object.keys(person)){
//     // console.log(person[i]);
//     // console.log(i);
// }

// const key1 = "objectkey1";
// const key2 = "objectkey2";

// const value1 = "myValue1";
// const value2 = "myValue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2,
// }

// console.log(obj);

// const arr = [1,2,3,4,5,6,7];
// const arr2 = [100,200,...arr];
// console.log(arr2);

// Object spread operator.

// const obj1 = {
//     fName : "pratik",
// }

// const obj2 = {
//     age : 22,
// }

// const obj3 = {...obj1,...obj2};
// console.log(obj3);

// const obj01 = {..."abc"};
// console.log(obj01);

// const myObj1 = {...["item1","item2"]};
// console.log(myObj1);

// Object destructuring

// const obj = {
//     names : "Pratik",
//     age : 22,
//     address : "MiraRD",
//     price : 12000
// }

// const {names,age,...res} = obj;
// console.log(names);
// console.log(age);
// console.log(res);

// const user = [{
//     userId:01,
//     fName:"Pratik",
//     gender:"male"
// },{
//     userId:02,
//     fName:"Mohit",
//     gender:"male"
// },{
//     userId:03,
//     fName:"Vidhi",
//     gender:"female"
// }];

// console.log(user);

// console.log(user[2].gender);

// for(let i of user){
//     console.log(i.fName);
// }

// Nested Destructuring.

// const user = [{
//     userId:01,
//     fName:"Pratik",
//     gender:"male"
// },{
//     userId:02,
//     fName:"Mohit",
//     gender:"male"
// },{
//     userId:03,
//     fName:"Vidhi",
//     gender:"female"
// }];

// const [{fName},user3] = user;
// console.log(fName);
// console.log(user3);

// Functions.
// function sing(){
//     console.log("Hello guys.....");
// }
// sing();
// sing();
// sing();

// function add(a,b){
//     return a+b;
// }
// const ans = add(10,30);
// console.log(ans);

// let arr = [12,21,33,55,22,56,7];

// function findIdx(arr,target){
//     for(let i=0;i<arr.length;i++){
//     if(arr[i] === target){
//         return i;
//     }
// }
// return -1;
// }

// const ans = findIdx(arr,100);
// console.log(ans);

// const greet = function(){
//     console.log("Hello guys.");
// }
// greet();

// Arrow function .

// const add = (a,b) => {
//     return a+b;
// }
// console.log(add(10,20));

// Hoisting  (function calling)

// hello();

// function hello(){
//     console.log("Hello");
// }

// const hello = function(){
//     console.log("Hello");
// }

// const hello = () => {
//     console.log("Hwhw ");
// }

// console.log(name);
// var name = "Hello";
// let name = "Hello";
// const name = "hello";

// FuncInsideFunc

// function hello(a,b){
//     const greet = () => {
//         console.log("Hi im greeting you");
//     }
//     greet();

//     let add = (a,b) => {
//         return a+b;
//     }

//     let ans = add();
//     return ans;
// }

// console.log(hello(100,300));
// add(10,20);   // Not allowed.

// Lexicle scope.
// function myFunc1(){
//     console.log("I'm inside myFunc1");
//     function myFunc2(){
//         let a = 12;
//         var b = 13;
//         console.log("Im inside myFunc2");
//         console.log(a);
//     }
//     // console.log(a);
//     // console.log(b);
//     myFunc2();
// }
// myFunc1();

// Blockscope
// {
//     var a = 12;
//     let b = 10;
//     const c = 8;
// }

// console.log(a);
// console.log(b);
// console.log(c);

// let a = true;

// function func1(){
//     if(a){
//         var as = 10;
//         let b = 20;
//         const c = 30;
//     }
//     console.log(as);
// }
// func1();
// console.log(as);

// Default parameters
// function add(a=10,b=20){
//     console.log(a+b);
// }

// add(20,300);
// add()// Here it will take default parameter.

// Rest parameters.

// // Unlimited output.
// const addAll = (...input) => {
//     let ans = 0;
//     for(let i=0;i<input.length;i++){
//         ans += input[i];
//     }
//     return ans;
// }
// console.log(addAll(1,2,3,4,5,6,7,8,9,10));

// Parameters destructuring.
// const func1 = ({fName:firstname,age:ages}) => {
// // const func1 = (o) => {
//     // console.log(`first name is ${o.fName} and age is ${o.age}`);
//     // console.log(firstname,ages);
// }

// const obj = {
//     fName : "Pratik",
//     age : 20,
// }
// func1(obj);

// Callback functions

// func = () => {
//     console.log("Im callback Function.");
// }

// function myFunc(func){
//     console.log("Hello im in myFunc");
//     func();
//     // console.log(func);
// };

// myFunc(func);

// function fn(){

//     return function(){
//         console.log("hehehe");
//     };
// }

// const resfunc = fn();
// resfunc();

// for-each
// let arr = [1,2,3,4,5,6,7,8];

// const res = arr.forEach(ele => {
//     console.log(ele);
// });

// console.log(res);

// let cars = ["mitshubishi","audi","BMW","Rolls royce","Skoda","Jaguar","hyundai","Kia","chevolate"];

// cars.forEach(ele => {
//     console.log(ele);
// });

// cars.forEach(function(ele){
//     console.log( ele + " car" );
// });
// console.log(cars);

// for(let e of cars){
//     console.log(e);
// }

// let i = 0;
// const resArr = cars.map((ele) => {
//     return ele + " cars" + " " + ++i;
// });

// console.log(resArr);

// let cars = ["mitshubishi","audi","BMW","Rolls royce","Skoda","Jaguar","hyundai","Kia","chevolate"];

// Anonymous function
// They are the function which does not have name

// cars.forEach(function(ele,index){
//     console.log(ele,++index);
// });

// const users = [
//     {fName:"Pratik",age:20},
//     {fName:"Harshit",age:22},
//     {fName:"Raju",age:24},
//     {fName:"Baburao",age:29},
// ]

// const res = users.map((ele)=>{
//     return ele.fName;
// });
// console.log(res);

// Filter method.
// const filteredArr = users.filter(ele => {
//     return ele.age%2 === 0;
// })
// console.log(filteredArr);

// const users = [
//     {fName:"Pratik",age:20},
//     {fName:"Harshit",age:22},
//     {fName:"Raju",age:24},
//     {fName:"Baburao",age:29},
// ]

// let ans = users.reduce((acc,currVal) => {
//     return acc + currVal.age;
// },0);

// console.log(ans);

// Sort method.
// let arr = [612,93,22,45,731,24];

// arr.sort();
// // console.log(arr);
// arr.sort((a,b)=>{
//     // return a-b;
//     // return b-a;
// });
// console.log(arr);

// const productDetails = [
//     {pId:1,pName:"Phone",price:12000},
//     {pId:2,pName:"Charger",price:2000},
//     {pId:3,pName:"Laptop",price:52000},
//     {pId:4,pName:"TV",price:32000},
// ];

// productDetails.sort((a,b)=>{
//     return a.price-b.price;
// })

// console.log(productDetails);

// Find method.

// let arr = [1,2,3,2,1,9];

// const ans = arr.find((ele,idx)=>{
//     if(pe === 9){
//         return idx;
//     }
// });
// console.log(ans);

// const prod = [
//     {pId:01,pName:"Phone",price:12000},
//     {pId:02,pName:"SmartWatch",price:14900},
//     {pId:03,pName:"NeckBand",price:2000},
// ]

// const ans = prod.find((ele)=>{
//     if(ele.price < 3000){
//         return ele;
//     }
// })
// console.log(ans);

// let arr = [233,1221,344,3111];
// const ans = arr.some((ele)=>{
//     return ele < 25;
// });

// console.log(ans);

// const prod = [
//     {pId:01,pName:"Phone",price:12000},
//     {pId:02,pName:"SmartWatch",price:14900},
//     {pId:03,pName:"NeckBand",price:2000},
// ]

// One line problem solving
// const ans = prod.every( ele => ele.price >=10000);
// const ans = prod.some( ele => ele.price >=10000);
// console.log(ans);

// const arr = new Array(10).fill(-1);
// console.log(arr);

// Fill method

// const arr = new Array(10).fill(10);
// console.log(arr);

// const arr = new Array(10).fill(-1);
// console.log(arr);
// arr.fill(0,3,5);
// 0 === value
// 3 === starting pos
// 5 === ending pos (excluded)
// console.log(arr);

// Splice method.
// const arr = [1,2,3,4,5,6];

// arr.splice(1,3);
// 1 === Starting pos
// 3 === total number of elements you want to del.
// console.log(arr);

// let arr = [1,2,3,4,5];
// const res = arr.splice(1,1,2);
// console.log(res);
// arr.splice(1,2);
// console.log(arr);

// Iterables.

// // Sets
// const set = new Set([0]);
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);

// // For loop
// for(let i of set){
//     console.log(i);
// }

// console.log(set);
// set.clear();
// console.log(set);
// set.delete(1);
// console.log(set);

// const set = new Set([0]);
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(4);

// console.log(set[2]);

// const set1 = new Set("abc") ;
// console.log(set1);

// Map objects.

// const obj = new Map();

// console.log(obj);

// obj.address = "asdfg";
// obj[true] = "vbolena";

// obj.set("name","Pratik");
// obj.set(true,"Boolean val");
// obj.set('address',"Paris France");
// console.log(obj);
// console.log(obj.get(true));

// for(let [key,val] of obj){
//     // console.log(typeof o);
//     // console.log(Array.isArray(o));
//     console.log(key,val);
// }

// const personDet = {
//     fName : "Pratik",
//     age : 20,
// }

// const moreInfo = new Map();
// moreInfo.set(personDet,27000);

// console.log(personDet);
// console.log(moreInfo.get(personDet));

// Clone using Object.assign
// Now we'll try to create an object using Object.assign

// const o = {
//     fName : "Pratik"
// }

// const obj = Object.assign({},o);
// console.log(obj);

// o.fName = 'Raju';
// console.log(obj)
// console.log(o);

// // Optional chaining

// const obj = {
//     fName : "Pratik",
//     // address : {houseNo:123},
// }

// console.log(obj);
// console.log(obj.address.houseNo);
// console.log(obj.address); // ouput : undefined
// console.log(obj?.address?.houseNo);

// Methods.
// const person = {
//     fName : "Pratik",
//     lName : "Maru",
//     about(){
//         return `My name is ${this.fName} and my last name is ${this.lName}`;
//     }
// }
// console.log(person.about());

// const personInfo = function(){
//     return `${this.fName} | ${this.lName}`;
// }

// const person = {
//         fName : "Pratik",
//         lName : "Maru",
//         about : personInfo,
// }
// console.log(person.about());

// Window object / this

// call Apply bind

// call method

// const user1 = {
//     fname : "Raju halkat",
//     // hobby : ["Guitar","Sitar"],
//     hello(){
//         console.log(`${this.fname}`);
//     },
//     hobbies(hobby){
//         console.log(hobby);
//     }
// }

// const user2 = {
//     fname : "Pratik",
//     hobby : "Watching Trash on OTT platform",
// }

// const ans = obj.hello.bind();
// console.log(ans)
// user1.hello.call(user2);
// user1.hobbies.call(user2,'Gitar');

// const myFunc = user2.about();
// console.log(myFunc);

// Function creating object.

// const userMethods = {
//     display : function(){
//         return `${this.fName} , ${this.lName}`;
//     }
// }

// const createUser = (fName,lName) => {
//     const obj = {};
//     obj.fName = fName;
//     obj.lName = lName;
//     obj.display = userMethods.display;

//     return obj;
// }

// let user1 = createUser("Pratik","Maru");
// // console.log(user1);
// console.log(user1.display());

// Solving Problems in Function creating Objects.

// const userMethods = {
//     display : function(){
//         return `${this.fName} , ${this.lName}`;
//     }
// }

// const createUser = (fName,lName) => {
//     const obj = Object.create(userMethods);
//     obj.fName = fName;
//     obj.lName = lName;
//     return obj;
// }

// let user1 = createUser("Pratik","Maru");
// // console.log(user1);
// console.log(user1.display());

// const obj1 = {
//     key1 : "value1",
// }

// const obj2 = Object.create(obj1);
// console.log(obj2.key1);

// console.log(obj2);

// 3 level checking
// const obj1 = {
//     key1 : "value1",
// }
// const obj2 = Object.create(obj1);
// const obj3 = Object.create(obj2);
// console.log(obj3.key1);

// console.log(obj2.__proto__);

// Function k pass hi sirf prototype hota hai

// function hello(){
//     console.log("hello");
// }

// hello.prototype.age = 18;
// hello.prototype.add = function(){
//     return 10;
// };

// console.log(hello.prototype.add());

// if(hello.prototype){
//     console.log("first");
// }
// else{
//     console.log("sdftghnb");
// }

// function createUser(fName,lName){
//     const user = Object.create(createUser.prototype);
//     user.fName = fName;
//     user.lName = lName;
//     return user;
// }

// createUser.prototype.display = function(){
//     console.log("Hello ");
// }

// const user1 = createUser("Pratik","Maru");
// // console.log(user1);
// user1.display();

// new keyword.

// function createUser(fName,lName){
//     this.fName = fName;
//     this.lName = lName;
// }

// createUser.prototype.display = function(){
//     return `First name is ${this.fName} and last name is ${this.lName}`;
// }

// const user1 = new createUser("Pratik","Maru");

// console.log(user1.display());

// let arr = new Array(1,2,3,4,5);
// console.log(typeof arr);

// class user{
//     constructor(fName,lName){
//         this.fName = fName;
//         this.lName = lName;
//     };

//     display(){
//         console.log(`${this.fName} , ${this.lName}`);
//     }
// }

// const user1 = new user("Pratik","Raju");
// console.log(user1);
// user1.display();

// class Animal{
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         console.log(this.name,"is eating grass");
//     }
// }

// class Dog extends Animal{
//     constructor(name,speed){
//         super(name);
//         this.speed = speed;
//     }
//     sleep(){
//         console.log(this.name,"is sleeping");
//     }
//     speedy(){
//         console.log("Dobby speed is",this.speed);
//     }
// }

// const cow = new Animal("Gaaya");
// cow.eat();
// const dobby = new Dog("Bruno",22);
// dobby.sleep();
// dobby.eat();
// dobby.speedy();

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     get fName(){
//         console.log(this.name,this.age);
//     }

//     set setting(nameage){
//         let [name,age] = nameage.split(" ");
//         this.name = name;
//         this.age = age;
//     }
// }

// const person1 = new Person("Pratik",22);
// // console.log(Object.getPrototypeOf(person1));
// person1.fName;
// person1.setting = "Raju 18";
// person1.fName;

// /Static method.
// That method we can only access using class name and not using object

// class Animal{

//     constructor(){

//     }
//      hello(){
//         console.log("Hello");
//     }

//     static name = "Prtikdf ";
// }

// Animal.hello();
// console.log(Animal.name);

// const ani = new Animal();
// console.log(ani.hello());

// Closures

// function myFunc() {
//     return () => {
//         return "Hello world";
//     };
// }
// const ans = myFunc();
// console.log(ans());

// const func1 = (x) => {
//     return (a) => {
//         return a**x;
//     };
// }
// const sq = func1(2);
// console.log(sq(4));

// DOM (Document Object Model.)

// console.log("Hello Im in Practice");

// console.log(document.getElementById("headl"));

// console.log(document.querySelector("a"));

// console.log(document.querySelector(".headline"));
// console.log(document.querySelector("#headl"));

// console.log(document.getElementsByClassName("nav-item"));

// Revise once again!

// console.log("Hello");

// var a = 10;
// console.log(a);

// var a = 20;
// console.log(a);

// let a = 20;
// let a = 20;
// console.log(a);

// var 1Nmae;
// var _1name;
// var $cns;
// var f name;
// {
//     var name = "Pratik";
// }

// {
//     const lName = "sds";
// }
// console.log(name);
// console.log(lName);

// String
// let fName = "Pratik";
// console.log(fName[fName.length - 1]);

// String methods.
// let fName = "Pratik Maru";
// console.log(fName.trim())
// console.log(fName.toUpperCase());
// console.log(fName);
// let [fname,lname] = fName.split(" ");
// console.log(fname);
// console.log(lname);

// SLice method.
// let lname = fName.slice(4);
// console.log(lname);

// typeof method
// let fName = [];
// console.log(typeof fName);
// console.log(Array.isArray(fName));

// convert number to string
// let num = 80;
// num = num + "";
// console.log(typeof num);
// num = +num;
// console.log(typeof num);

// console.log(`Hii my num is ${num}`);

// let lname ;
// var fName;
// console.log(fName);

// console.log(typeof null);

// let num = 12;
// console.log(Number.MAX_SAFE_INTEGER);
// let maxNum = BigInt(9007199254740991);
// let maxNum2 = BigInt(9007199254740991);
// console.log(BigInt(num) + maxNum);

// const a = "5";
// const b = 5;

// console.log(a!=b);
// console.log(a!==b);

// truthy falsy values.
// const a = null;
// console.log(null);

// let num = 0;
// if(num){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// ternary operators.

// let age = 20;
// let vote = age > 18 ? true : false;
// console.log(vote);

// const name = "Pratik";
// let age = 2;
// if(name[0] === "P" || age >=18){
//     console.log("Hello you are above 18 and p");
// }
// else{
//     console.log("Sorryyyyyyy");
// }

// Nested if else

// const age = 5;
// if(age > 18){
//     console.log("greater than 18");
//     if(age > 50){
//         console.log("Eligible");
//     }
// }
// else{
//     console.log("You re not eligible");
// }

// let num = 13;

// switch(num){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Boom Boom");
//         break;
// }

// while
// let num = 0 ;
// do{
//     num++;
//     console.log(num);
// }while(num != 0)

// let num = 100;
// for(let i=num;i>=0;i--){
//     for(let i=0;i<100000000;i++){
//     }
//     console.log(i);
// }

// Break & Continue
// for(let i=1;i<100;i++){
//     console.log(i);
//     if(i%10===0){
//         break;
//         // continue;
//     }
// }

// let num = 100;

// do{
//     console.log(num);
//     num++;
// }while(num <= 10);

// console.log(num);

// let arr = [1,2,3,4,5];

// console.log(arr[arr.length-1]);

// const ar = [12,true,"as",null,undefined];

// for(let i=0;i<ar.length;i++){
//     console.log(typeof ar[i]);
// }

// let arr1 = [100,200,300,400];
// let arr2 = arr1;
// console.log(arr2[2]=1000000);
// console.log(arr1);

// let obj = {};
// console.log(typeof obj)

// let arr = [1,2,3,4,5];

// arr.push(100);
// arr.pop();
// arr.unshift(10);
// arr.shift();
// arr.reverse();
// console.log(arr);

// let arr2 = arr.slice(0);
// console.log(arr2);

// arr2[1] = 10000000;
// console.log(arr2);
// console.log(arr);

// let fruits = ["Apple","Mango","Chikoo","Grapes"];
// let fruits2 = [];

// for(let i=0;i<fruits.length;i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);

// const arr = [1,2,3];
// arr[2] = 200;
// const arr2 = [11,1,1];
// arr = arr2;
// console.log(arr);

// const fruits = ["Mango","Apple","Orange","Peach","Banana","Grapes"];

// for(let fruit of fruits){
//     console.log(fruit);
// }

// let arr = ["Pratik","Rohan","Venkatesh","Raju","Baburao","Shyam"];

// for(let i in arr){
//     console.log(arr[i]);
// }

// let details = ["Pratik","maru",20,27000];
// const [fName,lName,...res] = details;

// console.log(fName);
// console.log(lName);
// console.log(res);

// Objects

// const details = {
//     fName : "Pratik",
//     lName : "Maru",
//     age : 20,
//     "Address of" : "asdtfhg",
//     cityVisit : ["paris","tokyo","seoul","rome"]
// }

// console.log(details);
// const det1 = Object.assign({},details);
// det1.sa = "Hadsc";
// console.log(details);
// console.log(det1);

// console.log(details["Address of"]);
// console.log(details["cityVisit"][1]);

// for(let i in details){
//     console.log(i);
// }
// console.log(Object.keys(details));
// console.log(Object.values(details));

// for(let i of Object.values(details)){
//     console.log(i);
// }

// const key1 = "objectkey1";
// const key2 = "objectkey2";

// const value1 = "myValue1";
// const value2 = "myValue2";

// let obj = {
//     [key1] : value1,
//     [key2] : value2,
// };
// console.log(obj);

// Spread operator.
// const obj1 = {
//     fName : "Pratik",
//     lName : "Maru",
//     age : 20
// }

// let obj2 = {
//     carCount : 10,
//     carBrand : ["wolkswagen","tata","skoda","mahindra"]
// }

// const obj3 = {...obj2 , ...obj1};
//  obj2 = {...obj2 , ...obj1};
// console.log(obj2);

// const {fName,age:ageeee} = obj1;
// console.log(fName);
// console.log(ageeee);

// const user = [{
//     userId:01,
//     fName:"Pratik",
//     gender:"male"
// },{
//     userId:02,
//     fName:"Mohit",
//     gender:"male"
// },{
//     userId:03,
//     fName:"Vidhi",
//     gender:"female"
// }];

// console.log(user);

// for(let i=0;i<user.length;i++){
//     // console.log(user[i].userId);
//     console.log(user[i].fName);
// }

// for(let {fName,gender} of user){
//     console.log(fName,gender);
// }

// const [{fName},,{gender}] = user;
// console.log(fName);
// console.log(gender);

// Function

// function sing(){
//     console.log("Helo");
// }

// sing();
// sing();
// sing();

// const add = (a,b) => {
//     return a+b;
// }
// const ans = add(10,20);
// console.log(ans);

// let arr = [10,20,30,40,50];

// let a = 300;
// function find(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] === target){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(find(arr,a));

// const isEven = a => a%2===0;
// console.log(isEven(20));

// Allowed.
// hello();

// function hello(){
//     console.log("hello");
// }

// Not Allowed
// hello();

// const hello = () => {
//     console.log("hello");
// }

// Not allowed
// hello();

// const hello = function(){
//     console.log("hello");
// }

// console.log(a);
// var a = "Hello";

// console.log(a);
// let a = "Hello";

// console.log(a);
// const a = "Hello";

// function hello(){
//     return function(){
//         console.log("Hioo");
//     }
// }

// const res = hello();
// res();

// function func1(){
//     function func2(){
//         console.log("Func2");
//     }
//     func2();
// }

// const ans = func1;
// console.log(ans);
// func2();  // Not allwoed becoz its inside function scope.

// const ans = "Hioo";

// function myFunc(){
//     // console.log(ans);
//     function myFunc2(){
//         const ans = "bywwww";
//         console.log(ans);
//     }
//     myFunc2();
// }

// myFunc();

// Block scope and Function scope.

// {
//     let ans = "jiosss";
// }

// {
//     var ansV = "cjascasd";
// }

// {
//     const ansC = "serty";
// }

// console.log(ansC);

// function add(a=100,b=200){
//     return a+b;
// }
// console.log(add());

// function add(...a){
//     let ans = 0;
//     for(let i=0;i<a.length;i++){
//         ans += a[i];
//     }
//     return ans;
// }
// console.log(add(1,2,3,4,5));

// const obj = {
//     fName : "Pratik",
//     lName : "Maru"
// }

// function display({fName,lName}){
//     console.log(fName,lName);
// }

// display(obj);

// function callBack(){
//     console.log("Hey Im callback function");
// }

// function myFunc1(callBack){
//   console.log("Hey Im in MyFunc1");
//   callBack();
// };

// myFunc1(function(){
//     console.log("Helo");
// });

// const number = [13,1123,33,4,5];
// let ans = 0;
// number.forEach((ele)=>{
//     // console.log(ele);
//     ele = ele * ele;
// })

// console.log(number);

// for(let num of number){
//     console.log(num*num);
//     num = num * num;
// }

// console.log(number);

// Anonumous function.

// let arr = [12,21,33,22,21];

// const arr2 = arr.map( (ele) => {
//     return ele*ele;
// });

// console.log(arr2);

// Real world eg :-
// const users = [
//     {fName:"Pratik",age:20},
//     {fName:"Harshit",age:22},
//     {fName:"Raju",age:24},
//     {fName:"Baburao",age:29},
// ]

// const resArr = users.map( ({fName}) => {
//     return fName;
// })

// console.log(resArr);

// Filter method.

// let arr = [1,2,3,4,5,6];

// const ans = arr.filter((ele)=>{
//     return ele%2===0;
// })

// console.log(ans);

// Reduce method.
// let arr = [1,2,3,4,5,6];

// const ans = arr.reduce((acc,cur)=>{
//     return acc + cur;
// })

// console.log(ans);

// const users = [
//     {fName:"Pratik",age:20},
//     {fName:"Harshit",age:22},
//     {fName:"Raju",age:24},
//     {fName:"Baburao",age:29},
// ];

// // Filter method.
// const filteredArr = users.filter(({age}) => {
//     return age >= 28;
// })
// console.log(filteredArr);

// const numbers = [1,2,3,4,5,6];
// const res = numbers.reduce((acc,cur)=>{
//     return acc+cur;
// })

// console.log(res);

// const userCart = [
//     {product:"Maggi",price:25},
//     {product:"Vegies",price:55},
//     {product:"Biscuits",price:125},
// ]

// const total = userCart.reduce((acc,cur)=>{
//     return cur.price + acc;
// },0);

// console.log(total);

// let num = [4,2,1,7,5,3,9];
// num.sort();
// console.log(num);

// let arr = [12,4900,32,1654];

// arr.sort((a,b)=>{
//     // return a-b;
//     return b-a;
// })
// console.log(arr);

// const productDetails = [
//     {pId:1,pName:"Phone",price:12000},
//     {pId:2,pName:"Charger",price:2000},
//     {pId:3,pName:"Laptop",price:52000},
//     {pId:4,pName:"TV",price:32000},
// ];

// productDetails.sort((a,b)=>{
//     return a.price - a.price;
// })
// console.log(productDetails);

// const myArr = ["Doggy","Cat","Elephant","Lion"];

// const ans = myArr.find((string)=>{
//     if(string.length === 3){
//         return string;
//     }
// });

// console.log(ans);

// every

// let arr = [21,47,63,83,317];

// const ans = arr.some((ele)=>{
//     return ele%2===0;
// })

// console.log(ans);

// const prod = [
//     {pId:01,pName:"Phone",price:12000},
//     {pId:02,pName:"SmartWatch",price:14900},
//     {pId:03,pName:"NeckBand",price:2000},
// ]

// const ans = prod.find((ele)=>{
//     return ele.price >= 000;
// })
// console.log(ans);

// const arr = Array(10).fill(100);
// console.log(arr);

// arr.fill(200,1,5);
// console.log(arr);

// const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.splice(2,1,200);
// console.log(arr);
// const arr2 = arr.splice(2,4);
// console.log(arr2);
// const arr2 = arr.splice(2,4);
// console.log(arr);

// Iterables.
// const fName = "Pratik";
// for(let i=0;i<fName.length;i++){
//     console.log(fName[i]);
// }

// let sets = new Set([16,17,18,19,20]);
// sets.add(12);
// sets.add(13);
// sets.add(14);
// sets.add(15);
// sets.delete(14);
// sets.clear();
// console.log(sets);

// for(let s of sets){
//     console.log(s);
// }

// Not allowed.
// for(let s in sets){
//     console.log(s);
// }

// const delNum = sets.delete(120);
// console.log(delNum);

// console.log(sets.has(120));

// Map Object.
// let maps = new Map();
// // console.log(maps);
// maps.set(true,"Boolean Value");
// maps.set(21,"Age");
// maps.set([12,21,32,23,43,34],"Array");

// console.log(maps);

// console.log(maps.get(21));

// for(let i of maps.values()){
//     console.log(i);
// }

// for(let i of maps.keys()){
//     console.log(i);
// }

// We cant user for-in loop in set.

// const person1 = {
//     fName : "Pratik",
//     lName : "Maru",
// }

// let maps = new Map();
// maps.set(person1,{cars:["BMW","TATA"]});

// console.log(maps.get(person1).cars);
// console.log(maps.get(person1).cars[0]);

// const obj = {
//     car : "BMW",
//     price : 10000,
//     address : {home:"Paris, France"}
// }

// console.log(obj?.address?.home);

// const person = {
//     fname : "Pratik",
//     lName: "Maru",
//     display : function(){
//         console.log(this.fname,this.lName);
//     }
// }

// person.display();

// function personInfo(){
//     console.log(`FName is ${this.fName} and my lName is ${this.lName}`);
// }

// const person = {
//     fName : "Pratik",
//     lName: "Maru",
//     display : personInfo
// }

// person.display();

// Window Object.

// call Apply bind.

// function personInfo(age){
//     console.log(`FName is ${this.fName} and my lName is ${this.lName} and age is ${age}`);
// }

// const person = {
//     fName : "Pratik",
//     lName: "Maru",
//     display : personInfo
// }

// const person2 = {
//     fName : "Raju",
//     lName: "Shyam",
// }

// person.display.call();
// person.display.apply();
// const ans = personInfo.bind(person,20);
// ans();
// person.display.call(person2,20);

// const user = {
//     fName : "Pratik",
//     age : 8,
//     about : function(){
//         console.log(this);
//         console.log(this.fName,this.age);
//     }
// }
// const ans = user.about;
// console.log(ans());

// Function creating object.

// function createUser(fName,lName,email,age,address = "Paris, France"){
//     const user = {};
//     user.fName = fName;
//     user.lName = lName;
//     user.email = email;
//     user.email.age = age;
//     user.address = address;

//     user.about = () => {
//         return `${fName} and ${lName}`;
//     }

//     user.is18 = function(){
//         return age >= 18;
//     }

//     return user;
// }

// const person1 = createUser("pratik","maru","prat@",2);

// console.log(person1.about());
// console.log(person1.is18());

// const userMethods = {
//     about : function(){
//         return `${this.fName} and ${this.lName}`;
//     },

//     is18 : function(){
//         return (this.age >= 18);
//     }
// }

// function createUser(fName,lName,email,age,address = "Paris, France"){
//     const user = {};
//     user.fName = fName;
//     user.lName = lName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const person1 = createUser("Pratik","Maru","prat@gmail.com",2,"sdf");

// console.log(person1.about());
// console.log(person1.is18());

// ___________________________________________

// const userMethods = {
//     about : function(){
//         return `${this.fName} and ${this.lName}`;
//     },

//     is18 : function(){
//         return (this.age >= 18);
//     }
// }

// function createUser(fName,lName,email,age,address = "Paris, France"){
//     const user = Object.create(userMethods);
//     user.fName = fName;
//     user.lName = lName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const person1 = createUser("Pratik","Maru","prat@gmail.com",2,"sdf");

// console.log(person1.about());
// console.log(person1.is18());

// const obj1 = {
//     num1 : "value1",
// }
// const obj2 = Object.create(obj1);
// console.log(obj2.num1);

// function func1(){
//     console.log("func1")
// }

// func1.prototype.display = function(){
//     console.log("Hey Im in Display function!");
// }

// func1.prototype.display();

// _____________________________________________

// createUser.prototype.about = function(){
//         return `${this.fName} is ${this.age} years old.`;
//     },

// createUser.prototype.is18 = function(){
//         return (this.age >= 18);
//     },
// createUser.prototype.sing = function(){
//         console.log("Bekhayali mai bhi tera be khalay hi aye 😂.");
//     }

// function createUser(fName, lName, email, age, address){
//     const user = Object.create(createUser.prototype);     // Here we changed this. Yeh abhi proto-chain baan jayegi.
//     user.fName = fName;
//     user.lName = lName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser("Pratik","Maru",28,"asscd sdasaj smaa ");

// // console.log(createUser.prototype);  // So jabhi humne yeh function ko create kia toh humae protoype mila.

// console.log(user1.about());
// console.log(user1.is18());
// user1.sing();

// "new" keyword.

// function CreateUser(fName,age){
//     this.fName = fName;
//     this.age = age;
// }

// CreateUser.prototype.about = function(){
//     console.log(this.fName,this.age);
// }

// const person = new CreateUser("Pratik",20);

// console.log(person);

// person.about();

// function CreateUser(fName,lName,age,email,address){
//     this.fName = fName;
//     this.lName = lName;
//     this.age = age;
//     this.email = email;
//     this.address = address;
// };

// CreateUser.prototype.about = function(){
//     return `${this.fName} and ${this.lName} and Im ${this.age} years old`;
// }

// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }

// const person1 = new CreateUser("Pratik","Maru",20,"pratik@gmail.com","Paris, France");

// console.log(person1);
// console.log(person1.about());
// console.log(person1.is18());

// function CreateUser(fName, lName, email, age, address){
//     this.fName = fName;
//     this.lName = lName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     // return this;   // Its okay if we dont write return statement becoz 'new' keyword apne aap se hi retrun karta hai.
// }

// CreateUser.prototype.about = function(){
//     return `${this.fName} and age is ${this.age}`;
// }

// CreateUser.prototype.is18 = function(){
//             return this.age >= 18;
// }

// CreateUser.prototype.sing = function(){
//             console.log("Bekhayali mai bhi tera be khalay hi aye 😂.");
// }

// const user1 = new CreateUser("pratik","maru","email",12,"acsdf sd");

// for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//         console.log(key);
//     }
// }

// class CreateUser{
//     constructor(fName,lName,age){
//         this.fName = fName;
//         this.lName = lName;
//         this.age = age;
//     }

//     is18(){
//         return this.age>=18;
//     }
// }

// const c1 = new CreateUser("Prai","ds",22);

// console.log(c1);
// console.log(c1.is18());

// class Animal{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     display(){
//         console.log(this.name);
//         console.log(this.age);
//     }

//     isSuperCute(){
//         if(this.age < 5){
//             console.log("Super cute");
//         }
//         else{
//             console.log("cute");
//         }
//     }
// }

// class Dog extends Animal{
//     constructor(fName,age,color){
//         super(fName,age);
//         this.color = color;
//     }

//     dogcolor(){
//         console.log(this.color);
//     }
// }

// const bruno = new Dog("Bruno",3,"Golden brown");

// bruno.isSuperCute();
// bruno.dogcolor();
// bruno.isSuperCute();
// bruno.display();

// Getter and setter.

// class person{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//     }

//     get display(){
//         console.log(this.fname,this.lname);
//     }

//     set setName(str){
//         let [fname,lname] = str.split(" ");
//         this.fname = fname;
//         this.lname = lname;
//     }
// }

// const p1 = new person("Pratik","Maru");
// // console.log(p1);

// p1.display;
// p1.setName = "Baburao apte";
// p1.display;

// Static methods and properties.

// class person{
//     constructor(fname,lname){
//         this.fname = fname;
//         this.lname = lname;
//     }

//     static display(){
//         console.log(`${this.fname} and ${this.lname}`);
//     }

//     static desc = "You're awesome";
// }

// person.display("Pratik","Maru");
// console.log(person.desc);

// Closures practice.

// function res(x){
//     return function(a){
//         return a**x;
//     }
// }

// const ans = res(3);
// console.log(ans(2));

// function myFunc(){
//     let flag = true;

//     return myFunc2 = () =>{
//         if(flag){
//             console.log("Hey you called me");
//             flag = false;
//         }
//         else{
//             console.log("Not again ");
//         }
//     }
// }

// let ans = myFunc();
// ans();
// ans();
// ans();

// console.log("Hello");

// DOM (Document Object Model)

// console.log(window);
// console.log(this);

// const ans = document.getElementById("head1");
// console.log(ans.innerText);
// ans.innerHTML = "Bye Bye";
// console.log(ans.innerText);

// console.dir(ans);

// const ele = document.querySelector(".heading1");
// console.log(ele);

// const ele = document.querySelectorAll(".heading1");

// // console.log(Array.isArray(ele));

// for(let e of ele){
//     // console.log(e.innerHTML);
//     // e.style.color = "red";
// }

// const mainHeading = document.getElementById("head1");
// console.log(mainHeading.textContent);
// console.log(mainHeading.innerText);

// Changing style of an element
// mainHeading.style.color = "red";
// mainHeading.style.backgroundColor = "yellow";

// const mainHeading = document.getElementById("head1");

// // console.log(mainHeading.getAttribute("id"));
// // mainHeading.setAttribute("id","updatedSuccessfully");
// // console.log(mainHeading.getAttribute("id"));

// const allItems = document.getElementsByClassName("heading1");
// // console.log(allItems);

// for(let item of allItems)
// {
//     console.log(item.innerText);
// }

// Loop in HTMLCollection and NodeList.
// const allItems = document.getElementsByClassName("heading1");
// console.log(allItems);  // HTMLCollections

// for(let i of allItems){
//     i.style.color = "green";
// }

// const allItems1 = document.querySelectorAll(".heading1");
// console.log(allItems1);  // NodeList

// for(let i of allItems1){
//     i.style.color = "orange";
// }

// let ans = document.getElementsByTagName("h1");
// console.log(ans);

// ans = Array.from(ans);
// console.log(ans);
// console.log(Array.isArray(ans));

// InnerHTML

// let ans = document.querySelector(".heading1");
// console.log(ans.innerHTML);
// // ans.innerHTML = "<h1>Hellosdfg</h1>";
// ans.innerHTML += "<h2>Bye Bye </h2>"

// console.log("DOM");

// const ele = document.getRootNode();
// console.log(ele);

// console.log(ele.childNodes);

// let htmlEle = ele.childNodes[1];

// console.log(htmlEle.childNodes);

// const pEle = htmlEle.parentNode;
// console.log(pEle);

// let bodyEle = htmlEle.childNodes[0];
// console.log(bodyEle.nextSibling);

// console.log("heloo")

// const heading = document.querySelector("h1");

// console.log(heading.innerText);

// const pNode = heading.parentNode;
// console.log(pNode);
// pNode.style.color = "red";
// pNode.style.backgroundColor = "yellow";

// const body = document.body;
// console.log(body.parentNode.style.color = "red");

// const container = document.querySelector(".container");

// console.log(container.childNodes);
// console.log(container.children);

// const clist = document.querySelector(".container");

// console.log(clist.classList);
// console.log(clist.classList.remove("m-1"));
// console.log(clist.classList.add("bg-dark"));
// console.log(clist.classList);

// console.log(clist.classList.contains("m--1"));

// CreateHTMLElement

// const ele = document.createElement("h1");
// ele.textContent = "This is created ELement : h1";

// console.log(ele);
// let head1 = document.querySelector(".container");

// head1.append(ele);
// head1.prepend(ele);

// Cloning Node....
// const ele1 = ele.cloneNode(true);
// head1.prepend(ele1);

// head1.remove(ele);
// ele.remove();

// const todoList = document.querySelector(".container");

// todoList.insertAdjacentHTML("beforebegin","<h1>Hiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>");

// static list vs live list.

// const listItems = document.querySelectorAll(".todo-list li");

// const sixhLi = document.createElement("li");
// sixhLi.textContent = "Item 7";

// const ul = document.querySelector(".todo-list");
// ul.append(sixhLi);

// console.log(listItems);

// const listItems = document.getElementsByTagName("li");

// const sixhLi = document.createElement("li");
// sixhLi.textContent = "Item 7";

// const ul = document.querySelector(".todo-list");
// ul.append(sixhLi);

// console.log(listItems);

// GetDimensionsOfTheELement
// const sectionTodo  = document.querySelector(".todo-list");

// console.log(sectionTodo.getBoundingClientRect());
// console.log(sectionTodo.getBoundingClientRect().height);
// console.log(sectionTodo.getBoundingClientRect().width);

// let eve = document.querySelector(".learn");
// console.log(eve);

// eve.addEventListener("click",()=>{
//     // console.log("Hey you clicked me!");
//     let getEle = document.querySelector(".addh");
//     getEle.innerHTML = "Hey you clicked me!";
// })

// let btn = document.querySelector(".learn");

// btn.onclick = function(){
//     // console.log("Hioooooo");
//     const ele = document.querySelector(".addh");
//     ele.innerHTML ="Hey Hawkey!";
// }

// let btn = document.querySelector(".learn");

// btn.onclick = function(){
//    console.log(this);
// }

// btn.onclick = () => {
//    console.log(this);
// }

// const allBtns = document.querySelectorAll("button");

// // console.log(allBtns);

// for(let i of allBtns){
//     // console.log(i);
//     i.addEventListener("click",()=>{
//         // console.log("You clicked me");
//         console.log(i.textContent);
//     })
// }

// allBtns.forEach((ele)=>{
//     // console.log(ele);
//     ele.addEventListener("click",function(){
//         console.log(ele.textContent);
//     })
// })

// let allBtns = document.querySelectorAll("button");

// for(let i of allBtns){
//     i.addEventListener("click",(e)=>{
//         // console.log(e.target);
//         console.log(e.currentTarget.textContent);
//     })
// }

// for(let i of allBtns){
//     i.addEventListener("mouseover",()=>{
//         const body = document.body;
//         body.style.backgroundColor = 'red';
//         i.style.backgroundColor = "yellow";
//     })
// }

// for(let i of allBtns){
//     i.addEventListener("mouseleave",()=>{
//         const body = document.body;
//         body.style.backgroundColor = 'white';
//         i.style.backgroundColor = "white";
//     })
// }

// let but = document.querySelector(".btn");
// console.log(but);

// function changeColor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     return `rgb(${red},${green},${blue})`;
// }

// but.addEventListener("click",()=>{
//     let docbody = document.body;
//     let val = changeColor()
//     docbody.style.backgroundColor = val;
//     const dis = document.querySelector(".display");
//     dis.innerHTML = val;
// });

// let bodyEle = document.body;

// bodyEle.addEventListener("keypress",(e)=>{
//     // console.log(e);
//     // console.log(e.key);
// })

// const gParent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");

// console.log(gParent);
// console.log(parent);
// console.log(child);

// gParent.addEventListener("click",()=>{
//     console.log("Grandparent clicked");
// });

// parent.addEventListener("click",()=>{
//     console.log("Parent clicked");
// });

// child.addEventListener("click",()=>{
//     console.log("Child clicked");
// });

// gParent.addEventListener("click",()=>{
//     console.log("Grandparent clicked");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("Parent clicked");
// },true);

// child.addEventListener("click",()=>{
//     console.log("Child clicked");
// },true);

// Making one of the best project by myself totally.

// let todoItem = document.querySelector(".todoText  input[type='text']")

// let todoList = document.querySelector(".todoText");

// let ulLists = document.querySelector(".ulList");

// todoList.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     const newTodoText = todoItem.value;
//     // console.log(newTodoText);
//     const creEle = document.createElement("li");
//     newLiInerHtml = `<span class="text">${newTodoText} </span>
//     <div class="todo-buttons">
//         <button class="todo-btn done">Done</button>
//         <button class="todo-btn remove">Remove</button>
//     </div>`;
//     creEle.innerHTML = newLiInerHtml;
//     ulLists.append(creEle);
// })

// ulLists.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("done")){
//         // console.log("Done");  // yes here we are getting if it is clicked on "done"
//         // Now lets do things that we want to do with these buttons.
//         const liSpan = e.target.parentNode.previousElementSibling;
//         // console.log(liSpan);
//         liSpan.style.textDecoration = "line-through";
//     }
//     if(e.target.classList.contains("remove")){
//         const targetedLi = e.target.parentNode.parentNode;
//         // console.log(targetedLi);
//         targetedLi.remove();
//     }
// })

// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = [
//   [1, 2, 3, 4, 5],
//   [6, 54, 3, 3, 4],
//   [6, 54, 3, 3, 4],
//   [6, 54, 3, 3, 4],
//   [6, 54, 3, 3, 4],
//   [6, 54, 3, 3, 4],
// ];

// console.log(arr2[3][2]);

// for(let i=0;i<arr2.length;i++){
//     for(let j=0;j<arr2.length;j++){
//         if(j===1){
//             console.log(arr2[i][j]);
//         }
//     }   
// }

// // Made By me.
// const formTodo = document.querySelector(".formTodo");
// const ulList = document.querySelector("ul");
// const todoInput = document.querySelector("form input[type='text']");

// formTodo.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     let todoItem = document.createElement("li");
//     if(todoInput.value === ""){
//         alert("Plz enter value");
//     }
//     else{
//     console.log(todoItem);
//     todoItem.innerHTML = `
//         <span>${todoInput.value}</span>
//         <button class='done'>Done</button>
//         <button class='remove'>Remove</button> 
//         <br>
//     `;
//     ulList.append(todoItem);
//     todoInput.value = "";
//     }
// });

// ulList.addEventListener("click",(e)=>{
//     if(e.target.classList.contains("done")){
//         let ele = document.querySelector(".done");
//         let txt = ele.parentNode;
//         let fEle = txt.children;
//         let cancel = fEle[0];
//         cancel.style.textDecoration = "line-through";
//     };
//     if(e.target.classList.contains("remove")){
//         let ele = document.querySelector(".done");
//         let txt = ele.parentNode;
//         let fEle = txt.children;
//        txt.remove();
//     };
// });

// Tasks. 

// const ele = document.getRootNode();

// console.log(ele.childNodes);
// console.log(ele.childNodes[1].childNodes[2].childNodes[1]);

// const h1ele = ele.childNodes[1].childNodes[2]; 
// console.log(h1ele.childNodes);
// console.log(h1ele.children);
// console.log(h1ele.textContent);
// console.log(h1ele.style.backgroundColor = "red");
// console.log(h1ele.style.borderRadius = "10px");

// let ele = document.querySelector("h1");
// ele.textContent = "Im good ";

// const h1data = document.querySelector("h1");
// console.log(h1data.classList);
// console.log(h1data.classList.add("bg-cal"));
// console.log(h1data.classList);

// let ele = document.body;

// let createEle = document.createElement("h1");
// createEle.textContent = "Hey Im added one";

// ele.append(createEle);
// const ele2 = createEle.cloneNode(true);
// console.log(ele2);
// // ele.prepend(ele2);
// ele.prepend(ele2);

// const res = document.querySelectorAll("li");
// let li6 = document.createElement("li");
// li6.textContent = "List 6";

// const ul = document.querySelector("ul");

// ul.append(li6);

// console.log(res);

// const res = document.querySelectorAll("li");

// let h1text = document.querySelector("h1");
// let btn = document.querySelector("button");

// btn.addEventListener("click",()=>{
//     // console.log("Hwllo");
//     h1text.innerText = "Hello How are you ? ";
//     document.body.style.backgroundColor = "cyan";
//     btn.style.color = "white";
//     btn.style.backgroundColor = "black";
// });

// class person{
//     fName = "Pratik";
//     lName = "Maru";
//     func = function(){
//         console.log(`${fName} and ${lName}`);
//     }
// }

// console.log("Script Starts");

// const id = setTimeout(()=>{
//     console.log("Hioo");
// },1000);

// for(let i=0;i<100;i++){
//     console.log("....");
// }

// console.log("Script End");
// console.log(id);

// let i=0;
// setInterval(()=>{
//     console.log("Hello",i)
//     i++;
// },1000);

// let btn = document.querySelector("button");
// let btnStop = document.querySelector("btn-stop");
// // console.log(btn);

// function changeColor(){
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     return `rgb(${red},${green},${blue})`;
// }

// let flag = true;
// const id = btn.addEventListener("click",()=>{
//     if(flag){
//         setInterval(()=>{
//             document.body.style.backgroundColor = changeColor();
//         },100);
//         flag = false;
//     }
//     else{
//         console.log(document.body.color);
//         clearInterval(id);
//         flag = true;
//     }
// });

// function getTwoNumAndAdd(num1,num2,add,fail){
//     if(num1 > 0 && num2 > 0){
//         add(num1,num2);
//     }
//     else{
//         fail();
//     }
// }

// getTwoNumAndAdd(0,20,(n1,n2)=>{
//     console.log(n1+n2);
// },()=>{
//     console.log("Number must be greater than 0");
// })

// const head = document.querySelector(".heading1");


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// setTimeout(()=>{
//     heading1.style.color = "red";
//     setTimeout(()=>{
//         heading2.style.color = "blue";
//         setTimeout(()=>{
//             heading3.style.color = "green";
//             setTimeout(()=>{
//                 heading4.style.color = "yellow";
//                 setTimeout(()=>{
//                     heading5.style.color = "pink";
//                     setTimeout(()=>{
//                         heading6.style.color = "brown";
//                         setTimeout(()=>{
//                             heading7.style.color = "cyan";
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// const basket = ["","vegies","sauce","cereals"];
// const pro = new Promise((res,rej)=>{
//     if(basket.includes("rice") && basket.includes("vegies") && basket.includes("sauce")){
//         res("Fried rice is prepared");
//     }
//     else{
//         rej("Cant find ingredients");
//     }
// })

// console.log(pro)
// pro.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeCol(ele,col,time){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(ele){
//                 ele.style.color = col;
//                 res();
//             }
//             else{
//                 rej("Cant find ele.");
//             }
//         },time);
//     })
// }

// const ans = changeCol(heading1,"red",1000)
// .then(()=>changeCol(heading2,"green",1000))
// .then(()=>changeCol(heading3,"brown",1000))
// .then(()=>changeCol(heading4,"blue",1000))
// .then(()=>changeCol(heading5,"yellow",1000))
// .then(()=>changeCol(heading6,"cyan",1000))
// .then(()=>changeCol(heading7,"orange",1000))

// AJAX :- Asynchronous JavaScript And XML 

// const url = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open('GET',url);
// xhr.onload = () => {
//     if(xhr.status >= 200 && xhr.status < 300){
//         const res = xhr.response;
//         const data = JSON.parse(res);
//         console.log(data[0]);
//     }
//     else{
//         console.log("Something went wrong.");
//     }
// }

// xhr.onerror = () => {
//     console.log("Data Disconnected");
// }

// xhr.send();

// const url = "https://jsonplaceholder.typicode.com/posts";

// function sendReq(){
//     return new Promise((res,req)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET',url);
//         xhr.onload = () =>{
//             if(xhr.status >= 200 & xhr.status < 300){
//                 res(xhr.response);
//             }
//             else{
//                 rej(new Error("Something went wrong"));
//             }
//         }
//         xhr.onerror = () => {
//             reject(new Error("Network Dissconnected"));
//         }
//         xhr.send();
//     })
// }

// const ans = sendReq();
// // console.log(ans);

// ans.then((ans)=>{
//     // console.log(ans);
//     return JSON.parse(ans);
// }).then((data)=>{
//     // console.log(data);
//     return data[0];
// }).then((data1)=>{
//     console.log(data1.body);
// })

// const url = "https://jsonplaceholder.typicode.com/posts";

// // const ans = fetch(url);
// // console.log(ans);
// fetch(url).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log(data);
// })

// Async await

// const url = "https://jsonplaceholder.typicode.com/posts";

// const add = async () => {
//     const ans = await fetch(url);
//     // console.log(ans);
//     if(!ans.ok){
//         return new Error("Something went wrong"); 
//     }
//     const data = await ans.json();
//     return data;
// }

// add()
// .then(data => console.log(data))
// .catch(err => console.log(err));

// ES6 modules.

// IN Practice folder.

