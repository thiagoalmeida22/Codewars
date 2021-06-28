function validatePIN (pin) {
    if (pin.length == 4 && /\d\d\d\d/.test(pin)){
        return true;
    } else if (pin.length == 6 && /\d\d\d\d\d\d/.test(pin)){
        return true;
    } else{
        return false;
    }
    }
    console.log(validatePIN(12345))