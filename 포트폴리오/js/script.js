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




