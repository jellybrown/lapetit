(() => {

    const slide = $('.slide');
    let imgSlide = slide.find('.imgSlide');
    const slideCount = imgSlide.length;

    let currentIndex = 0;
    let startSlide = undefined;
    const btn = slide.find('.button')
    const prev = slide.find('.prev');
    const next = slide.find('.next');
    let num = slide.find('p');


    imgSlide.eq(0).fadeIn(); //처음 창 열릴때


    function goToSlide() {
        const nextIndex = (currentIndex + 1) % slideCount;
        imgSlide.eq(currentIndex).fadeOut();
        imgSlide.eq(nextIndex).fadeIn();

        currentIndex = nextIndex;
        something = `${currentIndex + 1} / ${slideCount}`;
        num.text(something);
    }


    // 슬라이드 이전,다음버튼 클릭시
    btn.find('a').click(function (e) {
        if ($(this).hasClass('prev')) {

            if (currentIndex == 0) {
                //currentIndex가 처음이라면, 마지막으로 간다.
                e.preventDefault();
                imgSlide.eq(currentIndex).fadeOut();
                imgSlide.eq(slideCount - 1).fadeIn();
                currentIndex = slideCount - 1;
            } else {
                e.preventDefault();
                imgSlide.eq(currentIndex).fadeOut();
                imgSlide.eq(currentIndex - 1).fadeIn();
                currentIndex -= 1;
            }

        } else { //next를 누르면
            if (currentIndex == slideCount - 1) {
                //currentIndex가 마지막번호라면, 처음으로 돌아간다.
                imgSlide.eq(currentIndex).fadeOut();
                imgSlide.eq(0).fadeIn();
                currentIndex = 0;
            } else {
                imgSlide.eq(currentIndex).fadeOut();
                imgSlide.eq(currentIndex + 1).fadeIn();
                currentIndex += 1;
            }
        }
    })



    if (!startSlide) {
        startSlide = setInterval(goToSlide, 2000);
    }


    function start() {
        startSlide = setInterval(goToSlide, 2000);
    }

    function stop() {
        clearInterval(startSlide);
        startSlide = undefined;
    }

    //마우스오버, 아웃할때
    slide.mouseenter(function () {
            stop();
            prev.addClass("active");
            next.addClass("active");

        })
        .mouseleave(function () {
            start();
            prev.removeClass("active");
            next.removeClass("active");
        });

})();