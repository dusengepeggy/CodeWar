function bouncingBall(h,  bounce,  window) {
    var n=0
    var k= h
    if(h<=0 || bounce<=0 || bounce >=1 || h < window){
      return (-1)
    }
    else{
      while (k>window){ 
        n++
        k=k*bounce
      }
      return ((n*2)-1)
    }
  
    // your code here
  }