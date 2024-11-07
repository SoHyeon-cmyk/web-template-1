import { atom } from 'recoil';

function getInitialColorMode() {
  const persistedColorPreference = window.localStorage.getItem('color-mode');

  if (persistedColorPreference) {
    return persistedColorPreference;
  }

  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
  if (systemPreference.matches) {
    return 'dark';
  }
  return 'light';
}

const initialColorMode = atom({
  key: 'initialColorMode',
  default: getInitialColorMode(),
});

export { initialColorMode };

let circleGraph = $('.circle-graph');
let perNum = circleGraph.attr('circleProgress');
  
circleGraph.circleProgress({
  size: 50, // 그래프 크기
  value: perNum / 100, // 그래프에 표시될 값
  startAngle: 300, // 시작지점
  thickness: 6, // 그래프 두께
  fill: { // 그래프 선 색
    gradient: ["#e5ecff","#ffadc7", "#ffadc7","#ff5756"],
    gradientAngle: Math.PI / 4
  },
  animation: {
    duration: 2200,
    easing: "swing"
  },
  lineCap: "butt", // 그래프 선 모양
  reverse: false // 그래프가 진행되는 방향
}).on('circle-animation-progress', function (event, progress) {
  // 그래프 애니메이션이 진행되는 동안
  // progress - 현재 진행 상태 0.0 ~ 1.0
  $(this).find('.circle-percent').html(Math.round(perNum * progress) + '<i>%</i>');
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
  window.onload = init;


const light = document.getElementsByID("wave-forms")
const dark = document.getElementsByID("backsky")
const toggleBtn = document.getElementById("toggleTheme")





toggleBtn.addEventListener('click', function(){
  if(document.dark.style.display = "none"){
    light.style.display = "none"
    dark.style.display = "block"
  }else{
    light.style.display = "block"
    dark.style.display = "none"
  }
})