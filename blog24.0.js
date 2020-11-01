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

const arr4 = [
    [0,0,0],
    [2,2,2],
    [0,0,0],
    ]
function isBingo(arr, val) {
    let result = false
    //isFilledArray関数を使って判別したい　－＞　その関数専用の配列を作ってあげないといけない
    //今回は配列select
    let select = []                
    for (let i = 0; i < arr.length; i++) {//ヨコ
        select = []       //初期化
        for (let j = 0; j < arr[i].length; j++) {
            select.push(arr[i][j])//ヨコの要素をプッシュ
        }
        if (isFilledArray(select, val)) {//プッシュしたものを判定trueならresultを返す　合計３回判定するから二つ目のforの中に書く
          result = true
        }
    }　　　　//これ ↓ はisFilledArray関数を使わないときのやり方
            // if (arr[i][j] === val) {//各配列の中の要素がvalと一致したら  ヨコが一致したら
            //     cnt++               //カウントを上げる
            //     if (cnt === arr.length) { //cntが配列の長さと一致したら
            //         select.push(arr[i][j])  //selectにプッシュ
            //     }
            // }
    for (let i = 0; i < arr.length; i++) {//タテ
        select = []
        for (let j = 0; j < arr[i].length; j++) {
            select.push(arr[j][i])
        }

        // if (arr[j][i] === isFilledArray(select, val)) {//arr[j][i]===valのときにcnt++じゃなくて関数で判断
        // }
        if (isFilledArray(select, val)) {//関数を書くだけ　trueならば
            return true
        }
    }        

    select = []　//forの外に出す　　中やと値を1個いれたら２周目にまた初期化されて１個しか値が入らない
    for (let i = 0; i < arr.length; i++) {　//左斜め下に
        select.push(arr[i][i]) //このインデックス番号の要素をselect配列にぶち込む　　値がそろっているかとかは関係ない
                               //というのも後で出てくるisFilledArray関数で判定してくれるから
        // if (arr[i][i] === val) {
        //     select.push(arr[i][i])  //こんな風にvalと一致した値があればプッシュとかせんでいい
        // }
    }
    if (isFilledArray(select, val)) {　//これはforの外側に出す　　値が3個入った配列を審査したい
        return true
    }

    select = [] //forの外
    for (let i = 0; i < arr.length; i++) {
        select.push(arr[i][arr.length-1-(1*i)])　//selectに値を一つ一つプッシュしていく
    }
    if (isFilledArray(select, val)) {　//selectに値が３個入った状態で審査
        return true
    }
            
    return result
}
console.log(isBingo(arr4, 2))