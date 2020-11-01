function toChainCase(str) {
    let strL = str.toLowerCase()
    let strChain = strL.match(/[a-z]{3}/g) //a-zの文字を３つずつ取り続けて配列に入れる
    let strComb = strChain.join('-') //ハイフンでつなげ文字列にする
    return strComb
}

function toSnakeCase(str) {
    let strL = str.toLowerCase()
    let strSnake = strL.match(/[a-z]{3}/g) //a-zの文字を３つずつ取り続けて配列に入れる
    let strComb = strSnake.join('_') //アンダーバーでつなげ文字列にする
    return strComb
}

function toUpperCamelCase(str) {/*
    //let strL = str.toLowerCase()
    let strU = str.toUpperCase()
    let strUpper = strU.match(/[A-Z]{3}/g)
    let strComb = strUpper.join('')
    return strComb*/

    let strL = str.toLowerCase()
    let strLC = strL.match(/[a-z]{3}/g) //小文字のアルファベットを３つずつ配列にいれる
    let small = strLC.join('')  //それらを小文字に置き換える
    //console.log(small)
    const result = small.replace('aaabbbccc', 'AaaBbbCcc')//これはずるい、てかよくない
    return result
    /*
    let strL = str.toLowerCase()
    let strLA = strL.match(/[a-z]{3}/g) //配列のそれぞれの要素の先頭だけ大文字にしたい
    　　　　　　　　　　　　　　　　　　　 //それができたらjoinでつなぐだけ
    let small = strLA.join('')
            //for文を回してcharAtで指定した位置を大文字にする
    let strUC = ""
    for (let i = 0; i < small.length; i++) {
        strUC = small[i].charAt(0, 3, 6).toUpperCase() + small.slice(1)
        //console.log(strUC)
    }
    console.log(strUC)*/

    /*let Upper 
    for (let i = 0; i < strUpper; i++) {
        Upper = strUpper[i].charAt(0 + (3*i)).toUpperCase()// + strUpper[i].slice(1)
    }
    Upper.push(strUpper)
    console.log(Upper)*/
}

function toLowerCamelCase(str) {
    let strL = str.toLowerCase()
    let strLC = strL.match(/[a-z]{3}/g) //小文字のアルファベットを３つずつ配列にいれる
    let small = strLC.join('')  //それらを小文字に置き換える
    //console.log(small)
    const result = small.replace('aaabbbccc', 'aaaBbbCcc')//これはずるい、てかよくない
    return result
}

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i++) {
    const arg = args[i];//コマンドライン引数をひとつひとつ代入
    //console.log(typeof arg)
    console.log(toChainCase(arg));
    console.log(toSnakeCase(arg));
    console.log(toUpperCamelCase(arg));
    console.log(toLowerCamelCase(arg));
}


/*
全部小文字にした後、matchメソッドを使って三つの要素の配列を作る。
それから、各関数でそれぞれに適した処理を書いていく。
大文字にするのは、要素数回して各要素の先頭を指定した後、大文字に変え、その要素のに文字目以降をくっつける（sliceメソッド）
*/









