// Simple lightbox initializer
const scrollUp = document.querySelector('#scroll-up');


scrollUp.addEventListener("click", () => {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth",
    });
});

const audio = document.getElementById("backgroundAudio");
const button = document.getElementById("muteButton");

audio.volume = 1;
audio.muted = false;

button.addEventListener("click", () => {
    audio.muted = !audio.muted;
    button.textContent = audio.muted ? "🔇" : "🔊";
})

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");

function openMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}