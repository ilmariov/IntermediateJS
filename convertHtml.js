function convertHTML(str) {
    const chars = "&<>'" + '"';
    const arr = ['&amp;', '&lt;', '&gt;', '&apos;', '&quot;']
    for (let i = 0; i < 5; i++) {
        let char = chars[i];
        let regex = new RegExp(char, 'g');
        if (regex.test(str)) {str = str.replace(regex, arr[i])}
    }
    return str;
}
  
console.log(convertHTML("Dolce & Gabbana"));