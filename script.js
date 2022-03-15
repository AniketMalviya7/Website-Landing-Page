window.addEventListener ("mousemove", function (dets) {
    dot.style.display = "initial";
    dot.style.transform = `translate(${dets.clientX-160}px, ${dets.clientY-81}px)`
})

var tl = gsap.timeline ();

tl
.from ("#line1", {
    top: "-35%",
    ease: Expo.easeInOut,
    duration: 1
})

tl
.from ("#line2", {
    top: "-25%",
    ease: Expo.easeInOut,
    duration: 1
})

tl
.from ("#line3", {
    top: "-35%",
    ease: Expo.easeInOut,
    duration: 1
})

tl
.from ("#line4", {
    bottom: "-25%",
    ease: Expo.easeInOut,
    duration: 1
})