function duplicateCount(text){
    var text = text.toLowerCase();
    var arrayDuplicates = [];
    for (var i = 0; i < text.length; i++){
        for (var j = i+1; j < text.length; j++){
            if (text[i] === text[j]){
                arrayDuplicates.push(text[i]);
            }
        }
    }
    return new Set(arrayDuplicates).size;
}
console.log(duplicateCount('Indivisibilities'));