// Default export 
export default class Person{
    constructor(fName,age){
        this.fName = fName;
        this.age = age;
    }

    info(){
        console.log(this.fName,this.age);
    }
}

// TODO: We can only do default export once in one file.

// Is Baat ka humae be shak dyan rakhna hai. 📍

// Named export.
export class Person2{
    constructor(fName,age){
        this.fName = fName;
        this.age = age;
    }

    info(){
        console.log(this.fName,this.age,"in person 2");
    }
}


