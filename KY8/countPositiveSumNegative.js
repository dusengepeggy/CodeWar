function countPositivesSumNegatives(input) {
    if (!input){
      return []
    }
    let ans =[0,0]
    for (let ele of input ){
      if(ele<0){
        ans[1]+=ele
      } 
      else if (ele>0){
       ans[0]++ 
      }
      
    }
    if(ans[0]==0 && ans[1]==0){
      return []
    }
    return ans
  }