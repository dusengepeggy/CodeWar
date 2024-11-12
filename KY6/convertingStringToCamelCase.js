function toCamelCase(str){
    var a = str.split(/-|_/)
    var b=[a[0]]
    for (let i=1;i<a.length;i++){
     b.push(a[i].charAt(0).toUpperCase()+ a[i].slice(1))
  
    }
    
    
    return b.join("")
  
  }