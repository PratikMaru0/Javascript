// Getters and Setters
// Getter :- to get the data using properties syntax not a function syntax. 
// Setter :- set the value to the variable at once. using properties syntax not a function syntax.

class Person{
    constructor(fName,lName,age){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }

    // FullName function.
    // fullName(){
    //     return `${this.fName} ${this.lName}`;
    // }

    // Getter 
    get fullName(){
        return `${this.fName} ${this.lName}`;
    }

    // Set function.
    // setName(fName,lName){
    //     this.fName = fName;
    //     this.lName = lName;
    // }

    // Setter
    set fullName(fullName){
        // fullName.split(" "); // See input = "Pratik Maru" so yeh spaces se isko split karke 2 part mai divide kr dega. Like "Pratik" and "Maru".
        const [fName,lName] = fullName.split(" ");
        this.fName = fName;
        this.lName = lName;
    }

}

const person1 = new Person("Pratik","Maru",20);
// console.log(person1.fullName());
// console.log(person1);


// See hum properties ko aise access karte hai
// console.log(person1.fName);

// Hum function ko aise call karte hai, 
// console.log(person1.fullName());

// Bu mujhe aisa karna hai jaise mai function ko properties jaise call karu. See what I means mujhe () parenthesis k bina mai fulname ko call karu and full Name print hojaye. aso we can do that using get keyword. 
// console.log(person1.fullName);   // Boom guys humne isse bina () bracket use kie call karlia. Isse hum abhi properties k jaise hi treat karenge. 

// Now calling setName to set the fName and lName of the person.
// person1.setName("Raju","Halkat");   // We have successfully set our FullName.
// console.log(person1.fullName);

// See now I want that using properties syntax I can change fullName of the person. Lets understand what Im trying to say. We know we can change name using . operator. Like 
// person1.fName = "Mohit";  // This we know. 
// But I want something like that we can change fullName of the person using properties syntax in Above code where we were setting the fullName we are using the function syntax. I want properties syntax (ie :Without ())
// person1.fullName = "Jashn Bahara";
// console.log(person1);