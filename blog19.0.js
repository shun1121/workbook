//条件分けをしていく (すべて要素３つの配列にしていく)
function splitWords(str) {
    let ret = str.split("-"); //-で区切って配列に入れて返す ー＞ チェインケースのときのみ区切られる
    if (ret.length === 1) { //チェインケース以外は区切られていないので配列の要素は一つだけ
        ret = str.split("_"); //次はアンダーバーで区切って配列に入れる
    }
    if (ret.length === 1) {
        ret = [];   //最終的にはコマンドライン引数を分割してこの配列に要素を３つ入れていきたい
        let word = "";//コマンドライン引数の文字列が一つ一つ入っていくようにするための箱
        for (let i = 0; i < str.length; i++) {//str.lengthはargsの要素の一つ(ハイフン、アンダーバーは条件から外れているから) ー＞ 9文字ぶんループ
            if (str[i].match(/[A-Z]/) && word.length > 0) {//[A-Z]がマッチし、文字列の長さが０より大きいとき、配列で返す
                　　　　　　　　　　　　　　　　//コマンドライン引数の文字列を順にみていく
                                             //for文を一周した後wordに文字蓄積される
                                             
                ret.push(word);          　　//何周かして条件に当てはまったときそれまで蓄積してきたwordをプッシュして
                word = "";                  //そのあとwordを空文字で初期化する
            }
            word += str[i]; //word = word + str[i]　－＞　wordに入っている文字にstr[i]を足す ー＞ 文字列の足し算はくっついていく。
            //console.log(word)
        }                                                                   //(文字列のi番目)
        ret.push(word);   //最後は小文字で終わるためifの条件に当てはまらないから繰り返しが終わってからプッシュ（for文の後）
        /*
        for文の中の処理はなんか再帰みたいな感じ。
        最初、ifは飛ばすことになる（３番目のコマンドライン引数だと、１順目はifの条件に当てはまらない）－＞大文字だけどword数は0だから。
        だから20行目でwordにくっつけられていって22行目で配列retにプッシュされる。
        */
    }

    // 一旦全部小文字に変換
    for (let i = 0; i < ret.length; i++) {//配列retには要素が３つ入っている
        ret[i] = ret[i].toLowerCase();  //それぞれの要素を小文字にする
    }
    return ret;
}

function toChainCase(str) {
    const words = splitWords(str); //要素３つの配列が返されている
    return words.join("-"); //ハイフンでつなぐ
}
function toSnakeCase(str) {
    const words = splitWords(str);　//要素３つの配列が返されている
    return words.join("_");　//アンダーバーでつなぐ
}
function toUpperCamelCase(str) {　
    const words = splitWords(str);　//要素３つの配列が返されている
    for (let i = 0; i < words.length; i++) {//words.lengthて長さ何？ー＞長さ３
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }      //　↑ 要素３つの配列のi番目の要素の0文字目を大文字にして、各要素の２文字目からを結合させている
    return words.join(""); //３回繰り返したのちジョイン
}
function toLowerCamelCase(str) {
    const words = splitWords(str);
    for (let i = 1; i < words.length; i++) {//要素が３つある配列のうち、２つ目の要素からループを始める
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); //１つ目の要素は飛ばされるのでローワーキャメルになる
    }
    return words.join("");
}
const args = process.argv.slice(2);　//配列
for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    console.log(toChainCase(arg));
    console.log(toSnakeCase(arg));
    console.log(toUpperCamelCase(arg));
    console.log(toLowerCamelCase(arg));
}