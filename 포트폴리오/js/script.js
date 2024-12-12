
import ("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js");
import ("https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.2.2/circle-progress.min.js");


$(document).ready(function () {
  $('.circle-graph').each(function () {
    const $this = $(this);

    
    const perNum = parseFloat($this.attr('circleProgress')) || 0;
    const colors = JSON.parse($this.attr('data-colors')) || ["#e5ecff", "#ffadc7"];


    $this.circleProgress({
      size: 100, 
      value: perNum / 100, 
      startAngle: 300, 
      thickness: 5, 
      fill: {
        gradient: colors,
        gradientAngle: Math.PI / 4
      },
      animation: {
        duration: 2200,
        easing: "swing"
      },
      lineCap: "butt", 
      reverse: false 
    }).on('circle-animation-progress', function (event, progress) {

      $this.find('.circle-percent').html(Math.round(perNum * progress) + '<i>%</i>');
    });
  });
});




  const $notie = document.querySelector(".notie");


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
  const jAlert = document.getElementById("join_alert")
  const star = document.querySelector('.notie')

  const bannerElements = document.querySelectorAll('.banner img, .banner h2, .banner h4');

 
  if (waveForms.style.display === 'block') {
    waveForms.style.display = 'none';
    backSky.style.display = 'block';
    formElement.style.backgroundImage = 'url("img/gradient-blue-abstract-background-smooth-dark-blue-with-black-vignette-studio.jpg")'
    body.classList.add('dark-mode');
    Ul.classList.add('dark');
    jAlert.classList.add('dark_mode');
    star.style.display = 'block';
    
  } else {
    waveForms.style.display = 'block';
    backSky.style.display = 'none';
    formElement.style.backgroundImage = 'url("img/blurred-abstract-background.jpg")'
    body.classList.remove('dark-mode');
    Ul.classList.remove('dark');
    jAlert.classList.remove('dark_mode');
    star.style.display = 'none';
    
  }
});

  
  $(document).ready(function () {
    $('.join_code').click(function () {
      $('#join_alert').fadeIn(200).removeClass('hidden');

  
      setTimeout(function () {
        $('#join_alert').fadeOut(300, function () {
          $(this).addClass('hidden');
        });
      }, 3000);
    });
  });

  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches