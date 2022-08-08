// While loop 

// Why we got this loop concept becoz All programming language has DRY concept (Don't Repeat Yourself.)

// let a = 10;
// while(a!=0){
//     console.log(a);
//     a--;
// }

// let i = 0;
// while(i!=11){
//     console.log(i);
//     i++;
// } 

let num = 10;
let store = num;   // initalizing so that we can use in string template.
let ans = 0;
while(num != 0){
    ans += num;
    num--;
}
console.log(`Sum of first ${store} is ${ans}`);

// We also have formula in maths for sum of first n natural number ie:- n*(n+1)/2  

// So question is which method is fast formula vala ya phir while wala ? 
// -> Ans :- math formula (its really really very fast) Becoz yaha pe shifting hogi bits ki aur loop main iterate hoga jo ki time consuming process hai.