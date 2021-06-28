function dirReduc(arr){
    let reduc = []
    var opposite = {
        'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
    for (var i = 0; i < arr.length; i++){
        if (reduc[reduc.length-1] === opposite[arr[i]]){
            reduc.pop()
        }
        else {
            reduc.push(arr[i])
        }
    }
    return reduc;
}
