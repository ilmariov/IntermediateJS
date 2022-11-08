function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
        after = after[0].toUpperCase() + after.slice(1);
    } else {
        after = after.toLowerCase()
    }
    return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));