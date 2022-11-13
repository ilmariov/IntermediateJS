function fearNotLetter(str) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let char1 = abc.indexOf(str[0]);
    let j = 0;
    let letter;
    for(let i = char1; i < str.length + char1; i++) {
        if (abc[i] !== str[j]) {
            letter = abc[i];
            break;
        }
        j++;
    }
    return letter;
}
  
console.log(fearNotLetter("stvwx"));