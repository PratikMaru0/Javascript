// Lexical Scope 

// Its like global scope and local scope concept in the other programming language.                       

function myApp(){

    const myVar = "value1";

    function myFunc(){
        const myVar = "value59";
        console.log("Inside myFunc",myVar);
    }
    const myFunc2 = function(){
    }
    const myFunc3 = () => {
    }

    console.log(myVar);
    myFunc();

}

myApp();