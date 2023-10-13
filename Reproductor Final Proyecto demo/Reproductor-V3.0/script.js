const wrapper = document.querySelector(".wrapper"),
    musicImg = wrapper.querySelector("img"),
    musicName = wrapper.querySelector(".name"),
    musicArtist = wrapper.querySelector(".artist"),
    playPauseBtn = wrapper.querySelector(".play-pause"),
    prevBtn = wrapper.querySelector("#prev"),
    nextBtn = wrapper.querySelector("#next"),
    mainAudio = wrapper.querySelector("#main-audio"),
    progressArea = wrapper.querySelector(".progress-area"),
    progressBar = progressArea.querySelector(".progress-bar");

let musicIndex = Math.floor((Math.random() * allMusic.lenght) + 1);
isMusicPause = true;

window.addEventListener("load", () =>{
    loadMusic(musicIndex);
});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicImg.src =`img${allMusic[indexNumb - 1].src}.jpg`;
    mainAudio.src =`img${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic () {
    wrapper.classList.add("paused");
    musicImg.classList.add('rotate');
    playPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    mainAudio.play();
}

function pauseMusic () {
    wrapper.classList.remove("paused");
    musicImg.classList.remove('rotate');
    playPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
    mainAudio.pause();
}