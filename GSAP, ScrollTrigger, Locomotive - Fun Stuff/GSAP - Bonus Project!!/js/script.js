// text select on scroll effect hotel odisej website

// let h1 = document.querySelector("#firsth1");

// console.log(h1.textContent);

// let splitText = h1.textContent.split("");

// console.log(splitText);

// let clutter = "";

// splitText.forEach((elem) => {
// console.log(elem);
//   clutter += `<span>${elem}</span>`;
// });

// console.log(clutter);

// document.querySelector("#firsth1").innerHTML = clutter;

let headings = document.querySelectorAll(".page2 h1");
// console.log(headings);

function textSplitting() {
  headings.forEach((elem) => {
    let clutter = "";
    let h1Text = elem.textContent;

    let splitedText = h1Text.split("");

    splitedText.forEach((e) => {
      clutter += `<span>${e}</span>`;
    });
    // console.log(h1Text);

    elem.innerHTML = clutter;

    // console.log(elem);
  });
}

function gsapAnimation() {
  gsap.to(".page2 h1 span", {
    color: "#e3e3c4",
    stagger: 0.1,
    // opacity: 0.5,
    scrollTrigger: {
      trigger: ".page2 h1",
      scroller: ".main",
      markers: true,
      start: "top 50%",
      end: "top -15%",
      scrub: 3,
    },
  });
}

function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoScroll();
textSplitting();
gsapAnimation();
