// Nav scrollTop

let lastScrollTop = 0;
header = document.querySelector(".header");
window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {

	    header.style.top = "-60px";
        
    } else {
        header.style.top = 0;
    }
    header.style.transitionDelay = "0.5s";
    lastScrollTop = scrollTop;
})

//ArrowTop

let topBtn = document.querySelector(".fa-chevron-up");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scroll > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
        topBtn.style.transition = ".5s";
    } else {
        topBtn.style.display = "none";
    }
}

// ModeDark

let icon = document.querySelector(".icon");

icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}

//https://www.youtube.com/watch?v=9LZGB3OLXNQ