// If you understood class and object concept properly you can SKIP this. Its OKAY.

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

class Dog extends Animal{

    constructor(name,age,speed){
        super(name,age); 
        this.speed = speed;
    }

    dogSpeed(){
        console.log(this.speed,"Kmph");
    }

    bark(){
        console.log("Bhau Bhau");
    }

    eat(){
        return `${this.name} is eating at the speed of 20 bites per minute`;
    }
}

const animal1 = new Animal('Gucci',20);
// console.log(animal1);
// console.log(animal1.eat());