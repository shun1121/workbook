const y = Number(process.argv[2])
const m = Number(process.argv[3])
const d = Number(process.argv[4])

function toWareki(year, month, day) {
    if (year >= 2019 && month >= 5 && day >= 1) {
        //コマンドライン引数の年に当たる部分をそれより１小さい数で引く　－＞　差分が令和何年と合致する
        return '令和' + (year-2018) + '年' + month + '月' + day + '日'//`昭和${year} + "年"`
    
    } else if (year >= 1989 && month >= 1 && day >= 8) {
        //コマンドライン引数の年に当たる部分をそれより１小さい数で引く　－＞　差分がでる
        return '平成' + (year-1988) + '年' + month + '月' + day + '日'
    
    } else if (year >= 1926 /*&& month >= 12 && day > 25*/) {
        if (year === 1926 && month <= 12 && day < 25) {
            return undefined
        }
        //コマンドライン引数の年に当たる部分をそれより１小さい数で引く　－＞　差分がでる
        return '昭和' + (year-1925) + '年' + month + '月' + day + '日'
    
    }
}
console.log(toWareki(y, m, d))
