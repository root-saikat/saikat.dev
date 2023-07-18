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

// show more projects
let loadMoreBtn = document.querySelector('#loadmore');
let currentItem = 6;

loadMoreBtn.onclick =() =>{
    let boxes =[...document.querySelectorAll('.projects-grid .pro')];
    for(var i = currentItem;i < currentItem + 2; i++){
        boxes[i].style.display = 'flex';
    }
    currentItem +=6;
    if (currentItem >= boxes.length){
        loadMoreBtn.style.display='none';
    }
};

