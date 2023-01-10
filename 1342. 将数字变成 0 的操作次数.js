/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let cont = 0;//次数
    while (num) {
        //1.
        // if(num%2 ==0)
        // {
        //     num/=2;
        // }
        // else if(num%2 ==1)
        //     num-=1;

        //2.
        // switch(num%2){
        //     case 0:num/=2;break;
        //     case 1:num-=1;break;
        // }

        //3.
        num = num % 2 == 0 ? num /= 2 : num -= 1;
        cont++;
    }
    return cont;
};