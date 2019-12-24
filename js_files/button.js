//This JavaScript file contains all related effects on buttons
//Resume button shadow effect
let resume = document.getElementsByClassName('cta');
let resume2 = document.getElementsByClassName('cta3');
let readmore = document.getElementsByClassName('cta2');
let button = document.getElementsByClassName('button');

const addShadow = (event) => {
    event.target.style.boxShadow = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
}

const removeShadow = (event) =>{
    event.target.style.boxShadow = "none";
}

//Resume
for(let i=0; i<resume.length;i++){
    resume[i].onmouseover = addShadow;
    resume[i].onmouseout = removeShadow;
}

//Resume 2
for(let i=0; i<resume2.length;i++){
    resume2[i].onmouseover = addShadow;
    resume2[i].onmouseout = removeShadow;
}

//Read More button
for(let i=0; i<readmore.length;i++){
    readmore[i].onmouseover = addShadow;
    readmore[i].onmouseout = removeShadow;
}

//facebook,linkedin, github icon
for(let i=0; i<button.length;i++){
    button[i].onmouseover = addShadow;
    button[i].onmouseout = removeShadow;
}
