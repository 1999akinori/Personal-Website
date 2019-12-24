//Photogallery
const exit = document.getElementById('exit');
const blackBackground = document.getElementById('backgroundFade');
const bigPic = document.getElementsByClassName('big');
const small = document.getElementsByClassName('small');
const disableScroll = document.querySelector('main');
const menuIcon = document.querySelectorAll('#burger');
console.log(small);

//When clicking exit from viewing a large photo.
const displayNone = function(){
    exit.style.display = 'none';
    blackBackground.style.display = 'none';
    disableScroll.style.left = '0%'; //To fix the issue of having a white space in the backgrounf
    
    menuIcon.forEach(function(item){
        item.style.display = 'block';
    });
    Array.prototype.forEach.call(bigPic, (element) => {
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
        if(window.screen.availWidth >= 750 && window.screen.availWidth < 1000){
            menuIcon.forEach(function(item){
                item.style.display = 'none';
                console.log(item.style.display);
            });
        }else{
            menuIcon.forEach(function(item){
                item.style.display = 'block';
            })
        }
        clickedImage = i;
        for(let i=0; i<small.length;i++){
            //checks the index of the image array with the clicked one
            if(clickedImage !== i){
            }else{
                bigPic[i].style.display = "block";
                exit.style.display = 'block';
                blackBackground.style.display = 'block';
                /*disableScroll.style.overflowY = 'hidden';*/
            }
        }
    }
}

//Adds color to image when hover
for(let i=0; i<small.length;i++){    
    small[i].onmouseover = function(){
        small[i].src = small[i].src.replace('shadow.jpg', 'Small.JPG'); //replaces the black-white image to color image
    console.log("it worked");
    }

}



exit.onclick = displayNone;