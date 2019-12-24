//Optimize image loading
var image = document.querySelector('#profilePicture');
var bigImage = document.createElement("img");

bigImage.onload = function() {
    image.src = this.src;
}

bigImage.src = "./image/myface-Copy.JPG";
console.log('yee');