function orderWeight(strng) {
    let a= strng.split(" ")
    let b=a.map(ele=>ele.trim().split("").map(Number).reduce((acc,curr)=> {
        acc.name=ele
        acc.sum=(acc.sum||0 )+curr
        
        return acc
    },{}))
    let c= b.sort((a,b)=>{
    if (a.sum === b.sum) {
        return a.name.localeCompare(b.name); 
    }
    return a.sum - b.sum; 
})
    let d= c.reduce((acc,curr)=>{
        acc.push(curr.name)
        return acc
    },[])
    return d.join(" ")
}
console.log(orderWeight("56 65 74 100 99 86 68 180 90"))