/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //1.
    // let reval = true;
    // let reX= x.toString()
    // if(reX.length==0) {return false;}
    // console.log('reX ------------',reX)
    // for(var i=0,j=reX.length-1;i<reX.length;i++)
    // {
    //     if(reX[i]!=reX[j])
    //     {
    //         reval = false;
    //         break;
    //     } else j--
    // }
    // return reval;

    //2.
    if (x < 0) return false;
    let bVal = 0;
    let tmp = x;
    while (x) {
        bVal = bVal * 10 + Math.floor(x % 10);
        x = Math.floor(x / 10);
    }
    return tmp == bVal;
};