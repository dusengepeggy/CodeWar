class PaginationHelper {
	constructor(collection, itemsPerPage) {
    this.collection=collection
    this.itemsPerPage=itemsPerPage
	}
	itemCount() {
	  return this.collection.length
	}
	pageCount() {
	  return Math.ceil(this.collection.length/this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
    const a=Math.ceil(this.collection.length/this.itemsPerPage)
    if (pageIndex>=a || pageIndex<0){
      return -1
    }
    else if(pageIndex == a-1){
      if (this.collection.length%this.itemsPerPage==0){
        return this.itemsPerPage
      }
      return this.collection.length%this.itemsPerPage
    }
    else {
      return this.itemsPerPage
    }
	}
	pageIndex(itemIndex) {
	  if (itemIndex >= this.collection.length || itemIndex <0 ){
      return -1
    }
    else{
      return Math.floor(itemIndex/this.itemsPerPage) 
    }
	}
}