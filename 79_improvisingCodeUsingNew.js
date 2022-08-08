// Improvising existing code that is present in the 77 file. 

// We know what "new" keyword do. Lets revise it once.
// 1). creates new object where this = {} 
// 2). return this
// 3). proto ko prototype k equal set karta hai.

// // hum isse constructor function kehte hai kyunki yeh humare lie object construct karke de rha hai.
function CreateUser(fName, lName, email, age, address){
    this.fName = fName;   
    this.lName = lName;
    this.email = email;
    this.age = age;
    this.address = address;
    // return this;   // Its okay if we dont write return statement becoz 'new' keyword apne aap se hi retrun karta hai. 
}

CreateUser.prototype.about = function(){
    return `${this.fName} and age is ${this.age}`;
}

CreateUser.prototype.is18 = function(){
            return this.age >= 18;
}

CreateUser.prototype.sing = function(){
            console.log("Bekhayali mai bhi tera be khalay hi aye 😂.");
}

const user1 = new CreateUser("pratik","maru","email",12,"acsdf sd");

console.log(user1);

// console.log(user1.about());
// console.log(user1.is18()); 
// user1.sing();

// So from here we can conclude that its working fine.  
// "new" keyword kafi useful keyword hai. 😉

// we can also see the proto of the user1. Run this code in console of the chrome.


// TODO: FIXME: So agar koi developer hai jisko library banani hai aur usko kaise pata chalega yeh  constructor function hai aur isse new laga k call karna hai. So yaha in JS ek convention hai. Hum constructor function ka starting ka letter CAPITAL mai likhte hai. Like we converted createUser => CreateUser. C ko humne capital kardia so that developers can understand that its constructor function and have to call this using new keyword. 
