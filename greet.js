
window.addEventListener("load",bindEvents);
function bindEvents(){
    document.querySelector("#greet").addEventListener("click",sayHello);
}
//bindEvents();
function sayHello(){
    var firstName = document.querySelector("#firstname").value;
    var lastName  = document.querySelector("#lastname").value;
    document.querySelectorAll("h2")[0].innerText = fullName(firstName,lastName);
    //document.querySelectorAll("h2")[0].innerText = `Hello ${initCap(firstName)} and ${initCap(lastName)}`;
}

// function initCap(name){
// return name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
// }

