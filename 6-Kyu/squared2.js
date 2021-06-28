function comp(array1, array2){
      var squared1 = array1.map(int => int **2);
      squared1 = squared1.sort();
      array2 = array2.sort();
      for (i=0; i < array2.length; i++){
          if (array2[i] != squared1[i]){
          return false
      }
    }
    return true;
  }
a1 = [8, 2, 1, 1, 7, 5, 6, 3, 6, 0, 8, 1, 7, 3, 7, 4];
a2 = [9, 49, 1, 1, 36, 64, 1, 36, 49, 1, 64, 25, 16, 4, 9, 49];
  console.log(comp(a1,a2));