/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**  双指针循环
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    // console.log('head --------------  ',head)
    let low = fast = head
    // console.log('low --------------  ',low)
    // console.log('fast --------------  ',fast)
    while (fast && fast.next) {//快慢指针遍历，直到快指针到达最后
        low = low.next;
        // console.log('low 1--------------  ',low)
        fast = fast.next.next;
        // console.log('fast 1--------------  ',low)
    }
    return low;
};