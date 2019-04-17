/*
给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2

示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(head==null||head.next==null){
        return head;
    }
    //指针指向链表头部
    let node=head;
    while(node.next!=null){
        //比较当前节点和下一个节点的值，如果相同，则改变当前结点的next指针使其跳过下一个节点，指向下下个节点
        if(node.val==node.next.val){
            node.next=node.next.next;
        }
        else{
            node=node.next;
        }
    }
    return head;
    return head;
};
