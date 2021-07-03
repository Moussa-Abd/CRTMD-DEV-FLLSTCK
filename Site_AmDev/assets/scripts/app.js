let lastScrollTop = 0;
    header = document.querySelector(".header");
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        header.style.top = "-60px";
    } else {
        header.style.top = 0;
    }
    lastScrollTop = scrollTop;   
})

let topBtn = document.querySelector(".fa-arrow-circle-up");
window.onscroll = function(){
    scrollFunction()
};
function scrollFunction(){
    if(document.body.scroll > 100 || document.documentElement.scrollTop > 100){
        topBtn.style.display= "block";
    } else {
        topBtn.style.display="none";
    }
}