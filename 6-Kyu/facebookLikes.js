function likes(names) {
    var displayText = ''
    if(names.length == 0){
        displayText = 'no one likes this';
    } else if (names.length == 1){
        displayText = names[0] + ' likes this'
    } else if (names.length == 2){
        displayText = names[0] + ' and ' + names[1] + ' likes this'
    } else if (names.length == 3){
        displayText = names[0] + ', ' +names[1] + ' and ' +names[2] + ' likes this'
    } else if (names.length >= 4){
        displayText = names[0] + ', ' +names[1] + ' and ' +(names.length-2) + ' others likes this'
    }
    return displayText;
}
console.log(likes(['a','b','c','d','e','e','5','6','7','8','10','11','q','q','q']))