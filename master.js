const menuBtn = document.getElementById("menuBtn");
const menuContents = document.getElementById("menuContents");
const releafH2 = document.getElementById("releaf")

// const span1 = document.getElementById("span1");
// const span2 = document.getElementById("span2");
// const span3 = document.getElementById("span3");
// const span4 = document.getElementById("span4");

// const p1 = document.getElementById("p1");
// const p2 = document.getElementById("p2");
// const p3 = document.getElementById("p3");
// const p4 = document.getElementById("p4");



const section2 = document.getElementById("section2");
const movingspan = document.querySelectorAll(".graphContainer span");
const percentage = document.querySelectorAll(".percentage");



window.onscroll=function(){
    if(window.scrollY >= section2.offsetTop-300){
        movingspan.forEach((span)=>{
            span.style.width = span.dataset.width +"%";
            span.innerHTML = span.dataset.width +"%";
            if(Number(span.dataset.width) > 60) {
                span.style.backgroundColor = "#B41D00";
            }else if(Number(span.dataset.width)  > 20 && Number(span.dataset.width)  <= 60) {
                span.style.backgroundColor = "#dd6524";
            }else{
                span.style.backgroundColor = "#F2B375";
            }
        })
    }
}

menuBtn.addEventListener("click", function () {
    menuContents.classList.toggle("-right-639");
    menuContents.classList.toggle("right-0");
    menuBtn.classList.toggle("fixed");
    menuBtn.classList.toggle("relative");
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
