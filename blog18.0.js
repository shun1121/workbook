const users = require("./users.json")
/*   //失敗!!!!
const duplicate = function (search, array) {//重複があればカウントを増やし、配列に入れてsortする関数
    let cnt = 0
    let arr = []
    for (let i = 0; i < array.length; i++) {
        //let cnt = 0
        if (array[i] === search) {
            cnt++
        }
    }
    arr.push(cnt)
    arr.sort((a, b) => b - a)
    return arr
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

//let obj = {}
for (let k = 0; k < firstName.length; k++) {
    //関数の返り値は配列にプッシュできやんの？
    //obj.firstName[k] = duplicate(firstName[k], first)
    //console.log(obj)

    console.log(`${firstName[k]} : ${duplicate(firstName[k], first)}`)
}
*/
/*
let obj = {}
for (let key of users) {//usersの各要素が'key'に置き換わる
    let ki = key.name.split(' ')[1] //その'key'（usersの要素）の(ファースト)nameをオブジェクトに代入
    obj.name = ki
    //obj.name = key.name.split(' ')[1] //その'key'（usersの要素）の(ファースト)nameをオブジェクトに代入
    //console.log(obj)
}
*/
/*
const duplicate = function (search, array) {//重複があればカウントを増やし、配列に入れる関数
    let cnt = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] === search) {
            cnt++
        }
    }
    return cnt
}*/
/*
オブジェクト型の配列を作ってobj.cntで重複を数えてsortする
*/
/*
let obj = {}
for (let i = 0; i < users.length; i++) {
    let key = users[i].name.split(' ')[1]
    obj[key] = (obj[key]) ? obj[key] + 1 : 1;
}
//obj.sort((a,b) => {b.count - a.count})
console.log(obj)
*/
/*let first = []  //ファーストネームの配列
for (let h = 0; h < users.length; h++) {
    first.push(users[h].name.split(' ')[1])
}
//console.log(first)
*/
let array = []
for (let i = 0; i < users.length; i++) {
    let obj = {}
    let key = users[i].name.split(' ')[1]
    obj.name = key
    obj.count = 1
    //ここに名前が重複した数を入れていきたい
    //console.log(obj)
    array.push(obj)
}
//array.push(obj)
console.log(array)
//obj.sort((a,b) => {b.count - a.count})
//console.log(obj)

/*
let array = []
let obj = {}
for (let key of users) {//usersの各要素が'key'に置き換わる
    obj.name = key.name.split(' ')[1] //その'key'（usersの要素）の(ファースト)nameをオブジェクトに代入
    
    
    //obj.count = (obj.name) ? obj.name + 1 : 1
    //obj.name = ki
    //obj.name = key.name.split(' ')[1] //その'key'（usersの要素）の(ファースト)nameをオブジェクトに代入
    //array.push(obj)
    //console.log(array)
    console.log(obj)
}
//console.log(obj)
*/
// let values = Object.values(obj)
// values.sort((a, b) => {
//     return b - a
// })

// for (value of values) {
//     console.log(` : ${value}`)
// }
//console.log(obj)
