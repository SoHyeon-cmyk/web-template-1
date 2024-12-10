
import ("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js");
import ("https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js");


$(document).ready(function () {
  $('.circle-graph').each(function () {
    // 각각의 circle-graph 요소를 가져옵니다.
    const $this = $(this);

    // HTML 속성에서 circleProgress 값과 색상 값을 읽어옵니다.
    const perNum = parseFloat($this.attr('circleProgress')) || 0;
    const colors = JSON.parse($this.attr('data-colors')) || ["#e5ecff", "#ffadc7"];

    // circleProgress를 초기화합니다.
    $this.circleProgress({
      size: 100, // 그래프 크기
      value: perNum / 100, // 그래프에 표시될 값
      startAngle: 300, // 시작지점
      thickness: 5, // 그래프 두께
      fill: { // 그래프 선 색상
        gradient: colors,
        gradientAngle: Math.PI / 4
      },
      animation: {
        duration: 2200,
        easing: "swing"
      },
      lineCap: "butt", // 그래프 선 모양
      reverse: false // 그래프가 진행되는 방향
    }).on('circle-animation-progress', function (event, progress) {
      // 진행 중인 상태 업데이트
      $this.find('.circle-percent').html(Math.round(perNum * progress) + '<i>%</i>');
    });
  });
});




  const $notie = document.querySelector(".notie");

// 브라우저 창 크기에 따른 별 생성
window.onresize = () => {
  makeStars();
}

const makeStars = () => {

  const maxSize = Math.max(window.innerWidth, window.innerHeight)
  const getRandomX = () => Math.random() * maxSize;
  const getRandomY = () => Math.random() * maxSize;
  const randomRadius = () =>  Math.random() * 0.7 + 0.6;
  

  const _size = Math.floor(maxSize / 2);
  
  const htmlDummy = new Array(_size).fill().map((_, i) => {
    return  `<circle class='star'
        cx=${getRandomX()}
        cy=${getRandomY()}
        r=${randomRadius()}
        className="star" />`
  }).join('');
  
  $notie.innerHTML = htmlDummy;
}

window.onload = () => {
  makeStars();
}

var style = ["style1", "style2", "style3", "style4"];
var tam = ["tam1", "tam1", "tam1", "tam2", "tam3"];
var opacity = ["opacity1", "opacity1", "opacity1", "opacity2", "opacity2", "opacity3"];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


//meteoros

var numeroAleatorio = 5000;

setTimeout(function(){
  carregarMeteoro();
}, numeroAleatorio);

function carregarMeteoro(){
  setTimeout(carregarMeteoro, numeroAleatorio);
  numeroAleatorio = getRandomArbitrary(5000, 10000);
  var meteoro = "<div class='meteoro "+ style[getRandomArbitrary(0, 4)] +"'></div>";
  document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = meteoro;
  setTimeout(function(){
    document.getElementsByClassName('chuvaMeteoro')[0].innerHTML = "";
  }, 1000);
}


document.getElementById('toggleTheme').addEventListener('click', () => {
  const waveForms = document.getElementById('wave-forms');
  const backSky = document.getElementById('backSky');
  const formElement = document.querySelector('.form');
  const body = document.body;
  const HD = document.querySelector('.HD')
  const Ul = document.querySelector('#header')
  let copyModal =document.getElementById('copied')
  // 애니메이션 대상 선택
  const bannerElements = document.querySelectorAll('.banner img, .banner h2, .banner h4');

  // 현재 display 상태를 확인하고 토글
  if (waveForms.style.display === 'block') {
    waveForms.style.display = 'none';
    backSky.style.display = 'block';
    formElement.style.backgroundImage = 'url("img/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio.jpg")'
    body.classList.add('dark-mode')
    Ul.classList.add('dark')
    copyModal.classList.add('dark_mode')
    
    
    
  } else {
    waveForms.style.display = 'block';
    backSky.style.display = 'none';
    formElement.style.backgroundImage = 'url("img/blurred-abstract-background.jpg")'
    body.classList.remove('dark-mode');
    Ul.classList.remove('dark')
    copyModal.classList.remove('dark_mode')
  }
});


 
  // // 애니메이션 재실행
  // bannerElements.forEach(el => {
  //   el.classList.remove('animate'); // 클래스 제거
  //   void el.offsetWidth; // 리플로우 강제 적용 (DOM 재계산)
  //   el.classList.add('animate'); // 클래스 다시 추가
  // });

  
  function copyCode(){
    const code = document.querySelector(".join_code")
    
   

    // code.addEventListener('click', function(e){
    //   if(copyModal.style.display === 'none'){
    //     copyModal.style.display = 'block'
    //     copyModal.classList.add ('dark_mode')
    //   }else{
    //     copyModal.style.display = 'none'
    //     copyModal.classList.remove ('dark_mode')
    //   }
    // })

    
    // setTimeout(function(){
    //   copyModal.style.display = 'block'
    // },2000)

    window.navigator.clipboard.writeText(code.textContent).then(() => {
    alert('복사 완료')
    });
    }

