function numToBin(num) {
    let ret = ""
    do {
        ret = (num % 2 ? "1" : "0") + ret
        num = Math.floor(num / 2)
    } while (num > 0)
    return ret
}
console.log(numToBin(Number(process.argv[2])))