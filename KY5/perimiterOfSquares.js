function perimeter(n) {
    let sum=1
    let start=0
    let end=1
    for (let i=0 ;i<n ; i++){
      let ans=start + end
      sum+= ans
      start=end
      end=ans
    }
    
    return sum*4
  }