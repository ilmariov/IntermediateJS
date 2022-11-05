function sumAll(arr) {
    let max = Math.max(arr[0], arr[1]);
    let min = Math.min(arr[0], arr[1]);
    let c = min;
    let sum = 0;
    while (c <= max) {
      sum += c;
      c++;
    }
    return sum;
  }
  
  sumAll([1, 4])