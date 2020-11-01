function strcmp(str1,str2) {//文字の順番と文字列の長さを比較
    for (let i = 0; i <= str1.length; i++) {//str1の長さぶんをループ
        for (let j = 0; j <= str2.length; j++) {//str2の長さぶんをループ
            if (str1[0] === str2[0] && str1.length < str2.length) {//str1とstr2の文字が同じかつ、str1の長さがstr2より短いとき
                return -1
            }
            if (str1[0] === str2[0] && str1.length > str2.length) {//str1とstr2の文字が同じかつ、str1の長さがstr2より長いとき
                return 1
            }
            if (str1[i] === str2[j]) {//str1とstr2の文字が同じとき
                return 0
            }
            if (str1[i] < str2[j]) {//str1がstr2の文字の順番より後のとき
                return -1
            }
            if (str1[i] > str2[j]) {//str1がstr2の文字の順番より先のとき
                return 1
            }
        }
    }
}
const a = process.argv[2]
const b = process.argv[3]
console.log(strcmp(a, b) === a.localeCompare(b))//aaa bbbなら負数を返す
//"a".localeCompare("b")は負数を返す　　aはbと比べて先に来るー＞数字にしたら小さくなる必要がある
//"b".localeCompare("a")は正数を返す　　bはaと比べて後に来るー＞数字にしたら大きくなる必要がある
//↑参照文字　　　　　　↑比較文字
/*
文字は同じで参照文字と比較文字の桁が違うとき
参照ー＞３桁　比較ー＞４桁だったら、３桁のほうが順番が先になる　－＞　負数を返す
*/


