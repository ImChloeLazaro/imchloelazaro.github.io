let innerCursor = document.querySelector('.inner-cursor');
let outerCursor = document.querySelector('.outer-cursor');

document.addEventListener('mousemove', (e)=>{
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;

    let navs = Array.from(document.querySelectorAll('.nav-link'));

    navs.forEach((nav)=>{
        nav.addEventListener('mouseover', () => {
            innerCursor.classList.add("grow")
        });
        nav.addEventListener('mouseleave', () => {
            innerCursor.classList.remove("grow")
        });
    });
});