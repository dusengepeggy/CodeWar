function parse( data ){
    let a =0 
    let b=[]
    var c = data.split("").filter(e=>e=="i"||e=="d"||e=="s"||e=="o")
    for (let i= 0; i < c.length ; i++){
      if(c[i]=="i"){
        a++
      }
      else if(c[i]=="d"){
        a--
      }
      else if (c[i]=="s"){
        a*=a
      }
      else{
        b.push(a)
      }
    }
    
    return b
    
  }