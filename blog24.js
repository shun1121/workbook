function isFilledArray(arr, val){//第一引数が第二引数でそろっているか判断
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

const arr = [
    [0,0,0],
    [1,1,1],
    [0,0,0],
    ]
function isBingo(arr, val) {
    let array = []
    let result
    for (let i = 0; i < arr.length; i++) { //二次元配列を一次元化
        for (let j = 0; j < arr[i].length; j++) {
            array.push(arr[i][j])
        }
    }
    console.log(array)
    for (let k = 0; k < arr.length; k++) {
        if (array[array.length-1]) {

        }
    }


}