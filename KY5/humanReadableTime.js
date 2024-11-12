function humanReadable (seconds) {
    var hrs=0;
    var min=0;
    var sec=0
     
    if (seconds<60){
      
      sec=seconds
      
    }
    else if (seconds>=60 && seconds<3600){
      min=Math.floor(seconds/60)
      sec=seconds%60
      
      
    }
     else if (seconds>=3600 && seconds<360000){
       
      min=Math.floor(seconds/60)
      sec=seconds%60
      hrs=Math.floor(min/60)
      min=min%60
      
     
    }
    if (hrs<10){
      hrs=`0`+hrs
    }
    if (min<10){
      min=`0`+min
    }
    if (sec<10){
     sec=`0`+sec
    }
     
    return `${hrs}:${min}:${sec}`
     
   }