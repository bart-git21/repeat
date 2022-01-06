


document.addEventListener("onDOMContentLoaded", foo());

function foo() {
    setTimeout(function() {
        document.querySelector(".invisible-content").classList.add("opacity-content");
        document.querySelector(".invisible-content").classList.remove("invisible-content");
    }, 3000);
}