const menuBtn = document.getElementById("menuBtn");
const menuContents = document.getElementById("menuContents");
const releafH2 = document.getElementById("releaf")
const links = document.querySelectorAll(".menuContents ul li a");

const overview = document.getElementById("overview");
const movingspan = document.querySelectorAll(".graphContainer span");
const percentage = document.querySelectorAll(".percentage");

window.onscroll=function(){
    if(window.scrollY >= overview.offsetTop-300){
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
function btnanimation(){
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
}
menuBtn.addEventListener("click", function () {
    menuContents.classList.toggle("-right-639");
    menuContents.classList.toggle("right-0");
    menuBtn.classList.toggle("fixed");
    menuBtn.classList.toggle("relative");
    document.body.classList.toggle("disableScrolling");
    btnanimation();
});

links.forEach((a)=>{
    a.addEventListener('click', function(){
        menuContents.classList.toggle("-right-639");
        menuContents.classList.toggle("right-0");
        document.body.classList.toggle("disableScrolling");
        btnanimation();
        menuBtn.classList.toggle("fixed");
        menuBtn.classList.toggle("relative");
    })
})