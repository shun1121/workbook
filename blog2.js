const arg1 = Number(process.argv[2])//num（判定される数）
const arg2 = Number(process.argv[3])//min（最小値）
const arg3 = Number(process.argv[4])//max（最大値）

function isBetween(num, min, max) {
    if (num >= min && num <= max) {
        return true
    } else {
        return false
    }
}

console.log(isBetween(arg1, arg2, arg3))
