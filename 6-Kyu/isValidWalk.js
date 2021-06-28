function isValidWalk(walk) {
    console.log(walk.filter(word => word === 'n').length)
    console.log(walk.filter(word => word === 's').length)
    if (walk.length == 10 && (walk.filter(word => word === 's').length == walk.filter(word => word === 'n').length && walk.filter(word => word === 'e').length == walk.filter(word => word === 'w').length)){
        return true
    } else {
        return false;
    }
  }
  isValidWalk(['n','n','n','s','n','s','n','s','n','s']);