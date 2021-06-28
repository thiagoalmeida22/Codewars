function squareDigits(num){
    //may the code be with you
    var str = num.toString();
    var strConcatenateHolder = ""
    for (var i = 0; i < str.length; i++){
      let temporary = Number(str[i]) ** 2;
      temporary = temporary.toString();
      strConcatenateHolder = strConcatenateHolder + temporary;
    }
    return Number(strConcatenateHolder)
}