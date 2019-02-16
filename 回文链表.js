/*
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false

示例 2:

输入: 1->2->2->1
输出: true

进阶：
你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

*/




/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let ans=[];
    while(head){
        let temp=head.val;
        ans.push(temp);
        head=head.next;
    }
    for(let i=0;i<ans.length;i++){
        if(ans[i]!==ans[ans.length-1-i]){
            return false;
        }
    }
    return true;
};
