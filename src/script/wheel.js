let cover = document.querySelector(".cover");
let audio_svg = document.querySelectorAll(".audio-svg");
let viewAudio = document.querySelector("input[name='viewAudio']");
let loopAudio = document.querySelector("input[name='loopAudio']");
let sound_audio = document.querySelector(".sound-audio");



document.getElementById("object_svg").onclick = () => {
    let wheel = document.getElementById("wheel");
    wheel.classList.toggle("rotate");
}