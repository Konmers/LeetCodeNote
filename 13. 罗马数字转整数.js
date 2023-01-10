/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let num = 0;
    let mapss = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        VL: 45,
        IL: 49,
        L: 50,
        XC: 90,
        VC: 95,
        IC: 99,
        C: 100,
        ID: 499,
        VD: 495,
        XD: 490,
        LD: 450,
        CD: 400,
        D: 500,
        CM: 900,
        LM: 950,
        XM: 990,
        VM: 995,
        IM: 999,
        M: 1000,
    };
    //1. 字符串转数组在进行循环比较输出
    // let srr = s.split("");
    // for(var i=0;i<srr.length;i++)
    // {
    //     let val = 0 
    //     Object.keys(mapss).forEach(item=>{
    //         if((srr[i]+srr[i+1]) == item)
    //         {
    //             val = mapss[item]; 
    //         }
    //     });
    //     if(val)
    //     {
    //         num+=val;
    //         i++;
    //     }
    //     else
    //     {
    //         Object.keys(mapss).forEach(items=>{
    //                 if(srr[i]==items)
    //                 {
    //                     num+= mapss[items];
    //                 }
    //             }
    //         );
    //     }
    // }

    //2.字符串直接截断取每个值进行比较
    for (var i = 0; i < s.length;) {
        if (mapss[s.substring(i, i + 2)]) {
            // let midVal = s.substring(i,i+2);
            // console.log("midVal ------------  ",midVal)
            // console.log("mapss[midVal] ------------  ",mapss[midVal])
            // num+=mapss[midVal];

            num += mapss[s.substring(i, i + 2)];
            i += 2;
        }
        else {
            // let midVals = s.substring(i,i+1);
            // console.log("midVals ------------  ",midVals)
            // console.log("mapss[midVals] ------------  ",mapss[midVals])
            // num+=mapss[midVals];

            num += mapss[s.substring(i, i + 1)];
            i++;
        }
    }
    return num;
};

