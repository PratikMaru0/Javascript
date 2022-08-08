// Class in JS.
// In ES6 class keyword introduced. So we know class kya hota hai. Its an template to make an object. Right. 
// In JS classes are fake. Becoz internally kaam previous file mai jo humne kara tha CreateUser banaya tha waise hi hoga. Buss humae feel aygi class use kar rhe hai means that we are using class. 

// Improving the previous code. CreateUser wala. 79 file code.

class CreateUser{
    constructor(fName,lName,email,age,address){
        // console.log("Constructor is called");   // To check  constructor is invoked or not while making new object. nd answer is yes its called when we create a new user (object). 
        this.fName = fName;        
        this.lName = lName;
        this.email = email;
        this.age = age;
        this.address = address;
    }

    about(){
        return `My name is ${this.fName} ${this.lName} and my age is ${this.age}`;
    }

    is18(){
        return this.age >= 18;
    }

    myFunc(a){
        console.log(a);
    }
}

// Humae humesh new keyword use karke hi create karna hai user ko. Jabhi bhi hum new keyword ka use kar te hai toh humara constructor call hota hai. without new keyword we can't create object. 
// let user1 = new CreateUser("Pratik","Maru","eamil",21,"45-B Dobriges downstreet prevcois paris france 40 112");

// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// user1.myFunc(18);

// console.log(Object.getPrototypeOf(user1));   // So yaha user k prototype mai users k method add ho chuke hai. Like is18(), about(). 

// class kafi easy hai. 