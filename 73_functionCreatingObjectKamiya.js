// // Humnae discuss kia tha bohot sari kamiyan hai us "function" creating object mai. So lets discuss that kamiya and solve that. 

// function createUser(fName,lName,email,age,address){
//     const user = {}
//     user.fName = fName;
//     user.lName = lName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${fName}`;
//     };
//     user.is18 = function(){
//         return 18 <= this.age;
//     };
//     return user;
// }

// const user1 = createUser("Pratik","Maru","Pratiktes@gmail.com",2,"prodigesv dyomsk paris ek france 011 50.");
// const user2 = createUser("Pratik","Maru","Pratiktes@gmail.com",2,"prodigesv dyomsk paris ek france 011 50.");
// const user3 = createUser("Pratik","Maru","Pratiktes@gmail.com",2,"prodigesv dyomsk paris ek france 011 50.");


// console.log(user1);
// console.log(user2);
// console.log(user3);

// See when user1 will create ek object banega usme do method banege. Phir se user2 banega waha bhi do method banege same with user3 likewise suppose there are 1 million users then kitna jyada space consume hoga ? Right. Which is not great idea. Mujhe sirf ek hi copy chaiye na method ki. Becoz every object has same method. So now lets solve this. 

// Now lets solve this problem 

const userMethods = {
    about : function(){
        return `${this.fName} is ${this.age} years old.`;
    },

    is18 : function(){
        return this.age >= 18;
    },
}

function createUser(fName, lName, email, age, address){
    const user = {};
    user.fName = fName;
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;    // Here we are storing the reference of the function no creating any extra space. 
    user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("Pratik","Maru","pratiktest@gmail.com",18,"Doris kosa 19 lane street paris France 400 50");
const user2 = createUser("Dichkyaon","SAS","🐱‍🏍@gmail.com",28,"Doris kosa 20 lane street paris France 400 50");

// console.log(user1);

// console.log( user1.about());     // Dekha this is not taking any extra space in terms of the memory this is the most efficient use of the memory that we can do. 
// console.log( user1.is18());


// console.log(user2.about());
// console.log(user2.is18());

// //  Still there is some problem in above code. Lets solve this in different file. 



