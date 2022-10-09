// Fade all the line in with stagger effect
const lines = document.querySelectorAll('h1');
const linesTl = gsap.timeline();
linesTl
    .set(lines, {opacity: 0})
    .to(lines, {opacity: 1, stagger: 0.1})

lines.forEach((line) => {
    const word = line.querySelector('span');
    
    // Replicate word in each line
    for (i = 0; i < 20; i++){
        line.appendChild(word.cloneNode(true));
    }
    
    // Get the width of each word
    const wordWidth = word.offsetWidth;
    // Slide Timeline
    const lineTl = gsap.timeline({repeat: -1});
    lineTl  
        .to(line, {
            x: wordWidth * -1,
            duration: 5,
            ease: 'linear'
        })
})