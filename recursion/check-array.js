function all(array, callback) {
    let check = true;

    if (array.length === 0) return check;

    // calls the callback on the popped item
    if (!callback(array.pop())) check = false;
    // if it's false end the function and return false
    if (check === false) return check;

    return all(array, callback);
}

const allAreLessThanSeven = all([9,2,1], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false