const menuBtn = document.getElementById("menuBtn");
const menuContents = document.getElementById("menuContents");

const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

const section2 = document.getElementById("section2");
const movingspan = document.querySelectorAll(".graphContainer span");

menuBtn.addEventListener("click", function () {
    menuContents.classList.toggle("-right-64");
    span2.classList.toggle("hidden");

    span1.classList.toggle("rotate-45");
    span3.classList.toggle("-rotate-45");

    span1.classList.toggle("top-1/2");
    span3.classList.toggle("top-1/2");

    span1.classList.toggle("left-1/2");
    span3.classList.toggle("left-1/2");

    span1.classList.toggle("absolute");
    span3.classList.toggle("absolute");

    span1.classList.toggle("-translate-x-1/2");
    span3.classList.toggle("-translate-x-1/2");

    span1.classList.toggle("-translate-y-1/2");
    span3.classList.toggle("-translate-y-1/2");

});

window.onscroll=function(){
    if(window.scrollY >= section2.offsetTop-400){
        movingspan.forEach((span)=>{
            span.style.width = span.dataset.width;
            if (span.dataset.width <= '10%') {
                span.style.backgroundColor = "#F2B375";
            }
            if ('10%' < span.dataset.width <= '50%') {
                span.style.backgroundColor = "#DD4224";
            }
            if (span.dataset.width > '50%') {
                span.style.backgroundColor = "#B41D00";
            }
        })
    }
}