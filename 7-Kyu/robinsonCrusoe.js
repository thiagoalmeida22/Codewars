function crusoe(n, d, ang, distmult, angmult) {
    let currentLocation = [0 , 0]
    for (var i =0; i < n;i++){
        currentLocation[0] = currentLocation[0] + d * Math.pow(distmult, i) * Math.cos(ang * Math.PI /180 * Math.pow(angmult, i))
        currentLocation[1] = currentLocation[1] + d * Math.pow(distmult, i) * Math.sin(ang * Math.PI /180 * Math.pow(angmult, i))
    }
    return currentLocation;
}