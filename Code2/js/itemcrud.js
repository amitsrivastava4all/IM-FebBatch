const itemOperations = {
    itemList:[],
    add(id, name, price,itemdate, desc, url, color ){
        var itemObject = new Item(id, name, price,itemdate, desc, url, color);
        this.itemList.push(itemObject);

    },
    getItems(){
        return this.itemList;
    }
}