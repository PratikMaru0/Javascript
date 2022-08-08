// Splice method 
// TODO: Important topic in JavaScript kafi jagah pe use kia hoga iss splice method ko.
// Splice method 2 chijo k liye kaam ata hai 1). Jabhi bhi array mai se kuch delete karna hota hai ya phir 2). Jabhi array mai kuch insert karna hota hai.

// Start , delete , insert 

let arr = [1,2,3,4,5];

// delete.
// here 1st argument is 2 means from which pos you want to start deleting.
// here 2nd argument ie: 1 means how many element you want to delete. 
// arr.splice(3,1);    // Note: This will change the original array. So use it properly. 
// console.log(arr);

// Note: Hum jo item delete kr rhe haina woh humae return mai bhi dega kya delete kr rhe ho tume
// const deletedPart = arr.splice(3,2);   
// console.log(deletedPart);

// Lets see insert 
// Here 1st argument ie: 1 means from which index you want to start 
// here 2nd argument ie: 0 means I dont want to delete anything.
// ere 3rd argument ie: "Inserted Item" means what I want to insert It can be number also. 
// arr.splice(1,0,"Inserted Item");  // Inserted succensfully It can be number also.
// arr.splice(1,0,30);  // Inserted succensfully It can be number also.
// console.log(arr);

// Now lets see how insert and delete will work together. Simply means replace karna
// Lets seee..... 🐱‍🏍
// Here 1st argument means ie: 3 means want to start with index 3
// Here 1st argument means ie: 1 means want to delete 1 item from an array
// Here 1st argument means ie: 100 means I want to insert that item in an array at index 3. 
// arr.splice(3,1,100);
// console.log(arr);

// NOTE: Yeh delete karke return bhi kr rha hoga so we can store that deleted part also. 
// const deletePart = arr.splice(3,1,100);
// console.log(deletePart);  //😎



// I hope you understood. now lesssss gooooooooo..... 🐱‍🏍