// "new" keyword.

// Ab hum baat karenge new keyword k barae mai. Like kya hota hai , kyu use karte hai n all.

function createUser(fName,age){
    this.fName = fName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(this.fName,this.age);
}

// So here "new" keyword is doing 3 things. 
// 1). creates empty object and this === {}
// 2). return this (explicitly return karne ki jarurat nhi hai yeh apne aap hi kar leta hai.)
// 3). proto ki value khud hi set kargdega prototype k equal.  Lets test it. 

const user1 = new createUser("Patiss",22);   // Yeh new keyword ne humae ek object reate karke de diya. 
// console.log(user1);   // We are printing the object that is given to us by new keyword.

// Testing : Kya yeh apne aap hi proto ki value prototype k equal set kr rhs ys nhi. So call the function that we decalred in the prototype of the function. 
user1.about();  // Boom guys its real yeh kr rha hai set proto ki value prototpye k equal. Isnt its awesome. Yeah man its super awesome. 

// // new keyword kafi helpful hai. So yeh important keyword hai in JavaScript.

// Now there is scope to improvise this code also. Lets improvise it in 79 file. 


