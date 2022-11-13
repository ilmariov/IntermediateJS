function pairElement(str) {
    const arr = [];
    for (let i=0; i<str.length; i++) {
        str[i]==='A' ? arr.push(['A', 'T']) : 
        str[i]==='T' ? arr.push(['T', 'A']) :
        str[i]==='C' ? arr.push(['C', 'G']) :
        arr.push(['G', 'C']);
    }
    return arr;
}
  
pairElement("GCG");