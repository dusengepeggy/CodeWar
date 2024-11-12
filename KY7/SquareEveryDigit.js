function squareDigits(num){
    var a= num.toString();
    var b=a.split("");
    var c=[];
    for(let i=0;i<b.length;i++){
      var d=Number(b[i]);
      c.push((d*d).toString());
    }
    var e=c.join('')
    
    
    return Number(e);
  }
  