const open_popup = document.querySelectorAll(".popup-button");
const close_popup = document.querySelectorAll(".popup__close");
const popup = document.querySelectorAll(".popup");

for (let i = 0; i<open_popup.length; i++) {
    open_popup[i].onclick = () => {
        popup[i].style.display = "block";
    }

}

for (let i = 0; i<open_popup.length; i++) {
    popup[i].addEventListener("click", function(e) {
        if (e.currentTarget != e.target) return;
        popup[i].style.display = "none";
    })
}