function RomanNumeralHelper(){

}

RomanNumeralHelper.prototype.toRoman = function(integer) {
    let answer = '';
    let stringOfNumber = integer.toString();
    for (let digits = stringOfNumber.length, i = 0; digits-i > 0; i++) {
        if (digits-i === 4) {
            console.log(stringOfNumber[i]);
            switch(stringOfNumber[i]) {
                case '1':
                    answer += 'M';
                    break;
                case '2':
                    answer += 'MM';
                    break;
                case '3':
                    answer += 'MMM';
                    break;
            }
         }
        if (digits-i === 3) {
            switch(stringOfNumber[i]) {
                case '0':
                    break;
                case '1':
                    answer += 'C';
                    break;
                case '2':
                    answer += 'CC';
                    break;
                case '3':
                    answer += 'CCC'
                    break;
                case '4':
                    answer += 'CD';
                    break;
                case '5':
                    answer += 'D';
                    break;
                case '6':
                    answer += 'DC'
                    break;
                case '7':
                    answer += 'DCC';
                    break;
                case '8':
                    answer += 'DCCC';
                    break;
                case '9':
                    answer += 'CM'
                    break;
            }
        }
        if (digits-i === 2) {
            switch(stringOfNumber[i]) {
                case '0':
                    break;
                case '1':
                    answer += 'X';
                    break;
                case '2':
                    answer += 'XX';
                    break;
                case '3':
                    answer += 'XXX'
                    break;
                case '4':
                    answer += 'XL';
                    break;
                case '5':
                    answer += 'L';
                    break;
                case '6':
                    answer += 'LX'
                    break;
                case '7':
                    answer += 'LXX';
                    break;
                case '8':
                    answer += 'LXXX';
                    break;
                case '9':
                    answer += 'XC'
                    break;
             }
        }
        if (digits-i === 1) {
            switch(stringOfNumber[i]) {
                case '0':
                    break;
                case '1':
                    answer += 'I';
                    break;
                case '2':
                    answer += 'II';
                    break;
                case '3':
                    answer += 'III'
                    break;
                case '4':
                    answer += 'IV';
                    break;
                case '5':
                    answer += 'V';
                    break;
                case '6':
                    answer += 'VI'
                    break;
                case '7':
                    answer += 'VII';
                    break;
                case '8':
                    answer += 'VIII';
                    break;
                case '9':
                    answer += 'IX'
                    break;
            }
        }
    }
    return answer;
}
var RomanNumerals = new RomanNumeralHelper();
console.log(RomanNumerals.toRoman(999))