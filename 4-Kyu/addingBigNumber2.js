function add(a, b){
    var carry=0;
    var i=0;
    var string  = ''
    var aArray = []
    var bArray = []
    while(a>=1 || b>=1){
        var sum=Math.floor(a%10)+Math.floor(b%10)+carry;
        // array[i]=sum%10;
        string = sum%10 + string;
        carry = Math.floor(sum/10);
        a=a/10;
        b=b/10;
        i++;
    }
    if(carry==1){
        string = '1' + string;
    }
    return string;
}
console.log(add(1372,69))