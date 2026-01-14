

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

// const textContainer = document.querySelector("#dialogue-text");
// const text = textContainer.textContent.trim();

// // This clear the old text and replaces it with spans for every letter
// textContainer.innerHTML = text
//   .split("")
//   .map((letter, index) => {
//     // If the letter is a space, use a non-breaking space entity so it doesn't vanish
//     const content = letter === " " ? "&nbsp;" : letter;
//     return `<span style="animation-delay: ${index * 0.1}s">${content}</span>`;
//   })
//   .join("");

// to change texts when we click the button
const texts = [
    "Welcome to my portfolio.",
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
const modal = document.getElementById("info-modal");
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
    openModalWindow("Level 0: Projects", `
        <p> • <b>To-do App: for a fish-like brain</b> - This to-do app is for people with 2 braincells (like me). Remember and get reminded of your work, tasks or your daily choreS for no more "I forgot"s.</p>
        <p> • <b>upcoming..</b></p>`);
});
// for about me icon
document.getElementById("about-icon").addEventListener("click", (e) => {
    e.preventDefault(); // stop the default jump behavior
    openModalWindow("Level 0: About me", `
        <p>I'm Valentina Doley, a 2025 CS Grad and a self-taught Frontend Web Developer. I like building websites and have fun while doing it.</p>
        <p><b>Current Quest:</b> Looking for a junior Developer position in 2026. </p>`);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {if (e.target == modal) modal.style.display = "none";};