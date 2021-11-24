window.onload = function() {
    $(document).ready(function() {

        AOS.init();

        //모달창
        let modal = $('.modal');
        let modal_cont = $('.modal-cont');
        let modal_close = $('.modal-close');

        $('.modal-close').click(function() {
            modal.fadeOut();
        });

        $('.modal').click(function() {
            modal.fadeOut();
        });

        $('.modal-cont').click(function(event) {
            event.stopPropagation();
        });






        //visual-swiper
        var sw_visual = new Swiper('.sw-visual', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 2100,
                disableOnInteraction: true,
            },
            speed: 800,
            navigator: {
                prevEl: 'swiper-button-prev',
                nextEl: 'swiper-button-next',
            },
        });

        $('.sw-visual').mouseenter(function() {
            sw_visul.autoplay.stop();
        });
        $('.sw-visual').mousewheel(function() {
            sw_visul.autoplay.start();
        });

    });
};