function strcmp(a, b) {
    const length = Math.max(a.length, b.length)//引数として与えた複数の数の中で最大の数を返します
    for (let i = 0; i < length; i++) {
        // ↓どちらかの文字列は桁数が一つ足らない
        if (a[i] === undefined || a[i] < b[i]) {//aがundefined（aの桁が少ないとき）またはaの文字がbの文字より小さいとき
                                                //文字列の桁数が違ったとき、当てはまらないところにはundefinedが入る
            return -1
        } else if (b[i] === undefined || a[i] > b[i]) {//bがundefined（bの桁が少ないとき）またはbの文字がaの文字より小さいとき
                                                       //文字列の桁数が違ったとき、当てはまらないところにはundefinedが入る
            return 1
        }
    }
    return 0
}
console.log(strcmp(process.argv[2], process.argv[3]))