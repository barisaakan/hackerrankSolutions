function flippingBits(n) {
    n = n.toString(2);
    const len = n.length;
    var shifted = '';
    for(var i = 0; i < (32 - len); i++){
        shifted = shifted + '1';
    }
    for(var i = 0; i < len; i++){
        if(n[i] == '1') shifted = shifted + '0';
        else if(n[i] == '0') shifted = shifted + '1';
    }
    return parseInt(shifted, 2);
}