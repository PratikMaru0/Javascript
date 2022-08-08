// Lets learn inheritance in JavaScript.


class Animal{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating grass and its ${this.age} years old`;
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

// We have inherited Animal class so that we have all the properties and the methods (Functions) that Animal has in Dog class. Isnt its useful and Awesome ? Yes 😉
class Dog extends Animal{

    // Here we dont have constructor of Dog class so when we'll create Dog class object using new keyword we know new keyword calls constructor but Dog class dont have constructor so it will see is there is any class that is inherited if yes the go to that class here in this case we have inherited the Animal class and now it will find constructor in Animal class and then agar milgaya then it will call Animal class constructor to create an Dog class object. 😎

    // Now we'll make constructor that will take speed as a parameter with the name and age. So Now hum Animal ka constructor use nhi kr sakte humae naya constructor banana padegas in Dog class. So lets make it
    constructor(name,age,speed){
        super(name,age); // here it means name,age will be set by the Animal constructor becoz its capable of that and rahi baat speed ki voh to hum yaha kr denge. 
        this.speed = speed;
    }

    dogSpeed(){
        console.log(this.speed,"Kmph");
    }

    bark(){
        console.log("Bhau Bhau");
    }

    // Now suposse I want moified eat() method for the dog. So that it dont call Animal eat method. 
    // Lets modified it.
    eat(){
        return `${this.name} is eating at the speed of 20 bites per minute`;
    }
}

let bruno = new Dog("bruno",7,50);
// console.log(bruno.eat());  // Boom its calling the eat() method of the Dog class not the Animal class.

// console.log(bruno);
// console.log(bruno.isCute());
// bruno.bark();
// bruno.dogSpeed();

// TODO: FIXME: Here Dog is subclass, derivedClass and Animal is parentClass, baseClass.
// Hum object ko instance bhi bolte hai. But generally hum object hi kehte hai in JS.
