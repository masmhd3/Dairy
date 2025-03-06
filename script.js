// btn nav
let btnNav = document.getElementById('btn-nav')
let navNav = document.getElementById('nav-nav')
let btn = document.getElementById('nav')
let list = document.getElementById('list');//list

btnNav.addEventListener('click',function(){
    btnNav.classList.toggle('fa-x')
    // list
    if (list.style.display == 'none' || list.style.display === ''){
        list.style.display = 'block'
        setTimeout(() => list.style.transform = 'translateX(0)', 50);
    }else if(list.style.display == 'block'){
        list.style.display = 'none'
        setTimeout(() => list.style.transform = 'translateX(-5000px)', 50);
    }
}) 

//btn moods
let btnMoods = document.getElementById('btn-mood');
let btnMoodIcon = document.getElementById('btn-mood-icon');
let ulMoods = document.getElementById('ul-moods');

btnMoods.onclick = function(){
    btnMoodIcon.classList.toggle('fa-angle-left')
    btnMoodIcon.classList.toggle('fa-angle-down')

    if(ulMoods.style.display == 'none' || ulMoods.style.display === ''){
        ulMoods.style.display = 'flex';
        setTimeout(() => ulMoods.style.opacity = '1' , 100);
    }else{
        setTimeout(() => ulMoods.style.opacity = '0' , 100);
        ulMoods.style.display = 'none';
    }
}

//btn fonts
let btnFonts = document.getElementById('btn-fonts');
let btnIconFonts = document.getElementById('btn-icon-fonts');
let ulFonts = document.getElementById('ul-fonts');

btnFonts.onclick = function(){
    btnIconFonts.classList.toggle('fa-angle-left')
    btnIconFonts.classList.toggle('fa-angle-down')

    if(ulFonts.style.display == 'none' || ulFonts.style.display === ''){
        ulFonts.style.display = 'grid';
        setTimeout(() => ulFonts.style.opacity = '1' , 100);
    }else{
        setTimeout(() => ulFonts.style.opacity = '0' , 100);
        ulFonts.style.display = 'none';
    }
}

