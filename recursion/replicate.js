function replicate(times, number, array = []) {
    if (times <= 0) return array;

    array.push(number);
    return replicate(times - 1, number, array);
}

console.log(replicate(3, 5))
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []

// I'll use array concat next time for more efficient code!