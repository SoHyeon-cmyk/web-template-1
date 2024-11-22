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


$(document).ready(function() {
  $("#toggleButton").click(function() {
    const backSky = $("#backSky");
    const waveForms = $("#wave-forms");

    if (backSky.length && waveForms.length) {
      if (backSky.is(":visible") == false  && waveForms.is(":visible")) {
        backSky.show();
        waveForms.hide();
      } else {
        backSky.hide();
        waveForms.show();
      }
    } else {
      console.error("요소 중 일부를 찾을 수 없습니다.");
    }
  });
});