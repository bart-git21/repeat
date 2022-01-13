
const onclick_arrow_example = document.querySelector(".onclick-arrow-example");
onclick_arrow_example.onclick = () => {
    alert("javascript is working!");
}


function onclick_foo() {
    alert("javascript function is working!");
}
const onclick_foo_example = document.querySelector(".onclick-foo-example");
onclick_foo_example.onclick = onclick_foo;


function listener_foo() {
    alert("addEventListener is working!");
}
const onclick_handler_example = document.querySelector(".onclick-handler-example");
onclick_handler_example.addEventListener("click", listener_foo);



/* задача с кругом на поле */

const disk = document.querySelector(".disk");
const scene = document.querySelector(".scene");
function move_disk(event) {
        disk.style.left = event.layerX - (disk.clientWidth / 2) + "px";
        disk.style.top = event.layerY - (disk.clientHeight / 2) + "px";
        if (event.layerX <= 25) disk.style.left = 0;
        if (event.layerX >= 175) disk.style.left = scene.clientWidth - disk.clientWidth + "px";
        if (event.layerY <= 25) disk.style.top = 0;
        if (event.layerY >= 175) disk.style.top = scene.clientHeight - disk.clientHeight + "px";
}
scene.addEventListener("click", move_disk);



/* задача про фото-галерею (карусель) */

const arrow_to_left = document.querySelector(".arrow_to_left");
const arrow_to_right = document.querySelector(".arrow_to_right");
const wrap = document.querySelector(".wrap");
let left = 0;

function move_to_left() {
    if ((wrap.clientWidth + left) < 400) {
        left = 0;
        wrap.style.left = 0;
    }
    else {
        left -= 310;
        wrap.style.left = left + "px";
    }
}

function move_to_right() {
    if (left == wrap.clientLeft) wrap.style.left = 0;
    else {
        left += 310;
        wrap.style.left = left + "px";
    }
}

arrow_to_right.addEventListener("click", move_to_left);
arrow_to_left.addEventListener("click", move_to_right);





/* задача с исчезающими абзацами */

const close_btn = document.querySelectorAll(".close-btn");

for (let i = 0; i < close_btn.length; i++) {
    close_btn[i].addEventListener("click", hide_foo);
    close_btn[i].addEventListener("click", next_listener_foo);
}

function hide_foo(event) {
    event.currentTarget.parentElement.style.display = "none";
    console.log(event.currentTarget.parentElement.style.display);
}
function next_listener_foo() {
    alert("Абзац удален.");
}