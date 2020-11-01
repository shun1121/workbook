const arg = process.argv[2]  //num
const minimum = 0            //min
const maximum = 100          //max

function limited(num, min, max) {
    if (num < min) {
        return min
    } else if (num >= min && num < max) {
        return num
    } else {
        return max
    }
}
console.log(limited(arg, minimum, maximum))







