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

// function findNumbers(nums){
//     let evenCount = 0;
//     for(num of nums){
//         let count = 0;
//         while(num !=0){
//             num = Math.floor(num / 10);
//             count+=1;
//         }
//         if(count % 2 == 0){
//             evenCount+=1;
//         }
//     }
//     return evenCount;
// }

// console.log(findNumbers([12,345,2,6,7896])) // 2
// console.log(findNumbers([437,315,322,431,686,264,442])) // should be 0

//3
// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

// Input: [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// function sortedSquares(A){
//     for(let i = 0; i < A.length; i++){
//         number = A[i]
//         A[i] = A[i] * A[i]
//     }
//     return A.sort((a, b) => a-b)
// }

// console.log(sortedSquares([-4,-1,0,3,10]))

//4

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

// Input: [1,0,2,3,0,4,5,0]
// Output: null
// Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

// var duplicateZeros = function(arr) {
//     // loops through each element in the array starting at index 0
//     for(let i = 0; i < arr.length; i++){
//         //finds the 0s in the arraay
//         if(arr[i] == 0){
//             // first add in an extra 0 at the index of the 0 found
//             arr.splice(i,0,0) //arr.splice(index of where to insert, how many elements to delete, what to insert)
//             i++; //adds one to the overall loop so the 0 just added is not found again by the loop right after
//             arr.pop()//removes the last element from the array  to keep the same array length
//         }
//     }
// };

// console.log(duplicateZeros([1,0,2,3,0,4,5,0]))

// const arr = [1,0,2,3]
// console.log(arr.splice(0,0,'0'))
// console.log(arr)

//5
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3
var merge = function (nums1, m, nums2, n) {
    //create two pointers
    let first = m - 1,
        second = n -1;
    //loop through the first array starting at the end and going to the beginning 
    for(let i = m + n -1; i >=0; i--){
        // if second goes lower than 0 then the loop has iterated over the entire 2nd array 
        if(second < 0) break;

        if(nums1[first] > nums2[second]){
            nums1[i] = nums1[first];
            first--;
        }else{
            nums1[i] = nums2[second];
            second--;
        }
    }
    console.log(nums1)
    
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));


// first                 second
// 1,2,3,0,0,0           2,5,6
// first
//    2 > 6
//    no
//    so
//    nums[i] = nums2[second]
