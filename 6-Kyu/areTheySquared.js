function comp(array1, array2){
  this.array1 = array1.filter(str => str != '0'); // Filter out the "0"s in one array
  this.array2 = array2.filter(str => str != '0'); // Filter ou the "0"s in the other array
  if (this.array1.length != this.array2.length){ // If - After filtering out the zeros, one array is bigger than the other. A.k.A - one had
                                                // more zeros than the other, we return false, cause they're not gonna be equal
    return false;
  } else {
    var squared1 = this.array1.map(int => int **2); // Turns every value from one of the arrays into it's square
    squared1 = squared1.sort(); // Sort to make it easier to check if they are the same.
    this.array2 = this.array2.sort(); // Sort ^
    for (i=0; i < this.array2.length; i++){ // Loop
        if (this.array2[i] != squared1[i]) // If they're not equal, we return false
        return false
  }
  }
  return true; // If we never return false, then they are equal!
}
a1 = [4, 8, 8, 9, 1, 6, 6, 8, 1, 10, 7, 6, 5, 0, 1, 2, 9];
a2 = [49, 16, 81, 1, 81, 100, 25, 0, 1, 36, 64, 64, 64, 36, 4, 2, 36];
console.log(comp(a1,a2));