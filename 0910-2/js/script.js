

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// 탭네비
const $nav = document.querySelector('#tab-button-nav')
  const $sections = document.querySelectorAll('.tab-section');

  $nav.addEventListener('click', (e) => {
    if (!e.target.classList.contains('tab-button')) {
      return;
    }
    
    const focusedTabId = e.target.dataset.tabSection;

    $sections.forEach(($section) => {
      if ($section.id === focusedTabId) {
        $section.removeAttribute('hidden');
      } else {
        $section.setAttribute('hidden', true);
      }
    });

  });
  const search = document.querySelector('.icon3')
const Schbar = document.querySelector('#search-bar')

search.addEventListener('click', function(){
  Schbar.translate ['0 50px',0]
Schbar.classList.toggle('on')
})

window.popup()
