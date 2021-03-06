const list = [44, 38, 39, 44, 40]//, 45, 44, 34, 42, 30]//, 43, 37, 36, 43, 35, 30, 40, 43, 33, 31, 42, 32, 36, 49, 47, 30, 46, 33, 42, 41, 45, 38, 31, 32, 34, 33, 48, 31, 37, 42, 44, 46, 46, 42, 43, 39, 41, 34, 46, 47, 33, 33, 36, 39, 45, 36, 39, 42, 32, 31, 49, 39, 39, 32, 40, 39, 43, 35, 32, 31, 33, 40, 48, 47, 47, 43, 41, 48, 39, 43, 39, 48, 31, 30, 35, 41, 31, 36, 49, 39, 47, 48, 41, 47, 34, 43, 33, 49, 31, 32, 48, 36, 46, 41, 38, 35, 42, 42, 44, 39, 43, 46, 36, 35, 48, 38, 49, 38, 43, 37, 45, 47, 34, 36, 32, 42, 30, 45, 47, 49, 44, 34, 30, 38, 41, 42, 36, 38, 35, 43, 43, 33, 44, 43, 47, 49, 43, 31, 47, 33, 49, 32, 46, 35, 42, 44, 49, 49, 47, 44, 32, 49, 43, 49, 47, 47, 40, 38, 47, 45, 38, 31, 39, 47, 33, 46, 36, 30, 33, 37, 32, 43, 41, 43, 39, 31, 40, 31, 44, 36, 48, 42, 33, 48, 39, 35, 39, 35, 39, 45, 32, 30, 38, 36, 36, 32, 35, 46, 49, 35, 48, 43, 33, 47, 32, 41, 47, 47, 49, 35, 32, 43, 38, 47, 48, 34, 33, 42, 33, 30, 35, 30, 38, 39, 34, 43, 46, 34, 41, 40, 34, 49, 35, 48, 32, 39, 38, 45, 36, 35, 45, 36, 39, 40, 49, 49, 32, 37, 32, 49, 48, 31, 46, 42, 43, 41, 48, 34, 32, 48, 37, 46, 41, 36, 45, 43, 46, 42, 43, 41, 33, 34, 32, 43, 45, 35, 47, 41, 38, 45, 44, 46, 46, 36, 49, 41, 45, 43, 38, 30]
const result = {}                   //新しい空オブジェクト
for (let i = 0; i < list.length; i++) {
    const num = list[i]             //これ（num）がresultオブジェクトのキーになる予定
    if (result[num] === undefined) {//result[num]はresultオブジェクトのキー[num]を指定して値をとっている
                                    //その値がundefinedだった場合ー＞値がまだ決まっていない場合
        result[num] = 0             //値に０を代入する
    }
    result[num]++
    console.log(result[num])        //resultオブジェクトのキー[num]を指定して値があれば＋＋
}
console.log(result)

for (let key in result) {
    console.log(`${key}:${result[key]}回`)
}

/*
for文の中で、listの要素が一つ一つnumに入り、それがresultオブジェクトのキーになっていく
resultオブジェクトのnumキーに対する値がなければ、値に０を入れる
resultオブジェクトのnumキーに対する値があるなら、値を増やす　result[num] = result[num] + 1
                                       *キーではなく値       　(値)　　=　　(値)　  + 　1　
例）
i = 0のとき　
const result = {
    '44':
}    　　
となり、result[num[0]]の値がない　ー＞　ここでresult[num] = 0 とする
ー＞　'44': 0
その次に、result[num]++とある。これはif elseの条件によっておこるのではなく、どの場合にも動く処理。
つまりresult[num] = 0 + 1 ー＞ 1
ー＞　'44': 1

i = 1のとき
const result = {
    '44': 1,
    '38': 
}    　　
となり、result[num[1]]の値がない　ー＞　ここでresult[num] = 0 とする
ー＞　'38': 0
その次に、result[num]++とある。これはif elseの条件によっておこるのではなく、どの場合にも動く処理。
つまりresult[num] = 0 + 1 ー＞ 1
ー＞　'38': 1

i = 3のとき、もとが
const result = {
    '44': 1,
    '38': 1, 
}    　　
という状態で、result[num[3]]、つまりキー'44'に値がある(0) ー＞ ここでresult[num] = result[num] + 1とする
                                                        ー＞つまりresult[num] = 1 + 1 ー＞ 2
ー＞　'44': 2

なんでキーがきれいに並ぶの？ ASCIIコードの若い順に並ぶ
http://www3.nit.ac.jp/~tamura/ex2/ascii.html
*/









