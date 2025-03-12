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

//btn add day
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


////////////////////////////////////////////
// create data of dairys
localStorage.dataDairy;
let arrDataDays;
if(localStorage.dataDairy != null){
    arrDataDays = JSON.parse(localStorage.dataDairy)
}else{
    arrDataDays = []
}
let addDaySave = document.getElementById('btn-save-dairy');
let titleDairy = document.getElementById('title-dairy');
let textDairy = document.getElementById('textarea');
let spanInputDairy = document.getElementById('span-input-dairy');

addDaySave.onclick = function() {
    if(titleDairy.value != '' && textDairy.value != ''){
        //create object has the data
        let dataDayOBJ = {
            title:titleDairy.value.trim(),
            text:textDairy.value.trim(),
        }
        //save data in localStorage
        arrDataDays.push(dataDayOBJ)
        localStorage.dataDairy = JSON.stringify(arrDataDays)

        // clear inputs
        titleDairy.value = ''
        textDairy.value = ''

        //
        if(dairy.style.display == 'none' || dairy.style.display == ''){
            dairy.style.display = 'flex'
            setTimeout(() => dairy.style.transform = 'translateX(0)', 50);
        }
        if(alertWriteDairy.style.display != 'none' || alertWriteDairy.style.display != ''){
            alertWriteDairy.style.display = 'none'
            setTimeout(() => alertWriteDairy.style.transform = 'translateX(-100%)', 50);
        }

        showDayDairy()
        fu()
        spanInputDairy.style.display = 'none'
        //reload web
        window.location.reload();
        
    }else{
        titleDairy.focus()
        spanInputDairy.style.display = 'inline'
    }

    // 
    
}

//function show data
let containerDays = document.querySelector('.alert-dairy-list-days')
function showDayDairy(){
    containerDays.innerHTML = '';
    for(let i = 0; i < arrDataDays.length; i++){
        containerDays.innerHTML +=
        `<a numm="${i}" href="#" id="day-of-dairy"><h3 id="day-title-h3">${arrDataDays[i].title}</h3></a>`
    }
    //

}
showDayDairy()

// alert read dairy
let daysOfDairy = document.querySelectorAll('#day-of-dairy')
let alertReadDairy = document.querySelector('.alert-read-dairy')
let alertReadDairyTitle = document.querySelector('.alert-read-dairy h2')
let alertReadDairyText = document.querySelector('.alert-read-dairy p')
let dday;
function fu(){
    daysOfDairy.forEach((day) =>{
        day.onclick = function(){
            dday = day
            if(alertReadDairy.style.display == 'none' || alertReadDairy.style.display == ''){
                alertReadDairy.style.display = 'flex'
                setTimeout(() => alertReadDairy.style.transform = 'translateX(0)', 50);
                dairy.style.display = 'none'
                dairy.style.transform =  'translateX(-100%)'
                main.style.display = 'none'

                // alertReadDairyTitle.innerHTML = arrDataDays[IarrDataDays].title
                alertReadDairyTitle.innerHTML = arrDataDays[day.getAttribute('numm')].title
                alertReadDairyText.innerHTML = arrDataDays[day.getAttribute('numm')].text
            }
        }
    })
}
fu()

// list in
let btnOpenListRead = document.getElementById('show-list-read');
let readList = document.querySelector('.read-list');
let btnCloseListRead = document.getElementById('btn-close-list')

btnOpenListRead.onclick = function(){
    if(readList.style.display == 'none' || readList.style.display == ''){
        readList.style.display = 'block';
        setTimeout(() => readList.style.opacity = '1' ,50)
    }
}
btnCloseListRead.onclick = function(){
    if(readList.style.display != 'none' || readList.style.display != ''){
        setTimeout(() => readList.style.opacity = '0' ,50)
        readList.style.display = 'none';
    }
}

//btns
let btnLevReadD = document.querySelector('.read-list .btn-leave-rd')
btnLevReadD.onclick = function(){
    btnCloseListRead.click()
    if(alertReadDairy.style.display != 'none' || alertReadDairy.style.display != ''){
        alertReadDairy.style.display = 'none'
        setTimeout(() => alertReadDairy.style.transform = 'translateX(-100%)', 50);
        dairy.style.display = 'flex'
        setTimeout(() =>  dairy.style.transform =  'translateX(0)', 50);
    }
}

let btnDelReadD = document.querySelector('.read-list .btn-del-rd');
btnDelReadD.onclick = function(){
    arrDataDays.splice(dday.getAttribute('numm'),1)
    localStorage.dataDairy = JSON.stringify(arrDataDays)

    if(alertReadDairy.style.display != 'none' || alertReadDairy.style.display != ''){
        alertReadDairy.style.display = 'none'
        setTimeout(() => alertReadDairy.style.transform = 'translateX(-100%)', 50);
        dairy.style.display = 'flex'
        setTimeout(() =>  dairy.style.transform =  'translateX(0)', 50);
    }
    showDayDairy()
    fu()
    location.reload()
}
//
let btnupdateReadD = document.querySelector('.read-list .btn-updata-rd');
btnupdateReadD.onclick = function(){
    btnAddDay.click()
    btnLevReadD.click()
    addDaySave.innerHTML = 'update'
    if(addDaySave.innerHTML == 'update'){
        titleDairy.value = arrDataDays[dday.getAttribute('numm')].title
        textDairy.value = arrDataDays[dday.getAttribute('numm')].text
        addDaySave.onclick = function(){
            arrDataDays[dday.getAttribute('numm')].title = titleDairy.value
            arrDataDays[dday.getAttribute('numm')].text = textDairy.value
            localStorage.dataDairy = JSON.stringify(arrDataDays)

            if(dairy.style.display == 'none' || dairy.style.display == ''){
                dairy.style.display = 'flex'
                setTimeout(() => dairy.style.transform = 'translateX(0)', 50);
            }
            if(alertWriteDairy.style.display != 'none' || alertWriteDairy.style.display != ''){
                alertWriteDairy.style.display = 'none'
                setTimeout(() => alertWriteDairy.style.transform = 'translateX(-100%)', 50);
            }
            titleDairy.value = ''
            textDairy.value = ''
            location.reload()
        }
    }

}





// go to home page
let btnHomePage = document.getElementById('list-home-page')
btnHomePage.onclick = function(){
    //dairy page
    if(dairy.style.display != 'none' && dairy.style.display != ''){
        setTimeout(() => dairy.style.transform = 'translateX(-100%)', 50);
        dairy.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
    // write dairy page
    else if(alertWriteDairy.style.display != 'none' && alertWriteDairy.style.display != ''){
        setTimeout(() => alertWriteDairy.style.transform = 'translateX(-100%)', 50);
        alertWriteDairy.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
    //
    else if(alertReadDairy.style.display != 'none' && alertReadDairy.style.display != ''){
        setTimeout(() => alertReadDairy.style.transform = 'translateX(-100%)', 50);
        alertReadDairy.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }





    // condition
    if(alertWriteDairy.style.display == 'none' || alertWriteDairy.style.display == ''){
        spanInputDairy.style.display = 'none'
    }
}