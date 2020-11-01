function isFilledArray(arr, val){
    let i = 0
    let result 
    while(i < arr.length) {
        if (arr[i] === val) {
            i++
        }    

        if (i === arr.length) {
            result = true
        } else {
            result = false
        }
    }
    return result
}
//console.log(isFilledArray([1,1,1], 1))
console.log(isFilledArray([1,1,1], 0))
console.log(isFilledArray([1,1,0], 1))
/*
方針としては配列を回っていってvalと違うものがあった段階でループ終了return false
*/