const speed = 20; 
const direction = "right";

const marquee = document.querySelector(".gsap-marquee .rs-text-slide-inner");
let width = marquee.offsetWidth;

gsap.to(marquee, {
    x: direction === "right" ? -width : width,
    duration: speed,
    ease: "none",
    repeat: -1
});
