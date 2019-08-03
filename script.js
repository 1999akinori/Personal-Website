// Assign the result of the media query to a variable
var x = window.matchMedia("screen and (min-width:950px)").matches;
// Check if the media query is a match
if (x){
    //Run the code only if it is in the computer display
    const main = document.querySelector('main');
    const aside = document.querySelector('aside');
    const body = document.querySelector('body');
    const name = document.querySelector('#name');

    const tl = new TimelineMax();

    tl.fromTo(main,2, {top:"-120%"}, {top:"0%", ease: Power3.easeInOut}).
    fromTo(aside, 2, {top:"200%"}, {top:"0%", ease: Power3.easeInOut}, "-=2").
    fromTo(name, 2, {opacity: "0"}, {opacity: "1", ease: Power2.easeInOut}, "-=0.5");

}else {

}
