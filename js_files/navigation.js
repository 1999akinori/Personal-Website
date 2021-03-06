//Create a function that allows the user to click the menu and nav pops up
let menu = document.querySelector('ul');
let icon = document.querySelector('#burger');
let navtab = document.querySelectorAll('nav ul li');


const popUpSideBar = function(e) {
    //Separate function for when activating and deactivating sidebar
    //When the navigation is active
    if(menu.classList[0] === "active"){
        icon.classList.toggle('flipflip');
        menu.style.animation = "navDisappear 0.4s ease forwards"
        setTimeout(function(){menu.classList.toggle('active')}, 400); //waits for the animation to complete
        e.preventDefault();
        // forwards keeps the changes the animation creates
    }else{
        //when navigation is clicked
        menu.classList.toggle('active');
        icon.classList.toggle('flipflip');
        menu.style.animation = "navAppear 0.7s ease forwards" 
        navtab.forEach((item, index) =>{
            item.style.animation = `increaseOpacity 0.2s ease forwards ${index/7 + 0.5}s` 
        });
        e.preventDefault(); //prevents the browser from reloading
    }

}

icon.addEventListener('click', popUpSideBar);


//navigation tab effects

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