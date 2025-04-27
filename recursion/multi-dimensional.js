// This works, but personally I find this too confusing...
function totalIntegers(array, total = 0) {
    array.forEach((item) => {
        if (Array.isArray(item)) {
            // run the function again and update total before moving on
            // no returning necessary!
            total = totalIntegers(item, total);
        } else {
            if (typeof item === 'number') total++;
        }
    });

    return total;
}

console.log(totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]));