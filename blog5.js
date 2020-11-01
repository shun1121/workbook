const arg1 = Number(process.argv[2])
const arg2 = Number(process.argv[3])

//割り算の商を返す関数
function division(num, div) {
    for (let i = 1; i < num; i++) {//arg2の値とiの掛け算でarg1を超えないときiを返したい
        if (num < i*div) {//numよりi*divが大きくなったとき
            return i-1    //大きくなったひとつ前のiの値を返す ＜－ 割り算の商
        }
     }
}
//余りを返す関数
function remainder(num, div) {
    let f = division(num, div)
    return num-(f*div)    //商を返す一つ目の関数×divをnum(割られる数(一番でかい))から引く
}
console.log(`${arg1}÷${arg2} = ${division(arg1, arg2)}余り${remainder(arg1, arg2)}`)

/*
ヒントがないと難しい。
一つ目の関数でiの範囲がnumまででいいのか？
*/
