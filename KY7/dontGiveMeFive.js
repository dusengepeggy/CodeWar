function dontGiveMeFive(start, end){
    let ans = 0
    for (let i=start ; i<=end;i++){
      if(!(String(i).includes("5"))){
        ans ++
      }
    }
    return ans
}