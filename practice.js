function absVal(value){
    return Math.abs(value);
}

function powVal(value){
    return Math.pow(value);
}

function squareRoot(value){
    return Math.sqrt(value);
}
function maxAndMin(value1,value2,value3,value4,value5){
    let maxValue = Math.max(value1,value2,value3,value4,value5);
    let minValue = Math.min(value1,value2,value3,value4,value5);
    return [maxValue, minValue];
}
function randomNumber(value1,value2){
    return Math.random(value1, value2);
}
function roundNumber(value,places){
    let factor = 10**places;
    return Math.round(value*factor)/factor;
}