// nav animate

// stagger one by one

// gsap.from(".nav h3", {
//   y: -50,
//   opacity: 0,
//   duration: 1,
//   delay: 0.5,
//   stagger: 1,
// });

// gsap.from(".main h1", {
//   y: -50,
//   opacity: 0,
//   duration: 2,
//   delay: 2,
//   stagger: 1,
// });

var timeline = gsap.timeline();

timeline.from(".nav h3", {
  y: -50,
  opacity: 0,
  duration: 0.8,
  delay: 0.5,
  stagger: 0.8,
});

timeline.from(".main img", {
  x: 100,
  rotate: 45,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.8,
});

timeline.from(".main h1", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.8,
});

timeline.from(".main footer h3", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.8,
});

timeline.from(".main footer p", {
  x: -500,
  opacity: 0,
  duration: 0.8,
  delay: 0.2,
  stagger: 0.8,
});
