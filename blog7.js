const argv = []
for (let i = 2; i < process.argv.length; i++) {
argv.push(Number(process.argv[i]))
}
function min(array) {
    let result = 999999     //最小値を返したい
    for (let i = 0; i < array.length; i++) {
        if (array[i] < result) { //一回一回iの値が変わるごとにresultと比較
            result = array[i]    //条件に合えば代入
        }
    }
    return result
}
console.log(min(argv))



