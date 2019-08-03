//Create a function that allows the user to click the menu and nav pops up
let menu = document.querySelector('ul');
let menulink = document.querySelector('img'); //Menu Icon
let menulinkTablet = document.querySelector('#menuIconTablet');

const popUpSideBar = function(e) {
    menu.classList.toggle('active'); //add the id or remove it
    e.preventDefault(); //prevents the browser from reloading(
}

menulink.addEventListener('click', popUpSideBar);
menulinkTablet.addEventListener('click', popUpSideBar);


//navigation tab effects
console.log(document.querySelectorAll('li'));
let navtab = document.querySelectorAll('li');

navtab.forEach(function(element){
    element.onmouseover = function(){
        element.style.backgroundColor = "#E0E6FF";
    }
    element.onmouseout = function(){
        element.style.backgroundColor = "rgba(255,255,255,0)";
    }
});

//Boldness effect on the navigation bar
let theClickedOne;

let a = document.querySelectorAll('a');

for(let i=0; i<a.length;i++){    
    a[i].onclick = function(){
        theClickedOne = i;
        for(let i=0; i<a.length;i++){
            if(theClickedOne !== i){
            a[i].style.fontWeight = "400";
            }
        }
        a[i].style.fontWeight = "bold";
    }
}