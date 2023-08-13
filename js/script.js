const swiperEl = document.querySelector('.product swiper-container')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
    swiperEl.initialize();

const swiperEls = document.querySelector('.products swiper-container')
    Object.assign(swiperEls, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
    swiperEls.initialize();

const swiperElCat = document.querySelector('.catalogues swiper-container')
    Object.assign(swiperElCat, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });
    swiperElCat.initialize();
