//Create a function that allows the user to click the menu and nav pops up
let menu = document.querySelector('ul');
let icon = document.querySelector('#burger');
console.log(menu.classList);


const popUpSideBar = function(e) {
    //Separate function for when activating and deactivating sidebar
    if(menu.classList[0] === "active"){
        menu.style.animation = "navDisappear 0.4s ease forwards"
        setTimeout(function(){menu.classList.toggle('active')}, 400); //waits for the animation to complete
        e.preventDefault();
        // forwards keeps the changes the animation creates
    }else{
        menu.classList.toggle('active');
        menu.style.animation = "navAppear 0.7s ease forwards" 
        e.preventDefault(); //prevents the browser from reloading
    }

}

icon.addEventListener('click', popUpSideBar);


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
/*
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
}*/