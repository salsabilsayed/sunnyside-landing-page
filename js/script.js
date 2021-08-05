const navIcon = document.querySelector('#nav-icon');
const navList = document.querySelector('nav ul');


navIcon.addEventListener('click',function(){
    if(navList.style.opacity == 0){
        navList.style.opacity = 1;
    }
    else{
             navList.style.opacity = 0;
         }
    // if(navList.classList.contains('d-none')){
    //     //navList.classList.replace('d-none','d-block');
    //     navList.style.opacity = 1;
    // }else{
    //     navList.classList.replace('d-block','d-none');
    //     navList.style.opacity = 0;
    // }
})