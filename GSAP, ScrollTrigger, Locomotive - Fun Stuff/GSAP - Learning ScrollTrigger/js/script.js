// GSAP Scroll Trigger

gsap.from(".page1 .circle", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 720,
});

gsap.from(".page2 .circle", {
  scale: 0,
  // delay: 1,
  duration: 2,
  rotate: 720,
  // scrollTrigger: ".page2 .circle",
  scrollTrigger: {
    trigger: ".page2 .circle",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    // scrub: true,
    scrub: 5,
  },
});

// gsap.from(".page3 .circle", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 720,
// });
