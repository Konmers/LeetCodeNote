/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    //首先 判断 ransomNote 的长度
    //循环 以 ransomNote 长度为最大 

    let magazines = magazine;
    let bool = true;
    for (var i = 0; i < ransomNote.length; i++) {
        let midVal = ransomNote.substring(i, i + 1);
        // console.log('midVal  ------------  ',midVal);
        // console.log('magazines  ------------  ',magazines);
        if (magazines.indexOf(midVal) !== -1) {
            // console.log(11111111)
            let indexVal = magazines.indexOf(midVal);
            // console.log('indexVal  ------------  ',indexVal);
            if (indexVal == 0) {
                magazines = magazines.substring(indexVal + 1, magazines.length);
            }
            else {
                magazines = magazines.substring(0, indexVal) + magazines.substring(indexVal + 1, magazines.length);
            }
            // console.log('magazines    2------------  ',magazines);
        }
        else bool = false;
    }
    // console.log('bool --------  ',bool)
    return bool;
};