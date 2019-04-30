/*
给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"

示例 2:

输入: a = "1010", b = "1011"
输出: "10101"

*/




/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //直接用parseInt会溢出，所以按照题意遍历，使用变量c记录是否进位；
    //c>0只有一种情况，就是在两个字符串长度相等，且相加最高位有进位的情况；
    let arrA = a.split('')
    let arrB = b.split('')
    let len = arrA.length < arrB.length ? arrB.length : arrA.length
    let c = 0
    let result = ''

    for(let i = len - 1; i >= 0 || c > 0; i--) {
        
        let curA = arrA.pop()
        let curB = arrB.pop()

        if(curA) {
            c += parseInt(curA)
        }
        if(curB) {
            c += parseInt(curB)
        }
        result = (c % 2) + result
        c = c > 1 ? 1 : 0
    }
    return result
};
