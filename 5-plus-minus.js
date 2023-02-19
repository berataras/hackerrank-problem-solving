//Plus Minus

/*
* Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
* Print the decimal value of each fraction on a new line with  places after the decimal.
*/

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;

    const arrLength = arr.length;

    for(let i = 0; i < arrLength; i++){
        if(arr[i] > 0){
            positive += 1;
        }

        if(arr[i] < 0){
            negative += 1;
        }

        if(arr[i] === 0){
            zero += 1;
        }
    }

    const calcPositive = positive / arrLength;
    const calcNegative = negative / arrLength;
    const calcZero = zero / arrLength;

    console.log(calcPositive);
    console.log(calcNegative);
    console.log(calcZero);
}
