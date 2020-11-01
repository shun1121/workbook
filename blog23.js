function strlen(str) {
    let i = 0  //strの中をループさせるため
    while(true) {　　　　　　　　　//iがwhileの中を順にループする
        if (str[i] === undefined) {
            break
        }
                                 //文字列の中どうやってループすんの？
                                 //次の文字列に移らん
        //i++
        //console.log(str[i])　　　//これでstrが順番に出る（多分２つ目から[1]）
        i++                      //i++はconsole.log(str[i])の後だとundefinedが表示されずにいく
        　　　　　　　　　　　　　 //iの初期値の状態も表示したいやん？
        //console.log(i)
    }
    return i     //ここでは、iはカウントにもなるしインデックス番号の役割もある
}
console.log(strlen(process.argv[2]))


