const rect = [
    [11, 1, 8],
    [7, 5, 10],
    [2, 9, 4],
    [3, 6, 12],
]
//ヨコに足していく関数
/*
(0,0)(0,1)(0,2)
---------------> ①　　数の変化が遅いほうを１個目のforの変数にする
(1,0)(1,1)(1,2)　　　 数の変化が速いほうを２個目のforの変数にする　
---------------> ②　　
(2,0)(2,1)(2,2)
---------------> ③
(3,0)(3,1)(3,2)
---------------> ④
*/
function axisX(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j]    //sum = sum + arr[i][j]
            //console.log(sum)
        }
        arr[i].push(sum)
        //なんでNaNになるの―――？
        //一周したら中の配列の中身が増えて要素数が変わる 
        //ー＞ [j]が変わる  　×　j < arr[0].length; ＜－ は[ 11, 1, 8, 20 ]になる
    }   //つまり要素が４つに増えて２周目以降４つ目に数字が入らなくなる。
    return arr
}
console.log(axisX(rect))

//タテに足していく関数
/*
(0,0)｜(0,1)｜(0,2)｜　タテに取っていきたい
(0,0)｜(0,1)｜(0,2)｜　先に回るのは二個目のforの中
(0,0)｜(0,1)｜(0,2)｜　数の変化が遅いほうを１個目のforの変数にする
(0,0)｜(0,1)｜(0,2)｜　数の変化が速いほうを２個目のforの変数にする
　　　V　　  V　    V
     ①      ②      ③
*/
function axisY(arr) {
    let result = []
    for (let i = 0; i < arr[0].length; i++) {
        //let array = []
        let sum = 0
        for (let j = 0; j < arr.length; j++) {
            sum += arr[j][i]
            //array.push(sum)
        }
        result.push(sum)
        //console.log(result)
    }
    return result
}
console.log(axisY(rect))






