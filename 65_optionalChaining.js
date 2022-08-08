// Optional Chaining   ( ?. )

// So dhyan se samaj isko 
// Dekh koi chij hai jo ki thodi samay me ane wali hai and usko hum anae k pehle access karna chahe to woh error degi jo ki nhi hona chaie kyunki woh thodi samay k baad anae wali hai Toh hum error tho nhi anae de sakkte hai. 
// Lets see eg:- 
const user = {
    fName : "Pratik",
    // address : {houseNo:1222}
}

// So 
console.log(user.address); // Output: Undefined 
// console.log(user.address.houseNo); // Output: Error (Humae error nhi chaiye undefined dede chalega kyuki thodi der mai ajayega iska value.) Yeh jab hum react padhege tabhi yeh sari chije ati hai.  

// So lets do something jisse access karne pr error na aye undefined aa jaye.
console.log(user?.address?.houseNo);    // Boom we got undefined. here ?. means agar iska value hai toh do warna undefined return kardo. Simple. Got it ? Yeah . 😆  
// ?. Means if user exists then return value if not return undefined. 

// TODO: Iska main use hum nested objects wagere mai use karte hai.
