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

//   let today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1; // 1월이 0부터 시작하여 1을 더해준다.
// let year = today.getFullYear();
// if (day < 10) day = '0' + day;
// if (month < 10) month = '0' + month;
// today = year + '-' + month + '-' + day;
// document.getElementById("start-date").setAttribute("value", today);
// document.getElementById("start-date").setAttribute("min", today);
// let maxday = new Date();
// maxday = new Date(maxday.setMonth(maxday.getMonth() + 2))
// day = maxday.getDate();
// month = maxday.getMonth() + 1;
// year = maxday.getFullYear();
// if (day < 10) day = '0' + day;
// if (month < 10) month = '0' + month;
// today = year + '-' + month + '-' + day;
// document.getElementById("start-date").setAttribute("max", today);
// document.getElementById("return-date").setAttribute("max", today);
// function changeReturn() {
//   // 가는 날 선택에 따라 오는 날 초기 날짜 변경
//   let start = document.getElementById("start-date").value;
//   document.getElementById("return-date").setAttribute("value", start);
//   document.getElementById("return-date").setAttribute("min", start);
// }
// document.getElementById("start-date").onchange = () => {
//   changeReturn();
// }
// changeReturn();
