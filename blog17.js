/*
const obj = {}    //空オブジェクト
obj.兵庫 = {}     //オブジェクトに'兵庫'というキー、{}という値を追加
obj.兵庫.神戸 = 'A'     //兵庫というキーの値のオブジェクトに追加で都市名のキーと値を入れる
obj.兵庫.明石 = 'B'
obj.兵庫.西宮 = 'C'
console.log(obj)
*/
/*
const obj = {}
obj.cities = []    //citiesキーの値に空配列を当てる
obj.cities.push('神戸')     //配列に要素を追加するにはpushを使う必要がある
obj.cities.push('明石')
obj.cities.push('西宮')
console.log(obj)
*/
/*
const array = []
array.push({})
array[0].pref = '兵庫'
array[0].city = '神戸'
array.push({})
array[1].pref = '兵庫'
array[1].city = '明石'
array.push({})
array[2].pref = '兵庫'
array[2].city = '西宮'
console.log(array)
*/
/*
const array = []
array.push([])
array[0].push(1,2,3,4,5,6,7,8,9)
array.push([])
array[1].push(2,4,6,8,10,12,14,16,18)
array.push([])
array[2].push(3,  6,  9, 12, 15,
    18, 21, 24, 27)
array.push([])
array[3].push(4,  8, 12, 16, 20,
    24, 28, 32, 36)
array.push([])
array[4].push(5, 10, 15, 20, 25,
    30, 35, 40, 45)   
array.push([])
array[5].push(6, 12, 18, 24, 30,
    36, 42, 48, 54)    
array.push([])
array[6].push(7, 14, 21, 28, 35,
    42, 49, 56, 63)
array.push([])
array[7].push(8, 16, 24, 32, 40,
    48, 56, 64, 72)
array.push([])
array[8].push(89, 18, 27, 36, 45,
    54, 63, 72, 81)
console.log(array)
*/
const array = []
for (let i = 1; i <= 9; i++) {
    array.push([])
    for (let j = 1; j <= 9; j++) {
        array[i-1].push(i*j)
    }
}
console.log(array)