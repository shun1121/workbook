function numToBin(num) {
    let n = num
    let n1 = num
    let arr = []
    let arr1 = []
    let str1 = ""
　  //n=5なら["1"]
    if (n1 % 2 === 1)  {//もとの数を2で割ったとき余りが１なら
        arr.push('1')//１をプッシュ
    } else {//余りが1以外なら0をプッシュ
        arr.push('0')
    } 
    //この段階でarr["0"]かarr["1"]になっている
    //console.log(arr)
    //arr.push(num%2)
    while(true) {
        if (n === 0) { //商が０のとき
            for (let i = arr.length-1; i >= 0; i--) {
                arr1.push(arr[i])
            }
            str1 = arr1.join('')
            return str1 
        }
        n = Math.floor(n / 2) //numを２で割ってその商を２で割り続ける
                              //最初にn=numを設定しているから１回目はnum/2

        if (n >= 1) {
            if (n % 2 === 1) {//割った商の余りを比較   num=5ならn=2,1,0なのでここではn=2,1が対象
                　　　　　　　 //2÷2=1...0,  1÷2=0...1　の余りが0,1がarrにプッシュされる
                              //ー＞元の数(num=5)を割った余りが欲しい これはwhileの上を見て
                arr.push('1')
            } else {
                arr.push('0')
            }
        }       
    }
}
console.log(numToBin(Number(process.argv[2])))

/*
function numToBin(num) {
    let n = num
    let arr = []
    let arr1 = []
    while (true) {
        if (n === 1) {
            return "おわり"
        }
        n = Math.floor(n / 2)
    }
}
console.log(numToBin(Number(process.argv[2])))
*/
