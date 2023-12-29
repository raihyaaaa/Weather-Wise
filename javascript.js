//      Welcome Animation         //

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".hide-text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".first-animation", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo(".nav", { opacity: 0 }, { opacity: 1, duration: 2.5 }, "-=0.4");
tl.fromTo(".mySidenav", { opacity: 0 }, { opacity: 1, duration: 2.5 }, "-=0.05");
tl.fromTo(".center-image", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=5.8");
tl.fromTo(".center-quote", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=4.5");
tl.fromTo(".center-quote-below", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=3.7");

//      Back to Top Button        //

const backToTopButton = document.querySelector(".back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) { // Show backToTopButton
        if (!backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnExit");
            backToTopButton.classList.add("btnEntrance");
            backToTopButton.style.display = "block";
        }
    } else { // Hide backToTopButton
        if (backToTopButton.classList.contains("btnEntrance")) {
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function() {
                backToTopButton.style.display = "none";
            }, 250);
        }
    }
}

backToTopButton.addEventListener("click", smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
    const targetPosition = 0;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 750;
    let start = null;

    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    }
}

function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
};