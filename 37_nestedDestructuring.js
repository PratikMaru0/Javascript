// Nested Destructuring

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

const [{fName},,user3] = user;
console.log(fName);
console.log(user3);
