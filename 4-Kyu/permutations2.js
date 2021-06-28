function permutations(string) {
    let answers = [];

    if (string.length === 0) {return }
    else if (string.length === 1) {return [string]}

    for (var i = 0; i < string.length; i++){
        var current = string.charAt(i);
        var remainingString = string.substring(0,i)+string.substring(i+1);
        var remainingStringPermuted = permutations(remainingString);

        if(typeof remainingStringPermuted === "string"){
            for (var j = 0; j < remainingStringPermuted.length; j++){
                let permutedArray = current+remainingStringPermuted[j];
                if (!answers.includes(permutedArray)){
                    answers.push(permutedArray);
                }
            }
        }
        else if(typeof remainingStringPermuted === "object"){
            remainingStringPermuted.forEach(element => {
                let permutedArray = current + element;
                answers.push(permutedArray);
            });
        }
    }
    let unique = new Set(answers);
    return unique;
}
console.log(permutations("aabb"));

// Tentei fazer com SET e não ficou muito legal