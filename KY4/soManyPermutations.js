function permutations(string) {
    if (string.length === 1) return [string];
  
    let result = [];
  
    for (let i = 0; i < string.length; i++) {
      
      let char = string[i];
      
     
      let remainingChars = string.slice(0, i) + string.slice(i + 1);
      
      
      let remainingPerms = permutations(remainingChars);
  
    
      for (let perm of remainingPerms) {
        result.push(char + perm);
      }
    }
  
   
    return [...new Set(result)];
  }
  