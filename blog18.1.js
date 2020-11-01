const users = require("./users.json")

const duplicate = function (search, array) {//重複があればカウントを増やし、配列に入れる関数
    let cnt = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === search) {
            cnt++
        }
    }
    return cnt
}

let first = []  //ファーストネームの配列
for (let h = 0; h < users.length; h++) {
    first.push(users[h].name.split(' ')[1])
}

let firstName = []  //重複をのぞいたファーストネームの配列
for (let j = 0; j < users.length; j++) {
    if (firstName.indexOf(first[j]) === -1) {
        firstName.push(first[j])
    }
}

//一番下にあるfor文はsortができていないもの
//その状態からはどうしても動かない
//console.log()の中のものをオブジェクト型の配列に入れる必要がある
//そうすることでsortができ、for ofで表示もできる
let arr = []
for(let u = 0; u < firstName.length; u++) {
    // let obj1 = {}
    // obj1.name = firstName[u]
    // obj1.count = duplicate(firstName[u], first)  
    arr.push({"name":firstName[u],"count":duplicate(firstName[u], first)}) //オブジェクトをそのままぶちこむ
    arr.sort((a,b) => b.count - a.count)
}
//console.log(arr)

for (let element of arr) {
    console.log(`${element.name} : ${element.count}`)
}

// for (let k = 0; k < firstName.length; k++) {
//     console.log(`${firstName[k]} : ${duplicate(firstName[k], first)}`)
// }








