// Static methods and Properties. 

// So abhi jo hum dekhte aa rhe hai hum jo methods bana rhe hai in Class woj object k related hai. Means agar un methods ko jo ki class k andar hai agar unhe mujhe call karna hai toh mujhe us ckass ka object bana na hoga. So Onject dependent hai methods inside class. 

// So there sis one more feature hum aise bhi method bana sakte hai jisme method object se related nhi hogae means If i want to call that method we can call that without even making any object. Matlab bina object banaye hum call karsakte hai class k methods ko. 😉. This methods are called static methods. 

// Lets define static method using static keyword.

class Animal{

    constructor(fName){
        this.fName = fName;
    }

    // Static method
    static classInfo(){
        return `this is Animal class and method you called is static method.`;
    }

    // Static properties. 
    static desc = "Raju Halkat";
}

let animal1 = new Animal("Sheru");
// console.log(animal1);
// animal1.classInfo(); // TODO: we cant call static method using object. Error aajayega.
// So hum static method kaise call kar sakte hai ? We can call static method using class name and jo bhi return kr rha hai usse store kr sakte hai in variable. Lets do this.
const ans = Animal.classInfo(); 
// console.log(ans);  // Boom guys we did it.

// Static properties isme bhi same static wala formula apply hota hai. like only using class name we can access it and we cant access it using object name.
// console.log(Animal.desc);  // Dekha 😎

// console.log(animal1.desc); // This is not allowed. It will return undefined.

// TODO: Yeh itna crucial nhi hai.  