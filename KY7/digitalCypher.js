function encode(str,  n)
{
var b=[]
var a=str.split("")
var c=n.toString().split("")
var d= c.length




a.forEach(ele=>{
  b.push(ele.toUpperCase().charCodeAt()-64)
})
let z=0
for (let i=0;i<a.length;i++){
  if (z > d-1){
    z=0
  }
  
    b[i]+=parseFloat(c[z])
  z++

  
}

  
  
  return b;
}