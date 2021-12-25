


document.addEventListener("onDOMContentLoaded", foo());

function foo() {
    setTimeout(function() {
        document.querySelector(".box-invisible").classList.add("opacity");
        document.querySelector(".box-invisible").classList.remove("box-invisible");
    }, 3000);
}