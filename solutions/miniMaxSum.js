function miniMaxSum(arr) {
    var min = 1000000000;
    var max = 0;
    var sum = 0;
    
    arr.map(i => {
        sum = sum + i;
        if(i < min) min = i;
        if(i > max) max = i;
    })
    
    var miniSum = sum - max;
    var maxSum = sum - min;
    
    console.log(miniSum, maxSum);

}
