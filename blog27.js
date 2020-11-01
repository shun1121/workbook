function split(str, separator) {
    let arr = []
    let string = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === separator) {
            arr.push(string)
            string = ""
        } else {  //string += str[i]をelse内に書くと、ifの条件に合わなかったときのみ実行されるようになる
            string += str[i]
        }
    }
    arr.push(string)
    return arr

    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === separator) {
    //         arr.push(string)
    //         string = ""
    //     }
    //     string += str[i]
    // }
    // arr.push(string)
    // return arr
/*
コメントアウトした上のやり方だと、node blog27.js "aaa,bbb,444,555"で[ 'aaa', ',bbb', ',444' ]を返す。
この原因はif内でカンマと合致してstringにためた文字列をプッシュした後、同じ周でstring += str[i]をしてカンマを入れてしまうから。
　　　　　　　　　　　　　　　↕
elseを使ったやり方だと、カンマがあったらプッシュ、そうじゃなければstringに追加。＜－
ifかelseの処理が終わったら２回り目に行く。
　　　　　　　　　　　　　　　↓
問題に合わせて見てみると、aaa,bbb,...　だと0,1,2,3番目でカンマが来る。
ifの条件に当てはまるから、この周はこれでおしまい。その次はiの数字が増え、elseの条件に従って処理を行っていく。
ー＞ 結果、カンマをとばすことになる。
*/
    
}

console.log(split(process.argv[2], ","))

//最初にやろうとしてたこと
//let i = 0
// while(true) {
    //     if (str[i] === separator) {
    //         arr.push(string)
    //         string = ""
    //         return arr
    //     }
    //     string += str[i] 
    //     i++
    // }