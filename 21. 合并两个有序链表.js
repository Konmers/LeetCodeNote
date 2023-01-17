/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // console.log('list1  ----------  ', list1);
    // console.log('list2  ----------  ', list2);
    //链表 合并
    //新建一个 链表
    //
    let res = new ListNode(0);//先往里面放了个无关数
    // console.log('res ----------  ', res);
    let cur = res;
    // console.log('cur ----------  ', cur);

    while (list1 && list2) {
        // console.log('list1.val ----------  ', list1.val);
        // console.log('list2.val ----------  ', list2.val);
        if (list1.val < list2.val) {//法二：直接每次判断两边的节点值，cur.next指向较小值，更新cur的位置，list前进
            // console.log('list1 ----------  ', list1);
            // console.log('list1.next ----------  ', list1.next);
            cur.next = list1;
            list1 = list1.next;
        } else {
            // console.log('list2 ----------  ', list2);
            // console.log('list2.next ----------  ', list2.next);
            cur.next = list2;
            list2 = list2.next
        }
        cur = cur.next;
    }
    // console.log('cur ----------  ', cur);
    cur.next = list1 == null ? list2 : list1;//cur.next指向剩余链表
    // console.log('res.next ----------  ', res.next);
    // console.log('res ----------  ', res);
    return res.next; //最开始的节点不属于两个链表，返回下一个节点组成的有序链表

};