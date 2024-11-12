function findOdd(A) {
    //happy coding!
    var unique = [...new Set(A)];
    var fr=[];
  
    for (let i=0;i<unique.length;i++){
      var p=0;
      for (let j=0;j<A.length;j++){
        
        if (A[j]===unique[i]){
          p++;
        }
      }
      fr.push(p)
      
    }
    for (let k=0;k<fr.length;k++){
      if(fr[k]%2 == 1){
       var ans=k
      }
      
    }
    
    
    
    
    
    return unique[ans];
  }