const menuBtn = document.getElementById("menuBtn");
const menuContents = document.getElementById("menuContents");

const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");

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
