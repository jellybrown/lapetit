(() => {

    const slide = document.querySelector(".slide");
    const imgCount = 3;


    setInterval(function () {

        for (let i = 0; i <= slide.children.length; i++) {

            setTimeout(function () {
                slide.children[i].classList.remove("on");
                slide.children[i + 1].classList.add("on");
            }, 2000);

            if (slide.children[i + 1].classList.contains("on")) {

                slide.children[i + 1].style.display = "block";
                slide.children[i + 1].style.opacity = "1";
                slide.children[i + 1].style.transition = "3s";





            }
        }

    }, 2000);






    // slide.children[i].className = `img{}`

    //  for (let i = 0; i < slide.children.length; i++) {
    //
    //     if (slide.children[i].classList.contains("on")) {
    //          slide.children[i].style.display = "block";
    //          slide.children[i].style.opacity = "0";
    //          slide.children[i].style.transition = "3s";
    //      };
    //   }







})();