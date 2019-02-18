/*
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

    节点的左子树只包含小于当前节点的数。
    节点的右子树只包含大于当前节点的数。
    所有左子树和右子树自身必须也是二叉搜索树。

示例 1:

输入:
    2
   / \
  1   3
输出: true

示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。

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
 * @return {boolean}
 */

/*
这道题的关键点在于，一个节点的所有左侧的节点，包括左节点的所有右节点，都不能大于它本身的值；所有右侧节点，包括右节点的左节点，也都不能小于它本身的值。
因此，节点（除了跟节点这样的特殊节点）其实上可以取值的范围是一个有限的区间。这就要求我们的递归函数需要3个参数，除了节点本身，还必须包括可以取得的最大值和最小值两个参数。
*/

var isValidBST = function(root) {
    return isValid(root,Infinity,-Infinity);
    
    function isValid(node,max,min){
        if(node===null) return true;
        if(node.val>=max||node.val<=min) return false;
        return isValid(node.left,node.val,min) && isValid(node.right,max,node.val);
    }
};
