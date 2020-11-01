//右端の値wをとっていく
function rotate (arr) {//rectの配列が最終的に入る
    let result = []        //returnで返す変数をforの外に書く
    for (let i = 0; i < arr.length; i++) { //タテ    ３回ぶん
        let array = []    //iが一周まわったらarrayを初期化する
        for (let j = 0; j < arr.length; j++) {  //ヨコ  (arrayの一列目 中身)
            array.push(arr[j][2-i]) //新しく作った配列(array)に実際ある配列(rect)(arr)の任意の値を入れる
                                    //0から増えていっている値に注目する ー＞ iとjが入れ替わる
    　　}                           //arrayに１段目の値のプッシュができた
        result.push(array)          //それをresultにプッシュして１周目終わり  ２回、３回繰り返す

        //return array        ＜－ resultなしだとreturnされるのが配列の一番最後だけ
    }
    return result     //１周目終わってresultを返す ー＞ 表示する
}                     //次に表示するときはヨコではなくタテに表示される
/*
i = 0のとき (１周目) 各列一番右の値を新しい配列にぶち込む   i = 0 -> (?, 2)は固定
[ 6, 1, 8 ]                  j = 0 -> (0, 2)-> 8
[ 7, 5, 3 ]  <arr[j][2-i]>   j = 1 -> (1, 2)-> 3
[ 2, 9, 4 ]                  j = 2 -> (2, 2)-> 4     １段目[8, 3, 4]

i = 1のとき (２周目)
  j = 0 -> (0, 1)-> 1
  j = 1 -> (1, 1)-> 5
  j = 2 -> (2, 1)-> 9   ２段目[1, 5, 9]

i = 2のとき　(３周目)
  j = 0 -> (0, 0)-> 6                         　　[8, 3, 4]
  j = 1 -> (1, 0)-> 7                　　-->      [1, 5, 9]
  j = 2 -> (2, 0)-> 2   ３段目[6, 7, 2]       　　[6, 7, 2]
*/

/*
function rotate (arr) {
    let result = []
    //console.log(typeof result)
    for (let i = 0; i < arr.length; i++) {
        let arr = []
        for (let j = 0; j < arr.length; j++) {
            //const y = 2-i
            arr.push(arr[j][2-i])// = arr[j][2-i] //0から増えていっている値に注目する ー＞ iとjが入れ替わる
        }
        result.push(arr)
    }
    return result
}
二つ目の配列から空配列しか返らない　ー＞　原因は引数にプッシュする形になっているから
引数ではなく別の変数をreturnする
*/
const rect = [
    [6, 1, 8],
    [7, 5, 3],
    [2, 9, 4],
]

let r = rect
for (let i = 0; i < 5; i++) {
    console.log("---")
    for (let j = 0; j < r.length; j++) {
        console.log(r[j]) //３回ぶんタテに出力される　大きい配列の要素
    }
    r = rotate(r)
}
//arr[][] = arr[大きい配列の中にある要素（配列）][各要素（配列）の中のインデックス]

