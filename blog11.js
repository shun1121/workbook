const arg = process.argv[2]

function isNumber(str) {
    let result = true     //最初に戻り値を設定しておく 
                          //ー＞ 条件に当てはまらない値が来たら戻り値を変更する。 
    for (let i = 0; i < str.length; i++) {
        //arg[i]が文字"0"~"9"を含まない場合
        // "または" ではなく、"かつ" にしないといけない  ー＞ "かつ"で強固に連結させて、それいがいなら という条件にする。
        if (str[i] !== "0" && str[i] !== "1" && str[i] !== "2" && str[i] !== "3" && str[i] !== "4" && str[i] !== "5" && str[i] !== "6" && str[i] !== "7" && str[i] !== "8" && str[i] !== "9") {
            result = false
            break
        }
    }
    return result
}
console.log(isNumber(arg))
//先頭に数の文字が来たらtrueを返すようになっていた

