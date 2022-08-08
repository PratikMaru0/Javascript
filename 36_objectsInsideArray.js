// Objects inside Array 
// Very Very useful in real world applications. 

// TODO: Its one of the most important concept in JavaScript. yunki iska real world mai examples dekhoge 

const user = [{
    userId:01,
    fName:"Pratik",
    gender:"male"
},{
    userId:02,
    fName:"Mohit",
    gender:"male"
},{
    userId:03,
    fName:"Vidhi",
    gender:"female"
}];

// console.log(user[0].userId);
// console.log(user[0]);

// using for loop so that we can iterate properly.
for(let u of user){
    console.log(u);
    // console.log(u.fName);
}