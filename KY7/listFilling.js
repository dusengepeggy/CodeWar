function filter_list(l) {
    var a=[]
    // Return a new array with the strings filtered out
    for (let i=0;i<l.length;i++){
      if (typeof l[i]!=="string"){
        a.push(l[i])
        
      }
    }
    return a
  }