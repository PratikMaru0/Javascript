import {fName} from "./fName.js"
export default function display(){
    console.log(`${fName}`);
}

export class Person{
    constructor(fName,age){
        this.fName = fName;
        this.age = age;
    }

    display(){
        console.log(`${this.fName} ${this.age}`);
    }
   
}