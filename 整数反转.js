/*
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321

 示例 2:

输入: -123
输出: -321

示例 3:

输入: 120
输出: 21

注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

*/




/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let int_max=2147483647;
    let int_min=-2147483648;
    let answer=0;
    while(x!=0){
        let temp=answer*10+(x%10);
        if(parseInt(temp/10)!=answer){
            return 0;
        }
        answer=temp;
        x=parseInt(x/10);
    }
    
    if(answer>int_max||answer<int_min){
        answer=0;
    }
    return answer;
};
