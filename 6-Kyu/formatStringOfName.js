function list(names){
    var nameString = ''
    if (names.length === 0) { return '' }
    else if (names.length === 1) { return names[0].name }
    else if (names.length === 2){ return names[0].name + ' & ' + names[1].name }
    else if (names.length > 2) {
        for (var i = 0; i < names.length-2; i++){
            nameString = nameString + names[i].name + ', ';
        }
        return nameString + names[names.length-2].name + ' & ' + names[names.length-1].name;
    }
  }
  console.log(list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]));