// Function execution context 

// -> Hum ab yeh baat karenge ki jabhi hum function banayenge tabh kaise yeh work karega. This is array like object so it has length property , we can apply loops, we can access elements using indexing. 

let foo = "foo";     // 1st line
console.log(foo);    // 2nd line

// 3rd line is full function.
function getFullName(fName,lName){
    console.log(arguments);     // This is something new here I have ever seen Plz yaad rakhna ye bohoht acha syntax hai.
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = fName + " " + lName;
    return fullName;
}

const personName = getFullName("Pratik","Maru");      // 4th line
console.log(personName);   // 5th line 

// Timestamp :- 1:15:30 recommending to watch it at 2x speed. 

// So now lets understand how this will work.

// So we know sabse pehle "Memory Creation Phase" mai variables ko memory allocate ki jayegi and unko undefined / uninitialized declarastion hoga as per data type used. 

// Lets see how memory creation phase will look like :-  
// foo = uninitialized    // becoz its using let keyword.  
// getfullName = function(fname,lName){....}
// fullName = uninitialized   // becoz its using const 

// TODO: Isme call stack ka bohot importance hsai kyunki yeh track rakhta hai hum konsi line ko execute kar rhe hai. And iske andar pop / push operations hotae hai. 

// Now lets see how execution phase will look like (Code Executipn Phase.)

// foo = "foo"  // actual value is initialized

// 2nd line :- It will print value of the foo

// 3rd line ie:- function. Its already stored no need to initialized anything. 

// 4th line :- yaha personName ki value function ko call karke jo function return kr rha hai usse set kardo. Simple. so yaha dhyan rakhna jabhi bhi hum function ko call karenge toh naya function execution context create hoga. uske andar bhi same 2phase mai kaam hoga like memory creation phase and Code execution phase. 

// Sabse pehle "array like object" create hoga. Array like object mai indexing hoti hai hum isse index ki madad se access kr sakte hai aur isme length property bhi hogi. Its not array. so humne yaha do arguments bheje thena "Pratik" and "Maru" so yaha array like object mai yeh store hojaege. aur uske baad fName ki value 1st argument k equal set hogi and 2nd argument ki value lName k equal set hogi. Aur phir yaha local memory creation phase k samay myVar ki value uninitialized rahegi and badme set hojaega during code execution phase. same things apply to fullName. and then getting the vaue of the fullName it will return fullName and this fullName will come out of the function execution phase and this value is given to the personName. Means personName ki value set hogayi. .😉 

// 5th line :- yaha print kardega value ie :- personName 
// Code executed successfully without any error. Agar error hota tho compile karne k waqt hi aa jata becoz its compiled language. 



