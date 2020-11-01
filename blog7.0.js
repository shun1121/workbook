const argv = []
for (let i = 2; i < process.argv.length; i++) {
    argv.push(Number(process.argv[i]))
}
function min(array) {
    let result = array[4]       //基準とする値を配列の中から適当にとってくる
    for (let i = 0; i < array.length; i++) {
        if (result > array[i]) {//resultのが大きかったら
            result = array[i]   //resultに、より小さい値であるarray[i]を代入
        }
    }
    return result
}
console.log(min(argv))