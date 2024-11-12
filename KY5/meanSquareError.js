var solution = function(firstArray, secondArray) {
  
    var len=firstArray.length
    var sum=0
    
    if (secondArray.length>len){
      
      len = secondArray.length
    }
    
    for (let i=0;i<len;i++){
      var b= (firstArray[i]-secondArray[i])*(firstArray[i]-secondArray[i])
      sum+=b
      
    }
    
    var mean = sum/len
    
    return mean 
    
    
  }