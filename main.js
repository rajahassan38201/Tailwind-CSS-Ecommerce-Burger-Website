const hamburger=document.getElementById('hamburger');
const navMenu=document.getElementById('nav-menu');
const navClose=document.getElementById('nav-close');
const navLink=document.querySelectorAll('.nav__link');


navLink.forEach(link => {
    link.addEventListener('click',()=>{
        navMenu.classList.add('hidden')
    })
})

hamburger.addEventListener('click',()=>{
    navMenu.classList.remove('hidden');

})
navClose.addEventListener('click',()=>{
    navMenu.classList.add('hidden')

})

const all=document.querySelectorAll('.item_wrap')
const foods=document.querySelectorAll('.food')
const snacks=document.querySelectorAll('.snack')
const beverage=document.querySelectorAll('.beverage')

const tabs_wrap=document.querySelectorAll(".tabs_wrap ul li");
tabs_wrap.forEach(tab => {
    tab.addEventListener('click',()=>{
        tabs_wrap.forEach(tab =>{
            tab.classList.remove('active')
        })
        tab.classList.add('active')  
        const tabval=tab.getAttribute('data-tabs')   
        
        all.forEach(item =>{
            item.style.display='none'
        })

        if(tabval =='food'){
            foods.forEach(item =>{
                item.style.display='block'
            })
        }
        else if(tabval =='snack'){
            snacks.forEach(item =>{
                item.style.display='block'
            })
        }
        else if(tabval =='beverage'){
            beverage.forEach(item =>{
                item.style.display='block'
            })
        }
        else{
            all.forEach(item =>{
                item.style.display='block'
            })
        }
    })
})

const html= document.querySelector('html')
const themeBtn=document.getElementById('theme-toggle')

if(localStorage.getItem("mode") =="dark"){
    darkMode();
}
else{
    lightMode();
}


themeBtn.addEventListener('click',(e)=>{
    if(localStorage.getItem("mode")=="light"){
        darkMode();
    }
    else{
        lightMode();
    }
    
})

 function darkMode(){
    html.classList.add('dark');
    themeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}
function lightMode(){
    html.classList.remove('dark');
    themeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}

const scrollUp= ()=>{
    const scrollBtn=document.getElementById('scroll-up')
    if(this.scrollY >= 250){
        scrollBtn.classList.remove('-bottom-1/2');
        scrollBtn.classList.add('bottom-4');
    }
    else{
        scrollBtn.classList.add('-bottom-1/2');
        scrollBtn.classList.remove('bottom-4');
    }
}
window.addEventListener('scroll' , scrollUp);

const scrollHeader= ()=>{
    const header=document.getElementById('header')
    if(this.scrollY >= 50){
        header.classList.add('border-b','border-secondaryColor');
    }
    else{
        header.classList.remove('border-b','border-secondaryColor');
    }
}
window.addEventListener('scroll' , scrollHeader);


const activeLink=()=>{
    const sections=document.querySelectorAll('section')
    const navLinks=document.querySelectorAll('.nav__link')
    let current = home;
    sections.forEach(section =>{
        const sectionTop=section.offsetTop;
        if(this.scrollY >= sectionTop-60){
            current=section.getAttribute('id');
        }
    })

    navLinks.forEach(item =>{
        item.classList.remove('text-secondaryColor');
        if(item.href.includes(current)){
            item.classList.add('text-secondaryColor');
        }
    })

}

window.addEventListener('scroll',activeLink);

const sr=ScrollReveal({
    origin:'top',
    distance:"60px",
    duration:2500,
    delay:400,
})

sr.reveal(".home__image");
sr.reveal(".home__content",{origin:'bottom'});

sr.reveal(".category__card");

sr.reveal(".promo__card1");
sr.reveal(".promo__card2",{origin:'bottom'});

sr.reveal(".about__item",{origin:'bottom'});

sr.reveal(".menu__part");
sr.reveal(".menu__items",{origin:'bottom'});

sr.reveal(".review__item");
sr.reveal(".contact__item");

sr.reveal(".footer",{origin:'bottom'});
