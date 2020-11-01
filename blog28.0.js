function rotate(arr, index) {
    const ret = []
    for (let i = 0; i < arr.length; i++) {
        ret.push(arr[(i + index + arr.length) % arr.length])//余り番目をプッシュ
    }
    return ret
}
const index = Number(process.argv[2])
const args = process.argv.slice(3)
console.log(rotate(args, index))