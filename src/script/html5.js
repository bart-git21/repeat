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

viewAudio.checked = true;

viewAudio.addEventListener("change", function() {
    return sound_audio.controls = !sound_audio.controls;
})

loopAudio.addEventListener("change", function() {
    return sound_audio.loop = !sound_audio.loop;
})