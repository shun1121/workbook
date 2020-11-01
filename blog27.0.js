function split(str, sepatator) {
    let ret = []
    let column = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === sepatator) {
            ret.push(column)
            column = "" //ここでseparatorに当てはまったstr[i]の処理が終わる
                        //つまり次の周ではカンマが値であるstr[i]は飛ばされる
        } else {
            column += str[i]
        }
    }
    ret.push(column)
    return ret
}
console.log(split(process.argv[2], ","))