// mobile nav javaScript part 

let micon = document.querySelector('.mobile-menu');
let mnav = document.querySelector('.mobile-nav');
let mxicon = document.querySelector('.fa-xmark');

micon.addEventListener('click', () =>{
    mnav.classList.add('open-menu');
});
mxicon.addEventListener('click', () =>{
    mnav.classList.remove('open-menu');
});

let am = document.querySelectorAll('.mnlink').forEach(element=>{
    element.onclick = function(){
        mnav.classList.remove('open-menu');
    }
});

// mobile nav javaScript part ends

