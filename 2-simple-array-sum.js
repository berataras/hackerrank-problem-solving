//Simple Array Sum

/*
* Given an array of integers, find the sum of its elements.
* For example, if the array ar = [1,2,3], 1 + 2 + 3 = 6 so return 6
*/

function simpleArraySum(ar) {
    return ar.reduce((a,b) => a+b, 0);
}

const result = simpleArraySum([1,2,3,4,10,11]);
console.log(result);
