function duplicateCount(text){
    const a = text.toLowerCase().split("")
    const arr=[]
    const b= new Set([...a])
    for (let ele of b){
      arr.push(a.filter(el=>el==ele).length)
    }
    
    return(arr.filter(elem=>elem>1).length)
}