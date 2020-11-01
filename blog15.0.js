function toWareki(year, month, day) {
    const str = `${('0000' + year).slice(-4)}${('00' + month).slice(-2)}${('00' + day).slice(-2)}`
                //00001989を後ろから４つ取得する　0012を後ろから2つ取得　　　0021を後ろから２つ取得
                //－＞　全部をつなげる　－＞　その心は？
    let waYear = ""
    if (str < "19890108") {
    waYear = `昭和${year - 1925}`
    } else if (str < "20190501") {
    waYear = `平成${year - 1988}`
    } else {
    waYear = `令和${year - 2018}`
    }
    return `${waYear}年${month}月${day}日`
    }
    console.log(toWareki(process.argv[2], process.argv[3], process.argv[4]))