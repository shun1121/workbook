/*
let arg = process.argv.slice(2)
const arg1 = Number(arg)
console.log(typeof arg1)
*/
//number型にする
let arg2 = []
for (let h = 2; h < process.argv.length; h++) {
    let arg = process.argv[h]
    let arg1 = Number(arg)
    arg2.push(arg1)
}

const check = function(num) {
    if (num <= 20) {
        return true
    } else {
        return false
    }
}

function find (array, callback) {
    let result = undefined //始めにundefinedを定義しておく
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result = array[i] //resultが配列ならばresult.push(?)だが、今回は違うので変数に代入するだけ
            break //breakでループから抜け出す ー＞ つまり一致する値が出ればそこで終了
        }
    }
    return result //一致する値がなければ最初に定義したundefinedがリターンされる
}
console.log(find(arg2, check))
