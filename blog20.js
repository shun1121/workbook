function floor(num) {//numが割り算の計算結果 計算結果がどうか条件分岐
    let result = ""
    if (num.toString().indexOf('.') >= 0) { //num = 1.5 1.35 10 0.4など
        let toStr = num.toString().split('.')[0]
        result = Number(toStr)
        //console.log(num)
        return result 
    }
    return num
}

function round(num) {
    let result = ""
    if (num.toString().indexOf('.') >= 0) {
        let toStr = num.toString().split('.')[0]
        result = Number(toStr) + 1
        return result
    }
    return num
}

function ceil(num) {
    let result = ""
    if (num.toString().indexOf('.') >= 0) {
        if (num.toString().split('.')[1] >= "5") {
            let toStr = num.toString().split('.')[0]
            result = Number(toStr) + 1
        } else {
            let toStr = num.toString().split('.')[0]
            result = Number(toStr)
        }
    }
    return result
}
const a = process.argv[2]
const b = process.argv[3]
console.log(a / b)
console.log(floor(a / b))
console.log(round(a / b))
console.log(ceil(a / b))














