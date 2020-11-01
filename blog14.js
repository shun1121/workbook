/*ab + ca = bbc
//とりあえずbは１が入る ＜－ 二桁＋二桁の最大は198 
//a1 + ca = 11c     c!=0 a!=0 a+c=10or11
//(10a + b) + (10c + a) = 100b + 10b + c
//(10a + b) + (10c + a) - 100b - 10b - c = 0
//11a - 109b + 9c = 0
//11a + 9c = 109
for (let a =  1; a <= 9; a++) {
    for (let c = 1; c <= 9; c++) {
        if (11*a + 9*c === 109) {
            console.log(a, c)
        }
    }
}
*/
for (let a = 1; a <= 9; a++) {
    for (let b =  1; b <= 9; b++) {
        for (let c = 1; c <= 9; c++) {
            if (11*a - 109*b + 9*c === 0) {
                console.log(`a:${a}, b:${b}, c:${c}`)
            }
        }
    }
}






