// Sets (it is iterable)
// Stores data. 
// Sets also has own methods.
// No index-based access
// Order is not guaranteed.
// unique items only (no duplicate items are allowed)

// This is the syntax to make set in JavaScript.
// const numbers = new Set([10,20,30]);

// Now we know its iterable  (Hum jyada tar set ko empty rakhte hai aur phir .add method se add karte hai numbers ko)
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(1);  // It will not allow duplicate values. Isse set ignore kr dega. Stores only unique item.

// console.log(numbers);

// Iterable (Yes its iterable becoz we can apply for-of loop here.) 
// for(let number of numbers){
//     console.log(number);
// }

// Hum isse indexed based access nhi kr sakte. 
// console.log(numbers[2]);   // Not allowed becoz yaha koi gurantee nhi hai order ki set mai randomly koi bhi order main stores hotae hai elements isliye we can't access it using index.

// const deletedNum = numbers.delete(2);
// console.log(deletedNum);   // Yeh deleted number return nhi krta sirf boolean value return karta hai agar usne item ko delete kia toh return true. agar usse item nhi mila toh return false.
// console.log(numbers);  // deleted item from set.  

// We can also do like this 
// const set2 = new Set("abc"); // Hum "abc" bhi likh sakte hai kyunki string bhi iterable hai 
// console.log(set2);

// In set we can add multiple elements of different data-type. 
// const mixed = new Set(["items1",2,true]);

// const arr = ["car","bike","cycle"];
// mixed.add(arr);
// console.log(mixed);   // Dekha humne array bhi add karlia in Set. 😂 kafi cool hai bhai yeh toh.😉

// now question comes 
// const arr1 = ["items1","items2"];
// const arr2 = ["items1","items2"];
// If we try to add above both array which has same array elements kya yeh dono add hojayege ? Becoz humae toh unique chaiye na. 
// Lets figure it out.
// mixed.add(arr1);
// mixed.add(arr2);
// console.log(mixed);  // Add hogaye. How? 😲

// Now understand how ? 
// See array mai kya store hota hai address of an array. So yaha jabhi bhi hum array bana rhe hai of same elements hum 2 naye array bana rhe hai jiske address alag alag hai. Isliye yeh dono add ho ja rhe hai. Samjha ? Haaaaa....

// const numbers = new Set([1,2,3,4]);
// console.log(numbers.has(2));  // It will return true if it has value present in the set. False if not present.


// Real world example :- Jaha IDs ki jarurat padti hai waha hm iterables ka use kr sakte hai hum.
// So this below array contains duplicate data 
const arr = [1,1,2,4,2,1,1,2,4,23,23,1,121,1];

// So to remove duplicay we can use set. 
const mySet = new Set(arr);
console.log(mySet);   // Boom we got unique items 
// console.log(mySet.length);  // we can't use length properties in set. Undefined aa jayega. 

// console.log(arr); // original array ko yeh affect nhi karega. SO CHILL.

// mySet.clear();
// set.delete(1);
// console.log(mySet);

// Now how to find length of an set. Let see. 
// let num = 0;
// for(let set of mySet){
//     num++;
// }
// console.log(num);  // Boom guys we found how to find length of an set. 