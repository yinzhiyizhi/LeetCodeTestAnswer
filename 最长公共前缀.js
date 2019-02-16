/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"

示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。

说明:

所有输入只包含小写字母 a-z 。
*/




/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let firstStr=strs[0];
    let _str="";
    if(!strs.length){
        return _str;
    }
    for(let i=0;i<firstStr.length;i++){
        for(let j=1;j<strs.length;j++){
            if(firstStr[i]!=strs[j][i]){
                return _str;
            }            
        }
        _str+=firstStr[i];
    }
    return _str;
};
