/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    //二分查找法
    let maxVal = 0;
    // console.log("nums  -------  ",nums);
    // console.log("k  -------  ",k);
    if (nums.length == 1 && k == 1) {
        maxVal = nums[0];
        return maxVal;
    }
    // nums.sort((x,y)=> x-y);//数组 正序 升序   
    nums.sort((x, y) => y - x);//数组 倒序 降序  
    let midIndex = Math.floor(nums.length / 2);
    // console.log("midIndex  -------  ",midIndex);
    let maxlens = midIndex > k ? midIndex : nums.length;
    // console.log("maxlens  -------  ",maxlens);
    let minlens = midIndex > k ? 0 : midIndex;
    // console.log("minlens  -------  ",minlens);
    for (var i = minlens; i <= maxlens; i++) {
        // console.log("i  -------  ",i);
        if (i == k) {
            // console.log('nums[i] ---------  ',nums[i])
            maxVal = nums[i - 1];
            break;
        }
    }
    // console.log('maxVal ---------  ',maxVal)
    return maxVal;
};