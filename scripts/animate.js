let smoothScroll = new scrollToSmooth("a", {
  targetAttribute: "href",
  duration: 1200,
  durationRelative: false,
  durationMin: false,
  durationMax: false,
  easing: "easeOutCubic",
  onScrollEnd: (data) => {},
  fixedHeader: null,
});
smoothScroll.init();

const toggle = document.querySelector(".toggle");
const sidebar = document.querySelector(".nav-lists");

toggle.addEventListener("click", function () {
  sidebar.style.left = "0";
sidebar.classList.toggle('sidebar')
  sidebar.classList.contains("sidebar")
  toggle.classList.add("close")


  sidebar.classList.contains("sidebar")
    ? (toggle.firstElementChild.src = "./images/icons/x.svg")
    : (toggle.firstElementChild.src = "./images/icons/menu.svg");

    if(!sidebar.classList.contains('sidebar')){
      sidebar.style.left="-100%";
    }
});
