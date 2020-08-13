(() => {

  const navMenu = document.querySelector(".nav_menu");
  const navs = navMenu.querySelectorAll("ul > li")
  const subMenu = document.querySelector(".sub_menu");
  const navMenuTop = navMenu.offsetTop;

  const ment = document.querySelector(".ment");
  const ments = ment.querySelectorAll("p");
  const banner = document.querySelector(".banner");
  const banners = banner.querySelectorAll("li");
  const product = document.querySelector(".product");
  const products = product.querySelectorAll("ul li");
  const brand = document.querySelector(".brand_story");

  const goBtn = document.querySelectorAll(".go_btn a")


  //스크롤시


  scrollLoop = () => {

    let yOffset = window.pageYOffset;

    if (yOffset >= navMenuTop) {
      navMenu.classList.add("fixed");
      subMenu.classList.add("hide");
    } else {
      navMenu.classList.remove("fixed");
      subMenu.classList.remove("hide");
    }

    //섹션별 opacity on
    if (yOffset > ment.offsetTop - 600) {
      for (let i = 0; i < ments.length; i++) {
        ments[i].classList.add("on");
      }
    }
    if (yOffset > banner.offsetTop - 700) {
      banners[1].classList.add("on");

    }
    if (yOffset > banner.offsetTop - 500) {
      {
        banners[0].classList.add("on");
        banners[2].classList.add("on");
      }
    }
    if (yOffset > product.offsetTop - 700) {
      product.querySelector('p').classList.add("on")
    }

    if (yOffset > product.offsetTop - 500) {
      for (let i = 0; i < products.length; i++) {
        products[i].classList.add("on");
      }
    }
    if (yOffset > brand.offsetTop - 700) {
      brand.querySelector("p").classList.add("on");
    }
    if (yOffset > brand.offsetTop - 500) {
      brand.querySelector(".box").classList.add("on");
    }

  };

  function goToTop() {
    window.scrollTo(0, 0);
  }

  function goToBtm() {
    window.scrollTo(5000, 5000)
  }

  for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("mouseenter", function (e) {
      e.target.classList.add("active");
    })
    navs[i].addEventListener("mouseleave", function (e) {
      e.target.classList.remove("active");
    })
  }




  window.addEventListener("scroll", scrollLoop);
  window.addEventListener("resize", scrollLoop);
  goBtn[0].addEventListener("click", goToTop);
  goBtn[1].addEventListener("click", goToBtm)


})();