
const navigation = document.querySelector('nav');

window.addEventListener('scroll', ()=> {
    if(window.scrollY > 85){
        navigation.classList.add("nav-anim");
    }else{
        navigation.classList.remove("nav-anim");
    }
})