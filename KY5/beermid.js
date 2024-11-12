// Returns number of complete beeramid levels
var beeramid = function(bonus, price) {
    var bottles=Math.floor(bonus/price)
    let sum=bottles;
    let len=0;
    let i=1
    
    if (price==0 || bonus==0 || price>bonus){
      return 0
    }
    console.log(bottles)
    while (sum>=i*i){
      
        sum-=i*i
        i++
        len ++
    }
    
     return len
      
    
    
  
    
   
    
  }