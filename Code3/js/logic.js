window.addEventListener("load",bindEvents);
var buttons ;
function bindEvents(){
   // var buttons = document.querySelectorAll("button");
 buttons = document.getElementsByTagName("button");
Array.prototype.forEach.call(buttons,button=>button.addEventListener("click",printXorZero));


}
var isXorZero = false;
function printXorZero(){
if(this.innerText.trim().length==0){
this.innerText = isXorZero?"X":"0";
if(gameOver()){
    document.querySelector("#result").innerText="GAME OVER";
    return ;
}
isXorZero = !isXorZero;
}
}

function blockBlank(one){
if(one.innerText.trim().length==0){
    return true
}
else{
    return false;
}
}

function rowBlank(one,two, three){
    return blockBlank(one) && blockBlank(two) && blockBlank(three)
}

function rowSame(one, two, three){
    
if(!rowBlank(one,two,three) && one.innerText == two.innerText && one.innerText == three.innerText){
    return true;
}
}

function gameOver(){
return rowSame(buttons[0],buttons[1],buttons[2]) || rowSame(buttons[0],buttons[3],buttons[6]);
}