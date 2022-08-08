// using const for creating an Array 

const arr = [1,2,3,4];
// arr[0] = 100;   // changing the elements values. 
// console.log(arr); // so now u can see its changing values but yeh to constant haina so why its values are changing it should not be happen right. as same case with the push method also its changing the original array
// arr.push(1001);
// console.log(arr);


// Dekho yeh jo arr haina usme address store hai aur yeh values(array) heap memory mai store hai. So yaha hum values ko change kr rhe hai. So values change ho rhi hai kya hum iske address ko change kr rhe hai nhi na so thats why its not giving error to us.  

// Now lets try to change the address off the array. 
// let arr2 = [7,6,5,4,3,2];
// arr = arr2;
// console.log(arr);   // So yeah, idhar its giving us error becoz we are changing the address of an array not the values of an array. 

// 90%  of developers use const to declare an array. So its better practice to use const. Taki humara code kahi problem na create kare agae jakae. 
// Jabhi bhi reference data type use karo tabhi const use kia karo. Simple.... 

// While loop in arr 

// let arrs = [1,2,3,4,5,6,7,8,9];
// let i = 0;
// while(i != arrs.length){
//     console.log(arrs[i]);
//     i++;
// }