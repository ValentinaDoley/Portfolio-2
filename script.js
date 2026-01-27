

window.addEventListener("load", function () {
    const loader = this.document.querySelector(".pre-loader");

    // wait a tiny bit while showing the loader
    this.setTimeout(() => {
        loader.classList.add("loader-hidden");

        // remove the loader from the DOM after the transition/fade
        setTimeout(() => {
            loader.style.display = "none";
        }, 500); // match the duration in the CSS
    }, 2000); // 1.5 s delay
});


// to change texts when we click the button
const texts = [
    "Greetings, my guest!",
    "Welcome to my humble portfolio abode.",
    "I'm Valentina Doley.",
    "I'm a self taught Frontend Web Developer.",
    "Nice to meet you sir/ma'am! *virtually handshakes*",
    "Feel free to check out my projects and know more about me below!",
    "Have a great day!",
    "or a great night!",
];

let currentIndex = 0; //Tracks the current sentence/text we're on
// lets select the elements
const textElement = document.getElementById("dialogue-text");
const nextButton = document.getElementById("next_btn");
// initialize the text element with the first text to ensure the screen isn't blank
textElement.textContent = texts[currentIndex];
// add on click event listener to the button
nextButton.addEventListener("click", () => {
    //increase index to get the next text
    currentIndex++;

    //If we reach the end of the array, to loop back to start
    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }

    //update the text on screen
    textElement.textContent = texts[currentIndex];
});

// For new window
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close-btn");

// function to open window (modal)
function openModalWindow(title, content) {
    modalBody.innerHTML = `
        <h2 style="color: #fff27a; text-align: center;">${title}</h2>
        <div class="window-text">${content}</div>
        `;
        modal.style.display = "block";
}

// Even listener for the project-icon
document.getElementById("project-icon").addEventListener("click", (e) => {
    e.preventDefault();
    openModalWindow("some of Valentina's Projects", `
        <p> • <b>To-do App | for fish-like brains :</b> - This to-do app is for people with 2 braincells (like me). Remember and get reminded of your work, tasks or your daily chores for no more "I forgot"s.</p>
        <p> Tech stack used: HTML, CSS, JavaScript, Local Storage</p>
        <p> • <b>Running action Game | Dumb-Run :</b> Its a simple running action game played on the web with obstacles to along the way.</p>
        <p> • <b>Customised Chat app | Tea-Cafe</b> Tea-Cafe is a messenger app with customable characters. Aside from chatting it also has multi-player gaming feature .</p>`);
});
// for about me icon
document.getElementById("about-icon").addEventListener("click", (e) => {
    e.preventDefault(); // stop the default jump behavior
    openModalWindow("Valentina's stats:", `
        <p><b>Education :</b> 2025 CSE Grad (NIT Arunachal Pradesh)</p>
        <p><b>Experience :</b> • Career Coach Trainee at PhysicsWallah, Bengaluru • Business Development at Edustation, Bengaluru</p>
        <p><b>Current Quest :</b> Looking for a junior Frontend Developer and other web dev related positions in 2026. </p>
        <p><b>Skills :</b> HTML, CSS, JavaScript, React, Git, NodeJs</p>
        <p><b>Extra hobbies :</b> Music (songwriting, producing), Drawing Comics, Crocheting, Reading novels and webtoons,</p>`);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {if (e.target == modal) modal.style.display = "none";};

// for bg music
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-toggle');
const musicIcon = document.getElementById('music-icon');

const songs = [
    "music/birds-sunrise-portete-beach-16934.mp3",
    "music/a-gangster-into-hawai-110-209266.mp3",
    "music/jeux-de-table-a-hawai-338553.mp3"
];

music.src = songs[0];

musicBtn.addEventListener('click', () => {
    if(music.paused) {
        music.play();
        music.volume = 1;
        musicIcon.innerText = "🔊⏸️";
    } else {
        music.pause();
        musicIcon.innerText = "🔊▶️";
    }
});

let currentSongIndex = [0];
const nextTrack = document.getElementById('next-track');
