// Now lets see how to clone an array. Because hum nhi chahte ek arr ki value change hone pr dusre arr ki value change hojaye becoz of Reference data type. 

// let arr1 = [1,2,3,4,5,6];
// let arr2 = [1,2,3,4,5,6];
// console.log(arr1 === arr2);  // they are not same becoz both of them are having different addresses. this is the 1 way to clone an array.
// Now if we push item in an arr1 it wont affect the arr1
// arr2.push(10);
// console.log(arr1);
// console.log(arr2);   // Hurray, So yeah we have successfully cloned our array. 

// Now suppose you have an array in which it consists of lakhs or thousands of items then its possible to apply above method to clone an array ? Big NO No. this is not a right way. Lets see 2nd way yo do the cloning of an Array. Lets seeeee.

// let array1 = [1,2,3,4,5,6,7,8];
// let array2 = array1.slice(0,array1.length);
// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);   // And Boom we have did it successsfully. Cloned successfully. Awesome!!!!


// 3rd way to clone an array 
// let array01 = [1,2,3,4,5,6,7,8];
// let array02 = [].concat(array01);
// console.log(array01);
// console.log(array02);
// console.log(array01 === array02);