window.addEventListener("load", init);

function init(){
    updateCount();
    bindEvents();
}

function bindEvents() {
    document.querySelector("#add").addEventListener("click", addItem);
}

function createIcon(path,id,fn){
    var img = document.createElement("img");
    img.src = path;
    img.className="size";
    img.setAttribute("itemid",id);
    img.addEventListener("click",fn);
    return img;
}

function toggleDelete(){
    console.log("Toggle Happen ",this.getAttribute("itemid"));
    var id = parseInt(this.getAttribute("itemid"));
    var img = this;
    var tr = img.parentNode.parentNode;
    console.log("TR is ",tr);
    tr.classList.toggle("red");
    itemOperations.mark(id);
    updateCount();

}

function addItem() {
    var id = document.querySelector("#id").value;
    var name = document.querySelector("#name").value;
    var price = document.querySelector("#price").value;
    var desc = document.querySelector("#desc").value;
    var itemDate = document.querySelector("#itemdate").value;
    var url = document.querySelector("#url").value;
    var color = document.querySelector("#color").value;
    itemOperations.add(id, name, price, itemDate, desc, url, color);
    var items = itemOperations.getItems();
    var lastItemObject = items[items.length-1];
    updateCount();
    print(lastItemObject);
}

function updateCount(){
    document.querySelector("#total").innerHTML =  itemOperations.getItems().length;
    document.querySelector("#mark").innerText = itemOperations.countMark();
    document.querySelector("#unmark").innerText = itemOperations.getItems().length - itemOperations.countMark();
}

function print(itemObject) {
    var itemTable= document.querySelector("#itemtable");
    var tr = itemTable.insertRow();
    var index = 0;
    for(let key in itemObject){
        if(key=='markForDelete'){
            continue;
        }
    tr.insertCell(index).innerText = itemObject[key];
    index++;
    }   
    var td = tr.insertCell(index);
    td.appendChild(createIcon("images/trash.png",itemObject.id,toggleDelete));
    td.appendChild(createIcon("images/edit.png",itemObject.id,toggleDelete));

   //itemTable.insertRow()
}