
window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav');


    const scrolled = window.scrollY;
    console.log(scrolled);
    if (scrolled >= 111) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else if (scrolled < 111) {
        nav.style.backgroundColor = 'rgba(255, 255 ,255, 0.7)';
    }
});