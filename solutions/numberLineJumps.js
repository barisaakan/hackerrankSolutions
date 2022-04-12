function kangaroo(x1, v1, x2, v2) {
    let numberOfJumps = ((x2 - x1)/(v1 - v2)); // (x1 + (n * v1) = x2 + (n * v2))
    if(numberOfJumps % 1 === 0 && numberOfJumps >= 0){
        return 'YES';
    }else{
        return 'NO';
    }
}