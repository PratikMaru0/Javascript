// From now onwards we are starting Part 2 of the JavaScript tutorial in which we'll learn 
// 1). How JavaScript works.
// 2). DOM (Document Object Model)

// timestamp : 03:00

// JavaScript is the compiled language. 
// Compiled language means :- compiler will scan the whole code once and then it will execute. There is interpreted language also like python in which each line is executed one by one.(no scaning happens).


// Compilation phase in JavaScript 
// 1). Tokenizing / Lexing.
// 2). Parsing.
// 3). Code Generation. (Executable code) 

// Tokenizing means :- Actual Code is divided into small pieces (chunks) and us chunks ko hum bolte hai tokens.
// Parsing :- Parsing humare chunks ko samaj k ek chij hai "Abstract Syntax tree" woh banta hai. 
// Code Generation :- So is "Abstract Syntax tree" ki help se humae ek executable format mai ek code generate hota hai jisse hum execute kr sakte hai. 

// So yeh sabh abhi out of scope hai. Just for information bata dia.

// Now Question :- Why to compile why not interprete. 
// Dekho ECMAScript k official documentation mai aisa nhi likha hai ki code ko compile karna hai. But aisa jarur likha hai ki code execution k pehle code ki early error checking honi chaiye aur sath mai jo variable hai code mai uska appropriate scope kya hai / behaviour kya hai woh bhi code k execution k pehle pata hona chaiye in short (DASV :- Determining Appropriate Scope for the Variable.)

// In simple words :- Javascript ek compiled language hai. Jisme code ko compiler ek baar scan karta hai before execution so that koi bhi error na hoo aur variables ka scope or behaviour pata ho beforehand code execution k pehle. and we know compilation mai 3 phase hotae hai. 
// 1). Tokenizing/ Lexing
// 2). Parsing 
// 3). Code Generation

// So compilation k liye Official documentation mai proper tarika nhi bataya hai abhi tak so different different browser ki different different technique ho sakti hai for compilation of the code. 

// Early error checking. 
// console.log("Hello");
// console.log("Bye");
// const name = ,"Prari";   // See this line will give you an error without executing above 2 print statement line. 
// Becoz its compiled language. If it was interpreted language then its going to print above 2 line and then it will give error. 

// DASV :- (Determining Appropriate Scope for the Variable)
// So why D.A.S.V so that we can get to know the scope of the variable, kidhar belong karta hai , uska jagah kidhar hai in memory etc.... before execution . 

// And yeh kaise hota hai lets see....
// Jabhi bhi code parse hota haina toh woh dekh leta hai for eg :- in above code "name" variable ussse dekhega ek hi variable hai code mai aur woh kaha hai (like is it is in function ? No its not in function.) So jo bhi variable / code function k andar nhi hota toh woh global scope mai hota hai. Its known as global variable. So at the time of D.A.S.V JavaScript ko pata hoga instructions (jo humne abhi disuss kia) but at this time variable nhi banega. Buss sirf information hogi. 

// Believe me itna information koi bhi interview mai nhi puchege but for knowledge purpose yeh chije pata honi jaruri hai.

// So humne yeh chije dekh li ache se 
// 1). Compilation phase
    // => Early Error Checking 
    // => Determining Appropriate Scope for the Variable. 

// Now comes 2nd phase. 
// 2). Code Execution Phase 
    // => In JS code executes inside Execution context. 

// JavaScript mai jitna bhi code hota hai woh Execution context mai hi execute hota hai. Matlab code ko execute karne k liye humae execution context create karna hoga. So sabse pehle jo execution context create hota hai usse hum bolte hai "global execution context".  

// Global Execution Context Creation steps :-
// 1). Creation phase. (Matlab global execution Context) bhi toh create hogana toh uska creation phase is this.
// 2). Code Execution Phase.

// TODO: FIXME: Must watch :- Bhai plz watch video to know how JavaScript works. Highly recommend. 2x speed me dekhle pr plz dekhle 20 min se jyada nhi lagna (Promise). 

// JavaScript is a Synchronous Programming language :- Now whats synchronous programming language. Synchronous programming language is the language that executes code line by line if line-3 is taking time so it will not jump to line-4 to execute the rest of the code. No in synchronous jabhi 3rd line puri tarike se execute nhi hojati yeh 4th line pe nhi ja sakta. So this is the synchronous behaviour of the programming language. 

// In Interview if someone asks is JavaScript is the synchronous programming lang or Asynchronous programming lang ? 
// Ans :- JavaScript is the synchronous programming language and its single threaded language means only one thread will execute our JS code. 



