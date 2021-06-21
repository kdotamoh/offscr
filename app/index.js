import { gsap, Power3, Expo } from "gsap";
import { split } from "./utils/text";

let DOM = {
  content: {
    home: {
      section: document.querySelector(".home__h1"),
      chars: document.querySelectorAll(
        ".home__link .word > .char, .whitespace"
      ),
      bgBlack: document.querySelector(".home__bg--black"),
      bgWhite: document.querySelector(".home__bg--white"),
      desc: document.querySelector(".home__desc").children,
      img: document.querySelector(".home__title-image"),
      imgBg: document.querySelector(".home__title-image-bg"),
    },
    button: document.querySelector(".home__play-button"),
  },
};

console.log(DOM.content.home.desc);

const timelineSettings = {
  staggerValue: 0.014,
  charsDuration: 0.5,
};

const master = gsap.timeline({ paused: true });

const animateLink = () => {
  const tl = gsap.timeline().add("start").from(
    DOM.content.home.chars,
    {
      duration: timelineSettings.charsDuration,
      ease: Power3.easeIn,
      y: 100,
      opacity: 0,
      stagger: timelineSettings.staggerValue,
      delay: -1.4,
    },
    "start"
  );

  return tl;
};

const animateBlack = () => {
  const tl = gsap
    .timeline()
    .add("black")
    .to(
      DOM.content.home.bgBlack,
      { top: 0, ease: Expo.easeOut, duration: 1.5 },
      "black"
    );

  return tl;
};

const animateWhite = () => {
  const tl = gsap
    .timeline()
    .add("white")
    .to(
      DOM.content.home.bgWhite,
      { top: 0, ease: Expo.easeOut, duration: 1.5 },
      "white"
    );

  return tl;
};

const setUp = () => {
  const tl = gsap
    .timeline()
    .add("setup")
    .set(".home__title-span", {
      yPercent: 110,
    })
    .set(DOM.content.home.bgWhite, { display: "none" }, "setup")
    .set(DOM.content.home.bgBlack, { display: "none" }, "setup")
    .set(DOM.content.home.desc, { y: "3rem", opacity: 0 }, "setup")
    .set(DOM.content.home.img, { yPercent: "101", scale: 1.5 }, "setup")
    .set(DOM.content.home.imgBg, { yPercent: "101" }, "setup");

  return tl;
};

const animateLogo = () => {
  const tl = gsap.timeline().add("logo").to(DOM.content.home.desc, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
  });

  return tl;
};

const animateH1 = () => {
  const tl = gsap.timeline().to(".home__title-span", {
    yPercent: 0,
    duration: 1.2,
    ease: Expo.easeOut,
    stagger: 0.2,
  });

  return tl;
};

const animateImg = () => {
  const tl = gsap
    .timeline()
    .to(DOM.content.home.imgBg, {
      yPercent: 0,
      ease: Expo.easeOut,
      duration: 0.9,
    })
    .to(
      DOM.content.home.img,
      {
        yPercent: 0,
        scale: 1,
        ease: Expo.easeOut,
        duration: 1.2,
      },
      "-=0.3"
    );

  return tl;
};

master.add(animateBlack());
master.add(animateLink());
master.add(animateWhite());
master.add(setUp(), "+=.3");
master.add(animateLogo(), "logo");
master.add(animateH1(), "logo+=0.6");
master.add(animateImg(), "logo+=0.3");

DOM.content.button.addEventListener("click", () => {
  if (master.time() === 0) {
    master.play();
  } else {
    master.restart();
  }
});
