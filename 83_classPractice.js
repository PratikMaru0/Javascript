// Chaliye thodi class ki pratice karte hai.

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

// let elephant = new Animal("Gajraj",1);
// console.log(elephant.eat());
// console.log(elephant.isCute());
// console.log(elephant.isSuperCute());



