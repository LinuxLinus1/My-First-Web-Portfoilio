const first = document.getElementsByClassName('dot').item(0);

const second = document.getElementsByClassName('dot').item(1);

const third = document.getElementsByClassName('dot').item(2);

const images = ["one", "two", "three"];
let temp = 0;
const mySlides = document.querySelectorAll('.mySlides');
function carousel() {
    let slideArray = Array.from(mySlides)
    slideArray.forEach((slide)=>{
        if (slide.classList.contains(images[temp])) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    if (temp == 0) {
        first.style.backgroundColor = '#504f4f'
        second.style.backgroundColor = '#bbb'
        third.style.backgroundColor = '#bbb'
    } else {
        if (temp == 1) {
            second.style.backgroundColor = '#504f4f'
            third.style.backgroundColor = '#bbb'
            first.style.backgroundColor = '#bbb'
            
        } else {
            if (temp == 2) {
                third.style.backgroundColor = '#504f4f'
                second.style.backgroundColor = '#bbb'
                first.style.backgroundColor = '#bbb'
            }
        }
    }
}
carousel();

function nextFn() {
    if (temp == (images.length-1)) {
        temp = 0;
        carousel();
    } else {
        temp = ++temp;
        carousel();
    }
}
function prevFn() {
    if (temp == (images.length-1)) {
        temp = 2;
        carousel();
    } else {
        temp = --temp;
        carousel();
    }
}


const prev= document.querySelector('.prev');
const next= document.querySelector('.next');
setInterval(() => {
    nextFn()
}, 3000);


next.addEventListener('click', nextFn)
prev.addEventListener('click', prevFn);
first.addEventListener('click', ()=>{
    temp = 0;
    carousel();
})

second.addEventListener('click', ()=>{
    temp = 1;
    carousel();
})

third.addEventListener('click', ()=>{
    temp = 2;
    carousel();
})


const dropdown = document.querySelector(".hamburger");
const link = document.getElementsByClassName("nav-links");
dropdown.addEventListener('click', ()=>{
    if (document.querySelector('.nav-links').style.right == '-60%') {
        dropdown.classList.add('activeHamburger')
        document.querySelector('.nav-links').style.right = '0%'
    } else {
        dropdown.classList.remove('activeHamburger')
        document.querySelector('.nav-links').style.right = '-60%'
    }
})

const grid = Array.from(document.querySelector('.images').querySelectorAll('img'))
const tabs = Array.from(document.querySelectorAll('.tabs'))

function ontab(a, b) {
    tabs.forEach((tab)=>{
        tab.classList.remove('active-ptf')
    })
    tabs[a].classList.add('active-ptf')
    
    grid.forEach((img)=>{
        img.style.display = 'none'
    })
    for (let img of grid) {
        if(img.classList.contains(b)) {
            img.style.display = 'inline'
        } else {
            img.style.display = 'none'
        }
    }
}
ontab(0, 'poster')