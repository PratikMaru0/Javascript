// Now lets analyze code. (understanding global context nd all).

// First of all link this file with html and run it in chrome using live server. Open chrome console and see result.    
console.log(this);
console.log(window);
console.log(myFunction);
console.log(fullName);

function myFunction(){
    const abc = "A = Apple, B = Ball , C = Cat";
    console.log("This is my function");
}

var fName = "Pratik";
var lName = "Maru";
var fullName = fName + " " + lName;

console.log(fullName);

// In global scope JS dekhege konsa konsa variable hai humare pass. 
// Yaha lName, fName hai. So isse undefined set kr dega in creation phase and while in code esecution phase yeh values ko set krdega. 🐱‍🏍. Isse function bhi milega jo ki global scope se belong karta hai so yeh function ko bhi define kardega. Now is function ka alag hi scope hoga jisse hum function-scope kehte hai. So now function k andar k variables function scope k andar declare hogae and no other than function scope can access that variable (which is in function scope.)

// JS jo bhi variable store karta haina woh object k form mai hi store karta  hai (Key:value pair). JS documentation mai Global enviornment record karke likha hai.

// TODO: FIXME: Watch video from 0:00 to 1:00:00 at 2x speed.  
// Yaha jabhi bhi hum function ko global creation k waqt add hota toh yeh undefined nhi set hoga. Pura ka pura function store hoga. Yeh execute bhi nhi hoga. But pura function ka code store hojayega.


// I hope apko samaj aa gaya hoga. 
