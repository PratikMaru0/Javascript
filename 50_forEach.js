// 🎉🎉 50th video 🎉🎉 

// Array methods. 

// TODO: Very very very important. Emphasising a lot. Please bhai ache se karlio.

// Name of the methods of an array are :- 
// 1). forEach    ** (Optional)
// 2). map        ***** (Very important)
// 3). filter     ** (useful)
// 4). reduce     **** (important)

const numbers = [4,2,5,8];

function multiplyBy2(number,index){
    console.log(`${number} * 2 = ${number*2}`);
}

// Want to do this for every index. 
// multiplyBy2(numbers[0],0);
// multiplyBy2(numbers[1],1);
// multiplyBy2(numbers[2],2);
// multiplyBy2(numbers[3],3);


// Now wonder is this right way to do this ? 
// Answer: Absolutely no. We dont do like this. Becoz we have to follow DRY principle. 

// Hum for loop ki madad se bhi kr sakte hai . Jo ki better option hai.

// function mult(arr){
//     for(let i=0;i<arr.length;i++){
//         multiplyBy2(arr[i],i);
//     }
// }
// mult(numbers);    // Boom guys we did it. 
// So now whats the solution. Array methods are the solution. Lets see how ? We can achieve this.

// Using for-each loop 
// numbers.forEach(multiplyBy2);  // yeah to sarae elements ko bari bari operations perform karke return kara rha hai. Acha hai. // Yeh for-each loop apne aap hi values ko pass kar dega. index aur value dono apne aap pass hojayenge humae kuch karne ki jarurat nhi hai. 

// // Simply forEach is doing things like this. Mast hai re baba. Ekdum mast 😎
// numbers.forEach(element => {
//     console.log(element*2);    
// });

// // Here we are making anonymous function. These are the function that doesnt have any name. 
// numbers.forEach(function(number,index){
//     console.log(`${number} * 2 = ${number*2}`);
// });

// TODO: for-each loop real array ko alter nhi karega. 

// Real world example where we can use forEach lets see where we can use it!

const users = [
    {fName:"Pratik",age:20},
    {fName:"Harshit",age:22},
    {fName:"Raju",age:24},
    {fName:"Baburao",age:29},
]

// console.log(users);

// While making anonymous function we can make using any method. It can be arrow,expression,traditional.
users.forEach((element) => {
    console.log(element.fName); // Waah bete yeh toh ekdum takatak hai re baba 👀
});

// We can do same thing using for-of loop as we know. Hum isse kam dekhege kyunki yeh abhi abhi aya hai javascript main. Jyada forEach loop milega.  
for(let user of users){
    console.log(user.fName);
}

// Practice of for-of loop. Ek baar najar fer lio 

// let cars = ["mitshubishi","audi","BMW","Rolls royce","Skoda","Jaguar","hyundai","Kia","chevolate"];

// let i = 0;
// const resArr = cars.map((ele) => {
//     return ele + " cars" + " " + ++i;
// });

// console.log(resArr);

// For-of loop original array ko alter nhi karega. 😉



