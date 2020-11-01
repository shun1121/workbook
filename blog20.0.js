function floor(num) {
    let n = num
    while (true) { //trueのあいだまわり続ける
        if (n < 1) {// n が小数ならば
            return num - n　//計算結果 - 小数　－＞　結果 num の整数が残る
        }
        n -= 1　// n = n - 1
    } //再帰みたいな感じ？ n-= 1を回し続けてn < 1で返り値を返す。
}
function round(num) {
    return (num - floor(num)) > 0 ? floor(num) + 1 : floor(num)
    //floor(num)は最初に作った関数。整数を返す。条件が0より大きいときfloor(num) + 1、違うときfloor(num)
}
function ceil(num) {
    return (num - floor(num)) < 0.5 ? floor(num) : floor(num) + 1
    //計算結果からfloor(num)（整数）を引いたものが0.5より小さいときfloor(num)、大きいときfloor(num) + 1
}
const a = process.argv[2]
const b = process.argv[3]
console.log(a / b)
console.log(floor(a / b))
console.log(round(a / b))
console.log(ceil(a / b))
