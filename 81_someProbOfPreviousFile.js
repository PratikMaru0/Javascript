// Lets see what we are going to solve here.

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

// console.log(user1);


// So jabhi bhi mai yeh for loop laga ta hun toh sari keys print karke deta hai and yeh keys prototype se bhi lekr aa rha hai jaise about, is18, sing etc. So abhi humae prototype wali keys nhi chaiye so what to do. to solve this issue. 
// for(let key in user1){
//     console.log(key);
// }


// Lets solve above problem!
for(let key in user1){
    if(user1.hasOwnProperty(key)){    //  user1.hasOwnProperty(key) gives boolean value if its prototype property returns false else returns true. 
        console.log(key);
    }
    else{
        // Do nothing // 😁
    }
}

