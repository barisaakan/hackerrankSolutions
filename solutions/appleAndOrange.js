function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let appleCount = 0;
    let orangeCount = 0;
    
    for(let i = 0; i < apples.length; i++){
        let applePosition = (apples[i] + a);
        if(applePosition <= t && applePosition >= s) {
            appleCount = appleCount + 1;
        }
    }
    
    for(let i = 0; i < oranges.length; i++){
        let orangePosition = (oranges[i] + b);
        if(orangePosition <= t && orangePosition >= s) {
            orangeCount = orangeCount + 1;
        }
    }
    
    console.log(appleCount);
    console.log(orangeCount);

}
