/*
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function(root) {
    let res = [];
    helper(root, 0, res);
    return res.reverse();
};

var helper = function(root, level, res) {
    //如果不存在，返回
    if(!root) return;
    if(!res[level]) res[level] = [];
    res[level].push(root.val);
    //分别向左右进行遍历
    helper(root.left, level + 1, res);
    helper(root.right, level + 1, res);
};
