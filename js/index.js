(() => {
  const navMenu = document.querySelector(".nav_menu");
  const subMenu = document.querySelector(".sub_menu");
  const navMenuTop = navMenu.offsetTop;

  function scrollLoop() {
    let yOffset = window.pageYOffset;

    if (yOffset >= navMenuTop) {
      navMenu.classList.add("fixed");
      subMenu.classList.add("hide");
    } else {
      navMenu.classList.remove("fixed");
      subMenu.classList.remove("hide");
    }
  }

  window.addEventListener("scroll", scrollLoop);
})();
