// We have problem in below code snippet. (Refer till the line: 24. We'll solve problem from line 25 ).

// const userMethods = {
//     about : function(){
//         return `${this.fName} is ${this.age} years old.`;
//     },

//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         console.log("Bekhayali mai bhi tera be khalay hi aye 😂.");
//     }
// }

// function createUser(fName, lName, email, age, address){
//     const user = {};
//     user.fName = fName;
//     user.lName = lName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;    // Here we are storing the reference of the function no creating any extra space. 
//     user.is18 = userMethods.is18;
//     user.sing = userMethods.sing;
//     return user;
// }

// const user1 = createUser("Pratik","Maru",18,"asscd sdasaj smaa ");
// user1.sing();

// Now suppose humare pass 1000s of methods hai aur chalo humne define kar die sarae method in userMethods object NOW humne define toh kar lie bhut phir humae function k andar bhi toh wapas se usse reference dena padegana like we did in this line :  "user.sing = userMethods.sing;" agar 1000s of method hongae toh humae 1000s of line define karni hogi jo ki sir dardi hai and also we are not following DRY principle. Which we must follow! Timestamp : 9:30:00. So yaha kya ho agar hum bhul gaya define(reference dena) in function toh badi problem hojayegi. Jo hum nhi chahte. Right. 

// __________________________________________________________________________________

// First of all goto file no 75 and understand the concept of the proto and then continue from this. 

// Lets solve the problem .... We're improving our code.
// We created one file to understand what we are going to do here to solve thiss issue. 
// So refer 75 file first and then try to understand below lines of code. 

// // Comment out above code so that we dont get any error. While running below code. 

const userMethods = {
    about : function(){
        return `${this.fName} is ${this.age} years old.`;
    },

    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        console.log("Bekhayali mai bhi tera be khalay hi aye 😂.");
    }
}

function createUser(fName, lName, email, age, address){
    const user = Object.create(userMethods);     // Here we changed this. Yeh abhi proto-chain baan jayegi. 
    user.fName = fName;   
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

const user1 = createUser("Pratik","Maru",18,"asscd sdasaj smaa ");
// user1.sing();     // Boom guys its working!
// console.log(user1.about());   // Boom man its working!

// // So humne yeh kara hai ki. 
// 1). Sabse pehle object banega thik hai using function. user1 now is the object. 
// 2). Now we are calling .about() method which user1 doesn't have right. 
// 3). So now becoz we have passed referece of the userMethods will creating an object it will now try to find it in the __proto__ which is userMethods. Agar usse milega toh print kardega nhi toh phir error print karega. SIMPLE. :) 
// Now it doesnt matter aap 1000s of methods banao ya phir 100000s of methods agar humne koi method call karna hai woh __proto__ mai jakr dundega. We dont have to state it explicitly. 😁 Mast hai re baba bahut achaa

// TODO: FIXME: Yeh bohot hi important chij hai. I hope app yeh apko dhyan mai rahegi. 