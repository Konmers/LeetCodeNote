/**
 * @param {number[]} bloomDay
 * @param {number} m 天数
 * @param {number} k  朵/天
 * @return {number}
 */
var minDays = function (bloomDay, m, k) {
    //二分查找法  计算出数组所有值的中间值  然后从数组中取二分之一的值开始比较，如果中间值小于那就往前找，大于就往后找
    //数组中最大值
    let high = Math.max.apply(null, bloomDay);
    //数组中最小值
    let low = Math.min.apply(null, bloomDay);
    // console.log('high ------------  ',high)
    // console.log('low -----------  ',low)
    if (m * k > bloomDay.length) {
        return -1
    }
    //二分查找 外循环 用 while 如果中间值小于那就往前找，大于就往后找
    while (low < high) {
        //计算出数组所有值的中间值
        let days = Math.floor((high - low) / 2) + low;
        // console.log('days -----------  ',days)
        //通过 low high 不断缩小中间值范围
        if (checkMake(bloomDay, days, m, k)) {
            //true 判断当前 days就是最大值 替换high值  范围就是 low -> days
            high = days;
        }
        else {
            //false 判断当前 days并非最大值 那就low取days值 范围就是 days->high
            low = days + 1;
        }
        // console.log('high   2 ------------  ',high)
        // console.log('low    2 -----------  ',low)
    }
    return low
};

let checkMake = (bloomDay, days, m, k) => {
    // console.log('checkMake bloomDay -------- ',bloomDay)//数组 花园
    // console.log('checkMake days -------- ',days)//中间值
    // console.log('checkMake m -------- ',m)//花束固定值
    // console.log('checkMake k -------- ',k)//花朵固定值 相邻花朵说明 数组中连续几个值符合要求才能组成花束
    let length = bloomDay.length;//获取数组长度
    let flowers = 0;//记录花朵
    let bouquets = 0;//记录花束 
    for (var i = 0; i < length; i++) {
        if (bloomDay[i] <= days) {
            flowers++;//值 符合 中间值要求
            if (flowers == k)//记录的相邻花朵== k花朵固定值
            {
                bouquets++;//当花朵数量到达固定数量 花束加1
                flowers = 0;//花朵计数归零 重新计数
            }
        }
        else {
            flowers = 0;//当前数组值不符合中间值 直接归零 重新计数
        }
    }
    // console.log('checkMake bouquets -------- ',bouquets)
    // console.log('checkMake bouquets == m -------- ',bouquets == m)
    return bouquets >= m;
}