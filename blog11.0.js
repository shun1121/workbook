function isNumber(str) {
    let ret = true
    for (let i = 0; i < str.length; i++) {
        const ch = str[i]
        if (ch < "0" || ch > "9") {//文字に大小あるのか？
            　　　　　　　　　　　　 //ー＞ASCIIコードの順番
            ret = false
            break
        }
    }
    return ret
}
console.log(isNumber(process.argv[2]))