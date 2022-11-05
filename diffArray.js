function diffArray(arr1, arr2) {
    const newArr = [];
    function insertDiff (firstArr, secondArr) {
        for (let i=0; i<firstArr.length; i++) {
            if (!(secondArr.some(function(elem) {
                return elem === firstArr[i]
                }))) {
                newArr.push(firstArr[i])
            }
        }
    } 
    insertDiff(arr1, arr2);
    insertDiff(arr2, arr1);
    return newArr;
}
  
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));