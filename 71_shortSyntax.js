// Short Syntax 

// const user1 = {
//     fName : "Pratik",
//     age : 20,
//     about : function(){
//         console.log(this.fName,this.age);
//     }
// }

// user1.about();

// This is the way we are writing our objects and all. Now what's the short way to write the above thing lets see.

const user1 = {
    fName : "Pratik",
    age : 20,
    about(){     // No need to write the key value pair. When we want to write function.
        console.log(this.fName,this.age);
    }
}

// user1.about();   // Boom guys its working. FINE. 😂

// TODO: FIXME: Now we are moving to the MOST IMPORTANT topic of the javascript. OOPS and all. So please from now onwards. Carefully understand this things.... firstly we will uderstand right now what problem we are facing / kya kamiya hai humare code mai. Abhi thodi der mai hum sikhege proto, prototype, class, etc.... 
// And as a javascript developer yeh chije humae ani hi ani chaiye. 
// And 99% developers don't know how this things are working. So if you learn this you will be in 1% 😲. Just kidding 😆. Padh ache se abhi 🐱‍🏍.


