//Mini-Max Sum

/*
* Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
*  Then print the respective minimum and maximum values as a single line of two space-separated long integers.
*/
function miniMaxSum(arr) {
    let sortingArr = arr.sort((a,b) => a-b);

    const minimumSum = sortingArr[0] + sortingArr[1] + sortingArr[2] + sortingArr[3];

    sortingArr.reverse();

    const maximumSum = sortingArr[0] + sortingArr[1] + sortingArr[2] + sortingArr[3];

    console.log(minimumSum + " " + maximumSum)
}
