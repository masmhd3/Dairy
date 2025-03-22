// btn nav
let btnNav = document.getElementById('btn-nav')
let navNav = document.getElementById('nav-nav')
let btn = document.getElementById('nav')
let list = document.getElementById('list');//list


btnNav.addEventListener('click',function(){
    // list
    if (list.style.display == 'none' || list.style.display == ''){
        list.style.display = 'block'
        setTimeout(() => list.style.transform = 'translateX(0)', 50);
    }else if(list.style.display == 'block'){
        list.style.display = 'none'
        setTimeout(() => list.style.transform = 'translateX(-100%)', 50);
    }
    if(list.style.display == 'none' || list.style.display == ''){
        btnNav.classList.remove('fa-x')
        btnNav.classList.add('fa-bars')
    }else{
        btnNav.classList.add('fa-x')
        btnNav.classList.remove('fa-bars')
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
    window.scrollTo({ top: 'center' , behavior: 'smooth' });
    btnNav.click()
    inpAlertNewFont.focus()
}
btnCancelNewFont.onclick = function(){
    setTimeout(() => alertNewFont.style.transform = 'translateX(-100%)', 50);
    alertNewFont.style.display = 'none';
    // dairyBtnNav.classList.toggle('fa-x')
    if(list.style.display == 'none' || list.style.display === ''){
        btnNav.classList.remove('fa-x')
    }else{
        btnNav.classList.add('fa-x')
    }
    ArrbtnsNavDairy.forEach((ele) => {
        ele.classList.remove('fa-x')
        ele.classList.add('fa-bars')
    })
    
}
btnAddNewFont.onclick = function(){
    let newFont = inpAlertNewFont.value.trim()
    localStorage.font = newFont
    document.body.style.fontFamily = localStorage.font
    btnCancelNewFont.click()
}

///////////////////////// make all settings defult /////////////////
document.querySelector('.list-default').onclick = function(){
    localStorage.font = 'sans-serif'
    document.body.style.fontFamily = localStorage.font
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
ArrbtnsNavDairy.forEach((ele) => {
    ele.onclick = () =>{
        btnNav.click()
        if(btnNav.classList.contains('fa-x')){
            ele.classList.add('fa-x')
            ele.classList.remove('fa-bars')
        }else{
            ele.classList.remove('fa-x')
            ele.classList.add('fa-bars')
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





// go to people page
let btnPeoplePage = document.querySelector('.main-box-poeple')
let alertPeople = document.querySelector('.alert-people')
btnPeoplePage.onclick = function(){
    if(alertPeople.style.display == 'none' || alertPeople.style.display == ''){
        alertPeople.style.display = 'block'
        setTimeout(() => alertPeople.style.transform = 'translateX(0)', 50);
        main.style.display = 'none'
    }
}

// go to add people page///
const btnAddPeople = document.getElementById('add-people');
const alertInfpPeople = document.querySelector('.info-people');
btnAddPeople.onclick = function(){
    if(alertInfpPeople.style.display == 'none' || alertInfpPeople.style.display == ''){
        alertInfpPeople.style.display = 'block'
        setTimeout(() => alertInfpPeople.style.transform = 'translateX(0)', 50);
        alertPeople.style.display = 'none'
        alertPeople.style.transform = 'translateX(-100%)'
    }
}

// get data about people
localStorage.dataPeople;
let arrDataPeople;//will go to localStorage
let DataPeopleOBJ={};// will go to arrDataPeople
// check data
if(localStorage.dataPeople != null){
    arrDataPeople =  JSON.parse(localStorage.dataPeople)
}else{
    arrDataPeople = []
}
//
const namePeople = document.getElementById('info-people-name')
const SDPInfo = document.getElementById('SDP-info')
const describePeople = document.getElementById('desc-info-ppl')
const infoImage = document.getElementById('info-image')
const btnSaveDataPeople = document.querySelector('.btn-save-info-p')

const spanNamePeople = document.getElementById('span-name-people')
const spanSmDesPeople = document.getElementById('span-smDes-people')
const textInfoSpan = document.querySelector('.text-info-span')

// make photo string
infoImage.onchange = function() {
    const file = infoImage.files[0];

    if (file) {
        if (file.size > 350 * 1024) { // 500KB
            alert(`⚠️ حجم الصورة يجب أن يكون أقل من 500KB\nImage size must be less than 500KB.\n\n📏 حجم الصورة التي أدخلتها: ${(file.size / 1024).toFixed(2)} KB\n📏 The image size you added is: ${(file.size / 1024).toFixed(2)} KB`);
            infoImage.value = ""; // مسح الاختيار
            return;
        }else{
            let imageReader = new FileReader();
            imageReader.onload = function(imageData) {
            let imageString = imageData.target.result;
            DataPeopleOBJ.dataImgOBJ = imageString;
        };
        imageReader.readAsDataURL(file);
        }
    }
};


//Save BTN
let valBTNSaveP = 'save';
btnSaveDataPeople.onclick = function(){
    if(namePeople.value != '' && describePeople.value != '' && SDPInfo.value != ''&& valBTNSaveP=='save'){
        let newPerson = {
            name: namePeople.value.trim(),
            smallDescribe: SDPInfo.value.trim(),
            description: describePeople.value.trim(),
            dataImgOBJ: DataPeopleOBJ.dataImgOBJ || ''
        };
        arrDataPeople.push(newPerson);
        localStorage.dataPeople = JSON.stringify(arrDataPeople)

        //clear inputs
        namePeople.value = ''
        describePeople.value = ''
        SDPInfo.value = ''
        spanNamePeople.style.display = 'none'
        spanSmDesPeople.style.display = 'none'
        textInfoSpan.style.display = 'none'

        //leave
        if(alertInfpPeople.style.display != 'none' || alertInfpPeople.style.display != ''){
            alertInfpPeople.style.display = 'none';
            alertInfpPeople.style.transform = 'translateX(-100%)';
            alertPeople.style.display = 'block';
            setTimeout(() => alertPeople.style.transform = 'translateX(0)', 50);
        }
        showPeople()

    }else if(namePeople.value == '' || describePeople.value == '' || SDPInfo.value == ''){
        if(namePeople.value == ''){
            spanNamePeople.style.display = 'block'
            spanSmDesPeople.style.display = 'none'
            textInfoSpan.style.display = 'none'
        }else if(SDPInfo.value == ''){
            spanSmDesPeople.style.display = 'block'
            spanNamePeople.style.display = 'none'
            textInfoSpan.style.display = 'none'
        }else if(describePeople.value == ''){
            textInfoSpan.style.display = 'block'
            spanSmDesPeople.style.display = 'none'
            spanNamePeople.style.display = 'none'
        }
    }
}
//function show people
const containerPeople = document.querySelector('.cont-img')
function showPeople(){
    containerPeople.innerHTML = ''
    for(let i = 0; i < arrDataPeople.length; i++){
        if(arrDataPeople[i].dataImgOBJ != ''){
            containerPeople.innerHTML += `
            <a id="${i}" onclick ="fufufu(id);deleteCardPeople(id);delImgCP(id);updateCardPeople(id)"
                href="#" class="box-people">
                <div class="img-container"><img id="imimd" src="${arrDataPeople[i].dataImgOBJ}" alt="photo"></div>
                <h3>${arrDataPeople[i].name}</h3>
                <p>${arrDataPeople[i].smallDescribe}</p>
            </a>`
        }else{
            containerPeople.innerHTML += `
            <a id="${i}" onclick ="fufufu(id);deleteCardPeople(id);updateCardPeople(id)"
                 style="padding:10px" href="#" class="box-people">
                <div class="img-container"><i class="fa-solid fa-user"></i></div>
                <h3>${arrDataPeople[i].name}</h3>
                <p>${arrDataPeople[i].smallDescribe}</p>
            </a>`
        }
        
    }
    DataPeopleOBJ.dataImgOBJ = ''
}
showPeople()

let cardsPeoples = document.querySelectorAll('.box-people')
let readPeoplepage = document.querySelector('.read-people')
let readPeopleH2 = document.querySelector('.read-people h2')
let readPeoplep = document.querySelector('.read-people p')
function fufufu(id){
    if(readPeoplepage.style.display == 'none' || readPeoplepage.style.display == ''){
        readPeoplepage.style.display = 'block'
        setTimeout(() => readPeoplepage.style.transform = 'translate(0)', 50);
        alertPeople.style.display = 'none'
        alertPeople.style.transform = 'translate(-100%)'
    }
    readPeopleH2.innerHTML = arrDataPeople[id].name
    readPeoplep.innerHTML = arrDataPeople[id].description
    
}

// list in read people
const btnRPL = document.getElementById('btnAListRP');
const listRP = document.querySelector('.listBTNsRP');
btnRPL.onclick  = function(){
    if(listRP.style.display == 'none' || listRP.style.display == ''){
        listRP.style.display = 'flex';
        setTimeout(() => listRP.style.opacity = '1', 60);
        btnRPL.classList.add('fa-x')
    }else{
        listRP.style.display = 'none';
        setTimeout(() => listRP.style.opacity = '0', 60);
        btnRPL.classList.remove('fa-x')
    }
}

// leave read people
// btns
let leaveLRP = document.getElementById('leave-LRP');
let deleteLRP = document.getElementById('delete-LRP');
let delImgLRP = document.getElementById('delImg-LRP');
let updateLRP = document.getElementById('update-LRP');

// leave page
leaveLRP.onclick = function(){
    if(readPeoplepage.style.display != 'none' || readPeoplepage.style.display != ''){
        readPeoplepage.style.display = 'none'
        readPeoplepage.style.transform = 'translate(-100%)', 50;
        alertPeople.style.display = 'block'
        setTimeout(() => alertPeople.style.transform = 'translate(0)', 50);
        btnRPL.click()
    }
}
// delete card
function deleteCardPeople(id){
    deleteLRP.onclick = function(){
        arrDataPeople.splice(id,1)
        localStorage.dataPeople = JSON.stringify(arrDataPeople)
        showPeople()
        leaveLRP.click()
    }
}
function delImgCP(id){
    delImgLRP.onclick = function(){
        arrDataPeople[id].dataImgOBJ = ''
        localStorage.dataPeople = JSON.stringify(arrDataPeople)
        showPeople()
        leaveLRP.click()
    }
}



///////////////// profile////////////////////////////
const alertProfile = document.querySelector('.alert-profile')
const boxProfile = document.querySelector('.main-box-profile')
const infoProfile = document.querySelector('.info-profile')
const sitProf = document.querySelector('.sit-prof')

const inpNameProf = document.getElementById('name-pro');
const inpAgeProf = document.getElementById('age-pro');
const inpJobProf = document.getElementById('job-pro');
const inpAdressProf = document.getElementById('adress-pro');
const inpSkillsProf = document.getElementById('skills');
const inpSmlDescription = document.getElementById('smDescription');
const descritionUser = document.getElementById('text-pro-info');



//
boxProfile.onclick = function(){
    if(alertProfile.style.display == 'none' || alertProfile.style.display == ''){
        alertProfile.style.display = 'block'
        setTimeout(() => alertProfile.style.transform = 'translateX(0)', 50);
        main.style.display = 'none'
    }
}
sitProf.onclick = function(){
    if(infoProfile.style.display == 'none' || infoProfile.style.display == ''){
        window.scrollTo({top:0, behavior:'smooth'})
        infoProfile.style.display = 'block'
        setTimeout(() => infoProfile.style.transform = 'translateX(0)', 50);
        alertProfile.style.display = 'none'
        alertProfile.style.transform = 'translateX(-100%)'

        //put data
        if(localStorage.dataUser != null){        
            inpNameProf.value = OBJDataUser.name?? ''
            inpAgeProf.value = OBJDataUser.age?? ''
            inpJobProf.value = OBJDataUser.job?? ''
            inpAdressProf.value = OBJDataUser.adress?? ''
            inpSkillsProf.value = OBJDataUser.skills?? ''
            inpSmlDescription.value = OBJDataUser.smallDescrition?? ''
            descritionUser.value = OBJDataUser.description?? ''
            inpJobProf.value = OBJDataUser.job ? OBJDataUser.job : '';
            inpJobProf.value = OBJDataUser.job ? OBJDataUser.job : '';
            inpJobProf.value = OBJDataUser.job ?? '';
        }
    }
}


// image
localStorage.userPhoto;
let varUserPhoto;
if(localStorage.userPhoto != null){
    varUserPhoto = localStorage.userPhoto
}else{
    varUserPhoto;
}
const userimg = document.querySelector('.userImage')
const boxUserPhoto = document.querySelector('.img-user')
const inpFileUser = document.getElementById('file-user')

boxUserPhoto.onclick = function(){

    if(userimg.style.display === 'none' || userimg.style.display === ''){
        inpFileUser.click()
        inpFileUser.onchange = function(){
            const usrImg = inpFileUser.files[0];
            if(usrImg){
                if(usrImg.size > 500 * 1024){
                    alert(`⚠️ حجم الصورة يجب أن يكون أقل من 500KB\nImage size must be less than 500KB.\n\n📏 حجم الصورة التي أدخلتها: ${(usrImg.size / 1024).toFixed(2)} KB\n📏 The image size you added is: ${(usrImg.size / 1024).toFixed(2)} KB`);
                    infoImage.value = ""; 
                    return;
                }else{
                    let imgReader = new FileReader()
                    imgReader.onload = function(dataIMG){
                        let StringPhoto = dataIMG.target.result;
                        varUserPhoto = StringPhoto
                        localStorage.userPhoto = varUserPhoto
                        userimg.src = varUserPhoto
                        document.querySelector('.userImgList').src = varUserPhoto
                        showImageUser()
                        // getLocalStorageSize()
                    }
                    imgReader.readAsDataURL(usrImg)
                }
            }
        }
    }else{

    }
}

// delete Img User
document.querySelector('.delImgUser').onclick = function(){

    document.getElementById('btnListUserImg').click()
    userimg.style.display = 'none'
    document.getElementById('plusIcon').style.display = 'block'
    document.querySelector('.userImgList').style.display = 'none'
    document.getElementById('list-icon-profile').style.display = 'block'
    inpFileUser.value = ''
    varUserPhoto = ''
    localStorage.userPhoto = null
    document.getElementById('btnListUserImg').style.display = 'none'
    localStorage.removeItem('userPhoto');
    showImageUser()
    
}
//change img
document.querySelector('.chanImgUser').onclick = function(){
    document.getElementById('btnListUserImg').click()
    inpFileUser.value = ''
    userimg.style.display = 'none'
    document.querySelector('.userImgList').style.display = 'none'
    boxUserPhoto.click()
    showImageUser()
}



// add plus or img
function showImageUser(){
    if(localStorage.userPhoto != null ){
        userimg.src = varUserPhoto
        document.querySelector('.userImgList').src = varUserPhoto
        userimg.style.display = 'block'
        document.querySelector('.userImgList').style.display = 'block'
        document.getElementById('plusIcon').style.display = 'none'
        document.getElementById('list-icon-profile').style.display = 'none'
        document.getElementById('btnListUserImg').style.display = 'block'
    }else{
        userimg.src = ''                                        
        document.querySelector('.userImgList').src = ''                                     
        userimg.style.display = 'none'                                      
        document.querySelector('.userImgList').style.display = 'none'                                       
        document.getElementById('plusIcon').style.display = 'block'                                     
        document.getElementById('list-icon-profile').style.display = 'block'                                        
        document.getElementById('btnListUserImg').style.display = 'none'                                        
    }
}
showImageUser()


function getLocalStorageSize() {
    let totalSize = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            totalSize += localStorage.getItem(key).length;
        }
    }
    if((totalSize / 1024 / 1024).toFixed(3) > 4){
        alert(`you have used ${(totalSize / 1024 / 1024).toFixed(3)} MB of localStorage.\n you can't add photos again`) 
    }
}



// list
const listImgUser = document.querySelector('.list-img-user')
    document.getElementById('btnListUserImg').onclick = function(){
    if(listImgUser.style.display == 'none'||listImgUser.style.display == ''){
        listImgUser.style.display = 'flex';
        setTimeout(() =>listImgUser.style.transform = 'translateY(0)' , 50);
        document.getElementById('btnListUserImg').classList.add('fa-x')
    }
    else if(listImgUser.style.display != 'none'||listImgUser.style.display != ''){
        setTimeout(() =>listImgUser.style.transform = 'translateY(100%)' , 50);
        document.getElementById('btnListUserImg').classList.remove('fa-x')
        listImgUser.style.display = 'none'
    }
}



localStorage.dataUser;
let OBJDataUser
if(localStorage.dataUser!= null){
    OBJDataUser = JSON.parse(localStorage.dataUser)
}else{
    OBJDataUser = {};
}
const btnSaveProfile = document.getElementById('btn-profile');
btnSaveProfile.onclick = function(){
    OBJDataUser = {
        name:inpNameProf.value.trim(),
        age:inpAgeProf.value.trim()||'',
        job:inpJobProf.value.trim()||'',
        skills:inpSkillsProf.value.trim()||'',
        smallDescrition:inpSmlDescription.value.trim()||'',
        description:descritionUser.value.trim()||'',
        adress:inpAdressProf.value.trim()||'',
    }
    localStorage.dataUser = JSON.stringify(OBJDataUser)
    console.log(JSON.parse(localStorage.dataUser))

    //leave
    if(infoProfile.style.display != 'none' || infoProfile.style.display != ''){
        infoProfile.style.display = 'none'
        setTimeout(() => infoProfile.style.transform = 'translateX(-100%)', 50);
        alertProfile.style.display = 'block'
        setTimeout(() =>  alertProfile.style.transform = 'translateX(0)', 50);
        window.scrollTo({top:0,behavior:"smooth"})
    }
    // showDataProfile()
    main.style.display= 'none'
    showDataProfile()
}

function showDataProfile(){
    if(localStorage.dataUser != null){
        document.querySelector('.name-prof').innerHTML= `user name <b>:</b> ${OBJDataUser.name}`
        document.querySelector('.adress-prof').innerHTML= `adress <b>:</b> ${OBJDataUser.adress}`
        document.querySelector('.age-prof').innerHTML= `age <b>:</b> ${OBJDataUser.age} `
        document.querySelector('.job-prof').innerHTML= `job <b>:</b> ${OBJDataUser.job}`
        document.querySelector('.skills').innerHTML= `skills <b>:</b> ${OBJDataUser.skills}`
        document.querySelector('.FJOEW').innerHTML= `${OBJDataUser.smallDescrition}`
        document.querySelector('.whoIAM').innerHTML= `${OBJDataUser.description}`
        document.querySelector('.list-user-name').innerHTML= `${OBJDataUser.name}`
    }
}
showDataProfile()










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
    else if(alertPeople.style.display != 'none' && alertPeople.style.display != ''){
        setTimeout(() => alertPeople.style.transform = 'translateX(-100%)', 50);
        alertPeople.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
    else if(alertInfpPeople.style.display != 'none' && alertInfpPeople.style.display != ''){
        setTimeout(() => alertInfpPeople.style.transform = 'translateX(-100%)', 50);
        alertInfpPeople.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
    else if(readPeoplepage.style.display != 'none' && readPeoplepage.style.display != ''){
        setTimeout(() => readPeoplepage.style.transform = 'translateX(-100%)', 50);
        readPeoplepage.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
    else if(alertProfile.style.display != 'none' && alertProfile.style.display != ''){
        setTimeout(() => alertProfile.style.transform = 'translateX(-100%)', 50);
        alertProfile.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }
    else if(infoProfile.style.display != 'none' && infoProfile.style.display != ''){
        setTimeout(() => infoProfile.style.transform = 'translateX(-100%)', 50);
        infoProfile.style.display = 'none'
        dairyBtnNav.click()
        main.style.display = 'grid'
    }

    // condition
    if(alertWriteDairy.style.display == 'none' || alertWriteDairy.style.display == ''){
        spanInputDairy.style.display = 'none'
    }

    //
    ArrbtnsNavDairy.forEach((ele) => {
        ele.classList.remove('fa-x')
        ele.classList.add('fa-bars')
    })
}

    //////////////////////////////////////////////////////////////////////////////////
