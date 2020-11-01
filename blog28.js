const index = Number(process.argv[2]) //インデックス番号
const args = process.argv.slice(3) //配列

function rotate(arr, index) {
    let array = []
    if (index > 0) {　//indexが正ならば
        for (let i = index; i < arr.length; i++) {　//index番目から配列の要素をとっていく
            array.push(arr[i])  //これだけだとindex番目より前の要素が取れていない
        }
    
        for (let j = 0; j < index; j++) {//２つ目のfor文で配列の最初から要素をとるようにする
            array.push(arr[j])
        }
    } else {  //indexが正でなければ
        let index2 = Math.abs(index)  //負の数であるindexを正の数に変える
        for (let i = arr.length-index2; i < arr.length; i++) { //arrの長さからindexぶん引いた数からiを回す
            array.push(arr[i])
        }
    
        for (let j = 0; j < arr.length-index2; j++) {　//カバーできていないところをこのfor文で取得
            array.push(arr[j])
        }
    }
    return array
}
console.log(rotate(args, index))

// const arr = [ 94, 12, 30, 14, 25, 34, 27 ]
// let arr1 = []
// for (let i = 2; i < arr.length; i++) {
//     //if (i === arr.length) {
//         // for (let j = 0; j < 2; j++) {
//         //     arr1.push(arr[j])
//         // }
//         // arr1.push(arr[i])
//         //break
//     //}
//     arr1.push(arr[i])
// }

// for (let j = 0; j < 2; j++) {
//     arr1.push(arr[j])
// }
// console.log(arr1)

