import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

$(".price__flex").slick({
  infinite: false,
  centerMode: true,
  variableWidth: true,
  initialSlide: 1,
  mobileFirst: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        draggable: false,
        swipe: false,
      },
    },
  ],
});

$(".services__flex").slick({
  variableWidth: true,
  dots: true,
  arrows: false,
  centerMode: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 560,
      settings: {
        centerMode: true,
      },
    },
  ],
  mobileFirst: true,
});

$(".slide__cards").slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  arrows: false,
  draggable: false,
  swipe: false,
  initialSlide: 2,
  appendDots: $(".card__number"),
});

$(".slide__cards").slick("slickNext");

$(".card__button").click(function (event) {
  $(".slide__cards").slick("slickNext");
});
