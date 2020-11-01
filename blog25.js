function isFilledArray(arr, val){
    let cnt = 0
    let result
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            cnt++
        }

        if (cnt === arr.length) {
            result = true
        } else {
            result = false
        }
    }
    return result
}
console.log(isFilledArray([1,1,1], 1))
console.log(isFilledArray([2,2,2], 2))
console.log(isFilledArray([1,1,0], 1))

/*
duplicate関数からヒントを得た。
配列の中で関数の第二引数とマッチするものがいくつあるか数えて
それが配列の長さと同じ数字だったら全部数字が一緒だということ

上の例だと、配列を回ってvalと一致したらカウントを足す。
ー＞１つ目がvalと一致したらcnt=1、2つ目が一致したらcnt=2、
３つ目がvalと一致したらcnt=3 ＜－ これが配列の長さと一致したら、配列の中身は全部valと同じ
ー＞true そうじゃなければfalse
*/

