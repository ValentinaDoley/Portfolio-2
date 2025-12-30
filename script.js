

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

