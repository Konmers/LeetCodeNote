/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let cont = [];
    for (let i = 0, vals = 0; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            vals += nums[j]
        }
        cont.push(vals)
        vals = 0
    }
    return cont
};