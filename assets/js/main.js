// import wowjs
new WOW().init();
// slider banner header
$(document).ready(function () {
  new Swiper('.swiper-banner', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
    paginationClickable: true,
    spaceBetween: 20,
  });
});
// slider feedback
$(document).ready(function () {
  new Swiper('.swiper-feedback', {
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2000,
    },
    paginationClickable: true,
    spaceBetween: 20,
  });
});
// slider product
$(document).ready(function () {
  new Swiper('.swiper-product', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    paginationClickable: true,
    spaceBetween: 20,
    slidesPerView: 5,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});
// number counter
$(window).scroll(startCounter);

function startCounter() {
  let scrollY = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
  let divPos = document.querySelector('#counter-container').offsetTop;

  if (scrollY > divPos) {
    $(window).off("scroll", startCounter);

    $('.count').each(function () {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text().replace(/,/g, '')
      }, {
        duration: 3000,
        easing: 'swing',
        step: function () {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function () {
          $this.text(commaSeparateNumber(this.Counter));
          //alert('finished');
        }
      });
    });

    function commaSeparateNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}
