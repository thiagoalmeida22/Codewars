function highAndLow(numbers){
    array = numbers.split(' ');
    var highNumber = array[0];
    var lowerNumber = array[0];
    array.forEach(function(value){
        if (+value > +highNumber) {highNumber = value};
        if (+value < +lowerNumber) {lowerNumber = value};
    });
    return highNumber + ' ' +lowerNumber;
  }

  console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));