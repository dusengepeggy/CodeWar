function solution(str){
    const a= str.split("")
    if (a.length%2==1){
      a.push("_")
    }
    const pairs = [];
    for (let i =0; i < a.length-1; i+= 2) {
      pairs.push(`${a[i]}${a[i + 1]}`);  
    }
  
    return pairs
  }