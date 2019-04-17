/*
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5

*/

/*
解题思路：

这道题是要将有序数组转为二叉搜索树，
所谓二叉搜索树，
是一种始终满足左<根<右（另外一种更直白的解释，二叉搜索树：空树或者二叉树的所有节点比他的左子节点大，比他的右子节点小。）的特性的二叉树，
如果将二叉搜索树按中序遍历的话，得到的就是一个有序数组了。
那么反过来，我们可以得知，根节点应该是有序数组的中间点，
从中间点分开为左右两个有序数组，在分别找出其中间点作为原中间点的左右两个子节点，这不就是二分查找法的核心思想么。
所以这道题考的就是二分查找法。
*/



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    return buildTree(nums, 0, nums.length - 1);
};

var buildTree = function(nums, ll, rr) {
    if(ll > rr) return null;
    let mid = Math.ceil((ll + rr) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = buildTree(nums, ll, mid - 1);
    root.right = buildTree(nums, mid + 1, rr);
    return root;
};
