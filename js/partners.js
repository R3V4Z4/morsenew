"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#carousel5", {
    type: "loop",
    perPage: 5,
    direction: "rtl",
    pagination: false,
    arrows: false,
    gap: "20px",

    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1000: {
        perPage: 4,
      },
      650: {
        gap: "10px",
      },
      550: {
        perPage: 3,
        gap: "10px",
      },
    },
  }).mount(window.splide.Extensions);

  new Splide("#carousel6", {
    type: "loop",
    perPage: 5,
    direction: "ltr",
    pagination: false,
    arrows: false,
    gap: "20px",

    autoScroll: {
      speed: 1,
    },
    breakpoints: {
      1000: {
        perPage: 4,
      },

      650: {
        gap: "10px",
      },
      550: {
        perPage: 3,
      },
    },
  }).mount(window.splide.Extensions);
});
