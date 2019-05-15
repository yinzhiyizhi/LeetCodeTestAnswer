/*
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2

示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
     
*/




/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    //采用牛顿迭代法
    //let r = x;
    //while (r > x / r) {
    //    r = (r + x / r) / 2;
    //}
    //return Math.floor(r);
   
    //采用幂运算符（指数运算符）
    return Math.floor(x ** 0.5);
};


//牛顿迭代服运算原理
//https://img-blog.csdn.net/20171019164040871?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY2hlbnJlbnhpYW5n/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center

