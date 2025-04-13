/* my solution 
function productOfArray(array, product = 1) {
    if (array.length === 1) return product *= array[0];
    product *= array.pop();
    return productOfArray(array, product);
}
*/

function productOfArray(array) {
    if (array.length === 0) return 1;
    // chose pop here as it's more optimized compared to shift
    // (shift has to renumber every single item in array!)
    return array.pop() * productOfArray(array);
}

console.log(productOfArray([1, 2, 3, 10]));
    