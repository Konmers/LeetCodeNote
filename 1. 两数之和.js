/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let cont = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if ((nums[i] + nums[j]) == target) {
                // cont.push(i);
                // cont.push(j);
                cont = [i, j];
                break;
            }
        }
    }
    return cont
};