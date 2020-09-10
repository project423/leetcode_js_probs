// Given a binary array, find the maximum number of consecutive 1s in this array.

// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.

//sliding window
function findMaxConsecutiveOnes(nums){
    let count = 0;
    let maxCount = 0;
    for(let i = 0; i < nums.length; i++){
        let number = nums[i]
        if(number === 1){
            count += 1
            if(count > maxCount){
                maxCount = count
            }
        }else{
        count = 0
        }        
    }
    return maxCount
}

// console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
console.log(findMaxConsecutiveOnes([1]))