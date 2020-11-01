const arg = process.argv.slice(2)
function unique(array) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (result.includes(array[i]) !== true) {//ここでif (array.includes(array[i]) !== true)としていたのが間違いの原因
            result.push(array[i])
        }
    }
    return result
}
console.log(unique(arg))
/*
＜argの中（[ 'a', 'b', 'c', 'b', 'd', 'e', 'a', 'f', 'c' ]）を順にみていく＞
i = 0のとき つまり['a']
result --> 空配列[]なので重複する値なし　－＞　arg (array)配列のindex[0]の値をプッシュ

i = 1のとき つまり['b']
result --> ['a']なので重複する値なし　－＞　arg (array)配列のindex[1]の値をプッシュ

i = 2のとき つまり['c']
result --> ['a','b']なので重複する値なし　－＞　arg (array)配列のindex[2]の値をプッシュ

i = 3のとき つまり['b']
result --> ['a','b','c']なので'b'で重複する　－＞　arg (array)配列のindex[3]の値はプッシュしない
*/



