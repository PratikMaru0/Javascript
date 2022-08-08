// Rest parameters

// "...c stores the rest parameters."
// function myFunc(a,b,...c){    // It means humae a , b ki values toh milegi agar user koi aur bhi values deta hai toh hum usse ek array mai dal denge. Yaha is array ka naam hai c.
//     console.log(a,b,c);
// }

// myFunc(1,2,3,3,4,5,2,2,23);   // Yaha 1 , 2 values apne respective a , b mai chali jayegi baki k jo bhi values hai woh ek c naam k array mai chali jayegi and we can use that values.

function addAll(...a){    // a haina ek array main store karega sarae params ko so we know that we can iterate over array and perform operations that we wanted to perform.
    let ans = 0;
    for(let i=0;i<a.length;i++){
        ans += a[i];
    }
    return ans;
}
console.log(addAll(1,2,3,4,5,6,7));


