// console.log("Helo"); // Just for checking purpose.

// There a 3 ways to link an JavaScript file.

// 1st way (Don't use)
// <script src="./94_linkingJavascriptFile.js"></script>
// Description :- Isse tarike ko hum katai use nhi karte kyunki jabhi bhi browser line wise code ko execute karta hai and yeh wala line aa gaya toh browser is file k path mai jayega and pura ka pura JavaScript file ko execute karega. Now jabhi bhi yeh Js file ko execute kr rha hai Yeh jab tak pura execute nhi hiojata tab tak yeh niche wale html file k code ko execute nhi karega. So if JS file k andar humne koi operation operform kara hai jisme niche html file k code ki jarurat hai tabhi js file ko nhi milega kyunki browser ne tho niche html wala code toh execute kara hi nhi so it will give an error. So PLZ DONT USE THIS METHOD TO LINK JS FILE.

// 2nd way. 
// Yeh sahi tarika hai link karne ka becoz jabhi bhi browser JS linkage file tak pahuchjega toh sara ka sara html code execute ho chuka hoga and Suppose Js file mai kisi html value,property ki jarurat padi toh woh successfully execute hojayega humae error nhi milega. So you can use this. So isme bhi ek problem hai joki hai speed. Isme time jyada lagega. Means sabse pehle html file execute hogi uske baad Js file execute hogi. Yeh Synchronous behaviour mmai kaam hoga. Kya aisa kuch hai jo kaam parallel ho. Means html and JS code ek sath execute ho? Haan hai aisa tarika lets see in 3rd way.

// 3rd way.
// In this way dono kaam ek sath hoga. Parsing bhi hogi and loading bhi ek saath.
// Now suppose there are 100 lines of code in HTML and at executing 50th line (HTML) JS puri file parse hogayi now browser will stop parsing of the html file and it will execute JS file. And yaha error anae ke chances jyada hai kyu becoz humara HTML ka file adha hi parse hua hai and JS file puri ki puri file parse hogayi. Which can create error.
// So this async is also not the good practice to link the JS file in HTML doc.

// 4th way.  (USE THIS ONLY.)
// In this method same step. Browser started parsing html code and usse JS linkage code mila but yaha toh "defer" likha hai, So Abhi yeh browser parsing k sath sath JS file ko load karna bhi chalu karte hai and Browser will start loading JS file. Now in between suppose loading of JS file is done and HTML code is still not parsed fully. So abhi browser kya karega html code ko pura parse karega and JS file ko badme pura html code parse honae k baad execute karega. Becoz JS file pehle hi load ho chuki thi so yeh time save kr rha hai. So this is best method to use. 