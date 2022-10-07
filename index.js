const allWords = document.querySelectorAll('h1');
const allWordsTl = gsap.timeline();
allWordsTl
    .set(allWords, {opacity: 0})
    .to(allWords, {opacity: 1})

const words = document.querySelectorAll('span');
words.forEach((word) => {
    // Get the width of each word
    const wordWidth = word.offsetWidth;
});

