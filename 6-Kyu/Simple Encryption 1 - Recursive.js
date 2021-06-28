// Versão recursiva de "Simple Encryption 1 - Alternating Split"
function encrypt(text, n) {
    if (n < 1 || text == null) {
        return text;
    }
    else {
        let answerText = ''
        for (var i = 1; i < text.length; (i = i+2)) {
            answerText = answerText + text[i];

        }
        for (var i = 0; i < text.length; (i= i+2)){
            answerText = answerText + text[i];
        }
        return encrypt(answerText, n-1);
    }
}

function decrypt(encryptedText, n) {
    if (n < 1 || encryptedText == null) {
        return encryptedText;
    }
    else {
        let answerText = ''
        let midIndex = Math.floor(encryptedText.length/2)
        for (var i = 0; i < midIndex; i++){
            answerText = answerText + encryptedText[midIndex+i]
            answerText = answerText + encryptedText[i]
        }
        if (encryptedText.length % 2 == 1){
            answerText = answerText + encryptedText[encryptedText.length-1]
        }
        return decrypt(answerText, n-1)
    }
}

//console.log(encrypt("This is a test!", 4));
console.log(decrypt("s eT ashi tist!", 2));