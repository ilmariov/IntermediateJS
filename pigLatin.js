function translatePigLatin(str) {
    const index = str.search(/[aeiou]/);
    if (index > 0) {
        let chars = str.slice(0, index);
        str = str.replace(chars, '');
        str = str + chars + 'ay';
    } else if (index === 0) {
        str = str + 'way'
    } else {
        str = str + 'ay'
    }
    return str;
    
}

function translatePigLatin2(str) {
    return str
        .replace(/^[aeiou]\w*/, "$&way")
        .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}


console.log(translatePigLatin2("consonant"));