function isIsogram(str){
    if(!str.match(/^[A-Za-z]+$/)) {return false}
    for (var i = 0; i < str.length; i++){
      if ( str.includes(str[i], i+1)) {return false }
    }
    return true
  }