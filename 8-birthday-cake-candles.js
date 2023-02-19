// Birthday Cake Candles

/*
* You are in charge of the cake for a child's birthday.
* You have decided the cake will have one candle for each year of their total age.
* They will only be able to blow out the tallest of the candles.
* Count how many candles are tallest.
*/
function birthdayCakeCandles(candles) {
    let sortCandles = candles.sort((a, b) => a-b).reverse();

    let tallestCandle = sortCandles[0];

    let tallestCandles = candles.filter(item => item === tallestCandle);

    return tallestCandles.length;
}

const result = birthdayCakeCandles([4,4,1,3]);
console.log(result);
