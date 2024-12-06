document.getElementById('toggleTheme').addEventListener('click', () => {
  const waveForms = document.getElementById('wave-forms');
  const backSky = document.getElementById('backSky');
  const formElement = document.querySelector('.form');
  const body = document.body;
  const Ul = document.querySelector('#header');

  // 애니메이션 대상 선택
  const bannerElements = document.querySelectorAll('.banner img, .banner h2, .banner h4');

  // 현재 display 상태를 확인하고 토글
  if (waveForms.style.display === 'block') {
    waveForms.style.display = 'none';
    backSky.style.display = 'block';
    formElement.style.backgroundImage = 'url("img/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio.jpg")';
    body.classList.add('dark-mode');
    Ul.classList.add('dark');
  } else {
    waveForms.style.display = 'block';
    backSky.style.display = 'none';
    formElement.style.backgroundImage = 'url("img/blurred-abstract-background.jpg")';
    body.classList.remove('dark-mode');
    Ul.classList.remove('dark');
  }

  // 애니메이션 재실행
  bannerElements.forEach(el => {
    el.classList.remove('animate'); // 클래스 제거
    void el.offsetWidth; // 리플로우 강제 적용 (DOM 재계산)
    el.classList.add('animate'); // 클래스 다시 추가
  });
});