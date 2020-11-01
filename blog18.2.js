const users = require("./users.json")
const result = []
for (let i = 0; i < users.length; i++) {
    const user = users[i]  //usersのすべての要素
    const firstName = user.name.split(" ")[1]  //すべてのファーストネーム
    //console.log(firstName) 
    //なんでここでresult? ↓
    let index = result.findIndex((r) => r.firstName === firstName) //rは査定されるものー＞最終的にオブジェクト型の配列にしたいから、その配列の要素
    // ↑ 配列内の指定されたテスト関数を満たす最初の要素の位置を返します。
    //テスト関数を満たす要素がない場合を含め、それ以外の場合は -1 を返します。
    //result配列の中の要素であるオブジェクト、その中のfirstNameキーの値を配列のfirstNameキーと比較
    //console.log(firstName)//ファーストネーム
    //console.log(index) //数字、number型
    if (index < 0) { //resultに重複する値がなければ
        result.push({
            firstName: firstName,
            count: 1
        })
    } else {
        result[index].count++; //＜－[index]なに？  オブジェクトがた配列resultのcountキーの値が++される。
    }   //↑のindexはr.firstNameがfirstNamと一致する位置を返す。なければ－１。つまりインデックス番号
}
result.sort((a, b) => b.count - a.count)
for (r of result) {
    console.log(`${r.firstName}:${r.count}`)
}

//オブジェクトの値をsortするには  .sort((a,b) => b.キー - a.キー)
