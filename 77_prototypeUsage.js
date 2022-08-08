// TODO: Main coding start with line No : 31. Iske upar wala code copy paste kara hai from 74 file no.

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
//     const user = Object.create(userMethods);     // Here we changed this. Yeh abhi proto-chain baan jayegi. 
//     user.fName = fName;   
//     user.lName = lName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser("Pratik","Maru",18,"asscd sdasaj smaa ");

//console.log(createUser.prototype);  // So jabhi humne yeh function ko create kia toh humae protoype mila. 

// So now humne upar alag se object banaya tha "userMethods" naam ka jiske andar functions define kare the humne kya hota agar woh fuctions hum is function k prototype mai hi define kr deta. Haina yeh awesome. Lets do it. So comment out above code and start coding.  

// .... Main coding starts from here ....


function createUser(fName, lName, email, age, address){
    const user = Object.create(createUser.prototype);   // Change this code. 
    user.fName = fName;   
    user.lName = lName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

createUser.prototype.about = function(){
    return `${this.fName} and age is ${this.age}`;
}

createUser.prototype.is18 = function(){
            return this.age >= 18;
}

createUser.prototype.sing = function(){
            console.log("Bekhayali mai bhi tera be khalay hi aye 😂.");
}

const user1 = createUser("Pratik","Maru","abc@gmail.com",22,"sdm sdcmc sddsx masc ");
// console.log(user1);

// console.log(user1.about());
// console.log(user1.is18());
// user1.sing();    // so yeah this is all we can do. 😉

// FIXME: TODO: So yaha humne link kr hi dia proto aur prototype ko kaise ? 
// Dekh balak hum proto mai dalte hai object ko taki function ko chije nhi mili toh function find kr sakta hai in that object. So hum yaha proto mai protype dal rhe hai. Taki function ko mila nhi toh check kr sakta hai apne hi protoype mai. 🤯 Boom its awesome. Samaj mai agaya but kafi practice karni padegi. KAFI PRACTICE.

console.log(user1);  // isse chrome k console mai run karvaenge toh iska proto dekh sakte hai. Jisme object hoga. Jo ki protoype hai of that function only.  

// Yeh thoda easy hai.
