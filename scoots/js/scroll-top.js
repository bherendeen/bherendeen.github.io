let scrollTop = document.getElementById("scrollTop");

const scrollFunc = () => {
    let y = window.scrollY;
    if (y >= 500) {
        scrollTop.className = "toTop show";
    } else {
        scrollTop.className = "toTop";
    }
};

window.addEventListener("scroll", scrollFunc);