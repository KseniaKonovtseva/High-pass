document.addEventListener("DOMContentLoaded", function() {
  let tl = gsap.timeline();
  const mediaQuery = window.matchMedia('(min-width: 992px)')
//search
document.querySelector(".search__btn").addEventListener("click", function() {
  document.querySelector(".search__form").classList.add("search__form-active");
    if (mediaQuery.matches) {
      tl.to('.header__top .nav', {opacity: 0, duration: 0.2})
    }
    tl.to('.search__form', {opacity: 1, y: 0, duration: 0.2})
})
document.querySelector(".search__btn-close").addEventListener("click", function(e) {
  e.preventDefault();
    if (mediaQuery.matches) {
      tl.to('.header__top .nav', {opacity: 1, duration: 0.2})
    }
    tl.to('.search__form', {opacity: 0, y: 20, duration: 0.5}, "-=0.2")
  function shut() {
    document.querySelector(".search__form").classList.remove("search__form-active");
  } setTimeout(shut, 200);
})

//burger
document.querySelector(".burger-btn").addEventListener("click", function() {
  document.querySelector(".nav__burger").classList.add("nav-active");
})
document.querySelector(".burger-btn-close").addEventListener("click", function() {
  document.querySelector(".nav__burger").classList.remove("nav-active");
})

//скролл
new SimpleBar(document.querySelector('.scroll'), {
  autoHide: false,
  scrollbarMaxSize: 70
});

//map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
    center: [55.75944025162825,37.612542390357746],
    zoom: 13,
    controls: []
  });
  var myPlacemark = new ymaps.Placemark([55.76963601332982,37.636710499999985], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'images/pin.svg',
    iconImageSize: [12, 12],
  });
  myMap.geoObjects.add(myPlacemark);
};

//popup
document.querySelector(".popup__btn-close").addEventListener("click", function() {
    tl.to('.popup', {opacity: 0, duration: 0.2})
    function shut() {
      document.querySelector(".popup").classList.add("popup-closed");
    } setTimeout(shut, 200);
})

//валидация
new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30
    },
    mail: {
      required: true,
      email: true
    },
  },
  colorWrong: '#FF3030',
  messages: {
    name: {
      required: 'Недопустимый формат',
      minLength: 'Недопустимый формат'
    },
    mail: {
      required: 'Недопустимый формат',
      email: 'Недопустимый формат'
    },
  },
});

new JustValidate('.subscription__form', {
  rules: {
    mail: {
      required: true,
      email: true
    },
  },
  colorWrong: '#FF3030',
  messages: {
    mail: {
      required: 'Недопустимый формат',
      email: 'Недопустимый формат'
    },
  },
});


// блокировка body при открытом burger
document.querySelector(".burger-btn").addEventListener("click", function() {
  document.querySelector("body").classList.add("scroll-disabled");
})
document.querySelector(".burger-btn-close").addEventListener("click", function() {
  document.querySelector("body").classList.remove("scroll-disabled");
})











});
