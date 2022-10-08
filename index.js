const lines = document.querySelectorAll('h1');
const linesTl = gsap.timeline();
linesTl
    .set(lines, {opacity: 0})
    .to(lines, {opacity: 1, stagger: 0.1})
lines.forEach((line) => {

})

const words = document.querySelectorAll('span');
words.forEach((word) => {
    // Get the width of each word
    const wordWidth = word.offsetWidth;

    for (i = 0; i < 20; i++){
        word.cloneNode(true)
    }

});

