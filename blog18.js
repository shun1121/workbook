const users = require("./users.json")

users.sort(function(a, b) {//a,bは配列の要素 ー＞ 一つ一つのオブジェクト
    return b.score - a.score
})    

const result = users.filter(function (element) {
    return element.score >= 90
})

console.log(result)

/*　これでもいける
console.log(users.filter(function (element) {
    return element.score >= 90
}))
*/
/*
filter() は、与えられた callback 関数を配列の各要素に対して一度ずつ呼び出し、
callback が true と評価される値を返したすべての要素からなる新しい配列を生成します。
*/
/*
間違い ー＞  const result = users.filter(users[score] => users[score] >= 90)
                               ↑
const users = {                ↑
   score : xxx　            　 ↑
}　　　　　　　　　　　　　　　　↑
こんな感じのオブジェクトのことを意味している
*/

/* うまくいかない
if (users.score >= 90) {
    console.log(users)
}
//console.log(users)
↑　これも配列の中のオブジェクトを呼び出すことができていない。
↓　のパターンだと表示できる。
const users = {               
   score : xxx　            　 
}
*/


