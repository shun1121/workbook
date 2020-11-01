// 左に回転する関数
function rotate(arr) {
    let result = []
    for (let i = 0; i < arr[0].length; i++) {//i=0, i=1, i=2, i=3    ４段分繰り返す
        let array = []                        //新しい配列
        for (let j = 0; j < arr.length; j++) {//j=0, j=1, j=2
            array.push(arr[j][arr[0].length-i-1])              //新しい配列に元の配列のどの部分を入れていくか
        }                                                          //[arr[0].length - i - 1]
        result.push(array)
    }
    return result
}
const rect = [
    [6, 1, 8, 2],
    [7, 5, 3, 4],
    [2, 9, 4, 1],
]
let r = rect
for (let i = 0; i < 5; i++) {
console.log("---")
for (let j = 0; j < r.length; j++) {
console.log(r[j])
}
r = rotate(r)
}