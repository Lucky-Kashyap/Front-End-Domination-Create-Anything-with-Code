// side effect text

gsap.to(".page2 h1", {
  transform: "translateX(-125%)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    scrub: 2,
    pin: true,
    start: "top 0",
    end: "top -100%",
  },
});
