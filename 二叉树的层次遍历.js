/*
给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。

例如:
给定二叉树: [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]

*/




/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    /*
    思路：
        二叉树的层序遍历要用到迭代法，设置一个队列queue（其实就是数组），把根节点加入队列中，当队列不会空时，出队列元素，然后把这个元素      的子结点加入到队列中。
    */
    let queue=[];
    let result=[];
    if(root!==null){
        queue.push(root);
    }
    while(queue.length!==0){
        let level=[];
        let len=queue.length;
        for(let i=0;i<len;i++){
            let currentNode=queue.shift();
            level.push(currentNode.val);
            if(currentNode.left!==null) queue.push(currentNode.left);
            if(currentNode.right!==null) queue.push(currentNode.right);
        }
        result.push(level);
    }
    return result;
};
