function anagrams(word, words) {
    var answer =[]; // Answer placeholder, will contain only the valid strings from the array "words"
    for (var k = 0; k < words.length; k++){ // Loop to check all of the strings in the array "words"
        if (word.length == words[k].length){ // If length is equal we test, else - it's not an anagram;
            let wordsCopy = words[k]; // We make a copy of the word so we can remove 
            let isAnagram = true; // We'll assume the word is an anagram until proven wrong, and we'll test it letter by letter.
            for (var i = 0; i < word.length; i++){
                let regex = new RegExp(word[i], 'i');
                if (wordsCopy.search(regex) != -1)
                wordsCopy = wordsCopy.replace(wordsCopy[wordsCopy.search(regex)],'')
                else {
                    isAnagram = false
                    break;
                } 
              }
              if (isAnagram == true){
                  answer.push(words[k])
              } 
        }
  }
  return answer;
  }

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));