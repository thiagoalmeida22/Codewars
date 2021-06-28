function add(a, b){
    var carry=0;
    var string  = ''
    while(a.length != b.length){
        if (a.length < b.length) {a = '0' + a}
        else (b = '0' + b)
    }
    for(var i = a.length-1; i >= 0 ;i--){
        var sum=Number(a[i])+Number(b[i])+carry
        string = sum%10 + string;
        carry = Math.floor(sum/10);
    }
    if(carry==1){
        string = '1' + string;
    }
    return string;
}
console.log(add("63829983432984289347293874","90938498237058927340892374089"))