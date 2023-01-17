/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    //自定义一个对象存储括号数组  maps
    //判断s字符串长度 true 继续     false 返回
    //循环s字符串每一个字符 是否存在 maps中    
    //存在 返回 对应的括号 在 s字符串中判断是否存在
    //否 返回

    //栈堆 先进后出
    const contData = [];
    for (var i = 0; i < s.length; i++) {
        var endVal = s[i];
        if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
            contData.push(s[i]);
        }
        else {
            // console.log('contData  ------------ ',contData);
            var starVal = contData[contData.length - 1];
            //    console.log('starVal  ------------  ',starVal);
            //    console.log('endVal  ------------  ',endVal);
            if (starVal == '(' && endVal == ')' || starVal == '{' && endVal == '}' || starVal == '[' && endVal == ']') {
                contData.pop();
                //    console.log('contData  2 ------------ ',contData);
            }
            else return false;
        }
    }
    return contData.length == 0;
};