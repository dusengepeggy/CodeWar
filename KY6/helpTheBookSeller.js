function stockList(books, categories) {
    const ret = []
    let count =0
    for (let ele of categories){
       let sum=0
      books.map(book=>{
       
        if (book[0]==ele){
          let c =Number(book.split(" ")[1])
          sum += c
        }
  
      })
      if (sum==0){
        count ++
      }
      ret.push(`(${ele} : ${sum})`)
    }
     if (count ==categories.length){
       return ""
     }
      return ret.join(" - ");
  }