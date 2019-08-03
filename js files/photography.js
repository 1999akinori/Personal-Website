//Photogallery
const exit = document.getElementById('exit');
const blackBackground = document.getElementById('backgroundFade');
const big = document.getElementsByClassName('big');
const small = document.getElementsByClassName('small');
const disableScroll = document.querySelector('main');
const menuIcon = document.querySelector('#menuIconTablet');
console.log(small);

//When clicking exit from viewing a large photo.
const displayNone = function(){
    exit.style.display = 'none';
    blackBackground.style.display = 'none';
    disableScroll.style.left = '0%'; //To fix the issue of having a white space in the backgrounf
    //Assures that the menuIcon in tablet view only shows up in tablet view
    if(window.screen.availWidth >= 650 && window.screen.availWidth < 950){
        menuIcon.style.display = 'block';
    }else{
        menuIcon.style.display = 'none';
    }

    Array.prototype.forEach.call(big, (element) => {
        element.style.display = 'none';
    });
    Array.prototype.forEach.call(small, (element) => {
        element.style.display = 'block';
    });
    disableScroll.style.overflowY = 'scroll';
}

//When you click one of the images
let clickedImage = 0;
console.log(small.length);
for(let i=0; i<small.length;i++){    
    small[i].onclick = function(){
        //brute force adjustment to a shift of the main
        if(window.screen.availWidth < 950){
            disableScroll.style.left = '-4%'; 
        }else{
            disableScroll.style.left = '0%';
        }
        clickedImage = i;
        for(let i=0; i<small.length;i++){
            //checks the index of the image array with the clicked one
            if(clickedImage !== i){
            }else{
                big[i].style.display = "block";
                exit.style.display = 'block';
                blackBackground.style.display = 'block';
                menuIcon.style.display ='none';
                /*disableScroll.style.overflowY = 'hidden';*/
            }
        }
    }
}

//Adds color to image when hover
for(let i=0; i<small.length;i++){    
    small[i].onmouseover = function(){
        small[i].src = small[i].src.replace('shadow.jpg', '.JPG'); //replaces the black-white image to color image
    }
}



exit.onclick = displayNone;