const data = [13, -5, 24, -12, 9, 18]

const type1 = " "
const type2 = "|"
const type3 = "-"
const type4 = "+"
const max = 25

for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {//値が正の場合
        console.log(type1.repeat(max) + type2 + (type4.repeat(data[i])))
    } else if (data[i] === 0){
        console.log(type1.repeat(max) + type2)
    } else {//Math.abs(data[i])は絶対値を返す
        console.log(type1.repeat(max-Math.abs(data[i])) + type3.repeat(Math.abs(data[i])) + type2)
    }
}









