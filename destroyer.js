function destroyer(arr) {
    const valuesToRemove = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
        return !valuesToRemove.includes(val);
    });
}

function destroyer2(arr, ...valsToRemove) {
    return arr.filter(elem => !valsToRemove.includes(elem));
}