/*
まずどんな関数をコールバックとして作るか。
返り値を絞り込んだ後の配列を作る関数やな。
function check() {
    //let array = []
    for (let j = 2; j < process.argv.length; j++) {
        if (process.argv[j] >= 10 && process.argv[j] <= 30) {
            return true
        } else {
            return false
        }
    }
}
console.log(check())
*/

//コマンドライン引数を配列に入れる ー＞ 最終的に呼び出すfilter関数の第１引数としてコールされる
let arr = []
    for (let i = 2; i < process.argv.length; i++) {
        let arg = process.argv[i]
        let arg2 = Number(arg)
        arr.push(arg2)
    }   
//評価関数 ー＞ 最終的に呼び出すfilter関数の第２引数としてコールされる
const eval = function (num) {
    for (let j = 2; j < process.argv.length; j++) {//コマンドライン引数の<数>だけまわす
        if (num >= 10 && num <= 30) {
            return true
        } else {
            return false
        }
    }
}

//filter関数 ー＞ 引数は、どんな型の引数なのかイメージしやすい名前にする
function filter (array, callback) {//今回arrayにはarr、callbackにはcheck関数がはいる
    let array2 = []
    for (let h = 0; h < array.length; h++) {
        if (callback(array[h]) === true) {
            //=== trueがなくても同じ意味の条件になる
            //callbackはcheck関数なので引数を持つ
            //引数にfilter関数の第１引数をいれる
            //つまり配列を入れることになるのでindex番号を指定する
            //この条件にする理由は評価関数で一番初めの配列を処理したいから
            array2.push(array[h])
        }
    }
    return array2
}
console.log(filter(arr, eval))

