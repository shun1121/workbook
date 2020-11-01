const arg = process.argv[2]

//最初のインデックス番号と最後のインデックス番号を見つける
function empty(str) {// ↓ strがタブ、または復帰、または改行、または半角スペース、または全角スペースなら
    if (str === "\t" || str === "\r" || str === "\n" || str === " " || str === "　") {
        return false  //falseを返す
    }
    return true　//それ以外ならtrueを返す
}

let firstIndex  //外に設定しておく
let lastIndex   //外に設定しておく
for (let i = 0; i < arg.length; i++) {//文字が初めて入るとき、そのインデックス番号を求めたい
    if (empty(arg[i])) {  //empty関数のtrueが条件であるならば ー＞ つまりarg[i]でタブなどが入らなければ
        firstIndex = i    //そのarg[i]のインデックス番号を取得
        break             //ループを止める
    }
}

for (let j = arg.length-1; j >= 0; j--) { //後ろから見ていく
    if (empty(arg[j])) {　//empty関数のtrueが条件であるならば ー＞ つまりarg[j]でタブなどが入らなければ
        lastIndex = j　　 //そのときのarg[j]のインデックス番号を取得
        break
    }
}

//うえの２つのfor文でとったインデックス番号を使って、もとの文字列の文字部分だけを取り出す。(真ん中は含む)
let arr = [] //配列に入れていきたい
for (let k = firstIndex; k <= lastIndex; k++) {
    arr.push(arg[k]) //取得したインデックス番号ぶん配列になげる
}
console.log(arr.join(''))

