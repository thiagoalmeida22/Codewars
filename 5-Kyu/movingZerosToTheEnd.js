var moveZeros = function (arr) {
    var zerosCounter = 0;
    for(var i = 0; i < arr.length; i++){                      
        if ( arr[i] === 0) { 
            arr.splice(i, 1); 
            i--;
            zerosCounter++; 
        }
    }
    for(var i = 0; i < zerosCounter; i++){
        arr.push(0);
    }
    return arr;
  }
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]