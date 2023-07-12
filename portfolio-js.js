// mobile nav javaScript part 

const micon = document.querySelector('.mobile-menu');
const mnav = document.querySelector('.mobile-nav');
const mxicon = document.querySelector('.fa-xmark');
const mlink = document.querySelectorAll('.mnlink');

micon.addEventListener('click', () =>{
    mnav.classList.add('open-menu');
})
mxicon.addEventListener('click', () =>{
    mnav.classList.remove('open-menu');
})
mlink.addEventListener('click', () =>{
    let closeMnav = document.querySelector('.mobile-nav');
    closeMnav.classList.add('closed-menu');
})

// mobile nav javaScript part ends

