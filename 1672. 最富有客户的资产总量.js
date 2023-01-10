/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0
    //2.
    // accounts.map(item=>{
    //     let middVal = 0;
    //     for(var i=0;i<item.length;i++)
    //     {
    //         middVal+=item[i]
    //     }
    //     max = max<middVal?middVal:max;
    // })

    //2.
    accounts.map(item => {
        let middVal = 0;
        item.filter(function (items) {
            middVal += items;
        });
        max = max < middVal ? middVal : max;
    })
    return max;
};