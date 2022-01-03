const open_popup = document.querySelectorAll(".popup-button");
const close_popup = document.querySelectorAll(".popup__close");

const popup = document.querySelectorAll(".popup");
const popup__body = document.querySelectorAll(".popup__body");

const main = document.querySelector(".main");


for (let i = 0; i<open_popup.length; i++) {
    open_popup[i].onclick = () => {
        popup__body[i].style.top = scrollY + "px";
                
        popup[i].style.display = "block";
        if (popup__body[i].scrollHeight > main.scrollHeight) popup[i].style.height = (popup__body[i].scrollHeight + scrollY + 120)+ "px";
        else popup[i].style.height = (main.scrollHeight + scrollY + 120)+ "px";
    }

}

for (let i = 0; i<open_popup.length; i++) {
    popup[i].addEventListener("click", function(e) {
        if (e.currentTarget != e.target) return;
        popup[i].style.display = "none";
    })
}