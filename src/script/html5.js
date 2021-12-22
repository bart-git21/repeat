let cover = document.querySelector(".cover");
let audio_svg = document.querySelectorAll(".audio-svg");
let viewAudio = document.querySelector("input[name='viewAudio']");
let loopAudio = document.querySelector("input[name='loopAudio']");
let sound_audio = document.querySelector(".sound-audio");


cover.onclick = () => {
    if (sound_audio.paused == true) {
        sound_audio.play();
        audio_svg[0].style.display = "block";
        audio_svg[1].style.display = "none";
    }
    else {
        sound_audio.pause();
        audio_svg[0].style.display = "none";
        audio_svg[1].style.display = "block";
    };
}


viewAudio.addEventListener("change", function() {
    if (viewAudio.checked == true) {
        sound_audio.controls = false;
    }
    else sound_audio.controls = true;
})

loopAudio.addEventListener("change", function() {
    if (loopAudio.checked == true) {
        sound_audio.loop = true;
    }
    else {
        sound_audio.loop = false;
    }
})

