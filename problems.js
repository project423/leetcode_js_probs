// Given a binary array, find the maximum number of consecutive 1s in this array.

// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

//1
//sliding window
// function findMaxConsecutiveOnes(nums){
//     let count = 0;
//     let maxCount = 0;
//     for(let i = 0; i < nums.length; i++){
//         let number = nums[i]
//         if(number === 1){
//             count += 1
//             if(count > maxCount){
//                 maxCount = count
//             }
//         }else{
//         count = 0
//         }        
//     }
//     return maxCount
// }

// // console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
// console.log(findMaxConsecutiveOnes([1]))

// 2
// Find Numbers with Even Number of Digits
// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.


function findNumbers(nums){
    let evenCount = 0;
    for(num of nums){
        let count = 0;
        while(num !=0){
            num = Math.floor(num / 10);
            count+=1;
        }        
        if(count % 2 == 0){
            evenCount+=1;
        }        
    }
    return evenCount;
}

console.log(findNumbers([12,345,2,6,7896])) // 2
console.log(findNumbers([437,315,322,431,686,264,442])) // should be 0
