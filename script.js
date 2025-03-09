// btn nav
let btnNav = document.getElementById('btn-nav')
let navNav = document.getElementById('nav-nav')
let btn = document.getElementById('nav')
let list = document.getElementById('list');//list


btnNav.addEventListener('click',function(){
    // list
    if (list.style.display == 'none' || list.style.display === ''){
        list.style.display = 'block'
        setTimeout(() => list.style.transform = 'translateX(0)', 50);
    }else if(list.style.display == 'block'){
        list.style.display = 'none'
        setTimeout(() => list.style.transform = 'translateX(-100%)', 50);
    }
    if(list.style.display == 'none' || list.style.display === ''){
        btnNav.classList.remove('fa-x')
    }else{
        btnNav.classList.add('fa-x')
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

// fonts
localStorage.font ;
if (localStorage.font != null){
    document.body.style.fontFamily = localStorage.font 
}else{
    localStorage.font;
}
function validFont(liFont){
    let validFont = liFont.innerHTML
    localStorage.font = validFont
    document.body.style.fontFamily = localStorage.font

}
// add font not valid
let alertNewFont = document.getElementById('alert-new-font');
let inpAlertNewFont = document.getElementById('alert-new-font-inp');
let btnCancelNewFont = document.getElementById('alert-new-font-btns-cancel');
let btnAddNewFont = document.getElementById('alert-new-font-btns-add');
let btnAddFant = document.getElementById('list-btn-addFant');
let dairyBtnNav = document.getElementById('dairy-btn-nav');//

btnAddFant.onclick = function(){
    alertNewFont.style.display = 'flex';
    setTimeout(() => alertNewFont.style.transform = 'translateX(0)', 50);
    window.scrollTo({ top: document.body.scrollHeight / 2 , behavior: 'smooth' });
    btnNav.click()
    inpAlertNewFont.focus()
}
btnCancelNewFont.onclick = function(){
    setTimeout(() => alertNewFont.style.transform = 'translateX(-100%)', 50);
    alertNewFont.style.display = 'none';
    dairyBtnNav.classList.toggle('fa-x')
}
btnAddNewFont.onclick = function(){
    let newFont = inpAlertNewFont.value.trim()
    localStorage.font = newFont
    document.body.style.fontFamily = localStorage.font
    btnCancelNewFont.click()
}



// Dairy
let dairy = document.getElementById('dairy');
let boxDairy = document.getElementById('main-box-dairy');
let main = document.getElementById('main')

boxDairy.onclick = function(){
    if(dairy.style.display == 'none' || dairy.style.display == ''){
        dairy.style.display = 'flex'
        setTimeout(() => dairy.style.transform = 'translateX(0)', 50);
        main.style.display = 'none'
    }
    ArrbtnsNavDairy.forEach((ele) =>{
        if(btnNav.classList.contains('fa-x')){
            ele.classList.add('fa-x')
        }else{
            ele.classList.remove('fa-x')
        }
    })
}

///
let daysScroll = document.querySelectorAll('.alert-dairy-list-days a')
let ArrbtnsNavDairy = document.querySelectorAll('#dairy-btn-nav')//btns
console.log(ArrbtnsNavDairy)
ArrbtnsNavDairy.forEach((ele) => {
    ele.onclick = () =>{
        btnNav.click()
        if(btnNav.classList.contains('fa-x')){
            ele.classList.add('fa-x')
        }else{
            ele.classList.remove('fa-x')
        }
    }
})

//
let btnAddDay = document.getElementById('btnAddDay')
let alertWriteDairy = document.getElementById('alert-write-dairy')
btnAddDay.onclick = function(){
    if(dairy.style.display != 'none' || dairy.style.display != ''){
        dairy.style.display = 'none'
        setTimeout(() => dairy.style.transform = 'translateX(-100%)', 50);
    }
    if(alertWriteDairy.style.display == 'none' || alertWriteDairy.style.display == ''){
        alertWriteDairy.style.display = 'flex'
        setTimeout(() => alertWriteDairy.style.transform = 'translateX(0)', 50);
    }
}







// go to home page
let btnHomePage = document.getElementById('list-home-page')
btnHomePage.onclick = function(){
    if(dairy.style.display != 'none' && dairy.style.display != ''){
        setTimeout(() => dairy.style.transform = 'translateX(-100%)', 50);
        dairy.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
    else if(alertWriteDairy.style.display != 'none' && alertWriteDairy.style.display != ''){
        setTimeout(() => alertWriteDairy.style.transform = 'translateX(-100%)', 50);
        alertWriteDairy.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
}