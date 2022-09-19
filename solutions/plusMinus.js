function plusMinus(arr) {
    var positive = 0;
    var negative = 0;
    var zero = 0;
    var length = arr.length;
    arr.map(i => {
        if(i > 0) positive++;
        else if(i < 0) negative++;
        else if(i == 0) zero++;
    })
    console.log((positive / length).toFixed(6));
    console.log((negative / length).toFixed(6));
    console.log((zero / length).toFixed(6));
}