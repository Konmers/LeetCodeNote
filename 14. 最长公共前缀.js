/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    //先找出数组元素个数
    //找出数组中元素中 长度最长的值
    //双重循环 外循环 数组长度
    //内循环 数组元素最长长度
    let publicVal = strs[0];
    //1.
    // for(var i=0;i<strs.length;i++)
    // {
    //     let OnVal = strs[i];
    //     let lens = strs[i].length;
    //     let mid = "";
    //     for(var j=0;j<lens;j++)
    //     {
    //         if(OnVal.substring(j,j+1) == publicVal.substring(j,j+1))
    //         {
    //             mid+=OnVal.substring(j,j+1)
    //         }
    //         else break;
    //     }
    //     publicVal = publicVal == mid?publicVal:mid;
    // }

    //2.
    // for(var i=0;i<strs.length;i++)
    for (var item of strs) {
        let mid = "";
        for (var j = 0; j < item.length; j++) {
            if (item.substring(j, j + 1) == publicVal.substring(j, j + 1)) {
                mid += item.substring(j, j + 1)
            }
            else break;
        }
        publicVal = publicVal == mid ? publicVal : mid;
    }

    // console.log('publicVal ------- ',publicVal)
    return publicVal;
};