//로딩에서 화면으로 이동
const loadingAreaGrey = document.querySelector("#loading");
const loadingAreaGreen = document.querySelector("#loading-screen")
const loadingText = document.querySelector("#loading p")

// 문서가 전부 로드되면 구문 실행
addEventListener('load', () =>{
  // 로딩중(회색스크린):서서히 사라짐
  loadingAreaGrey.animate(
    {opacity:[1,0],
      visibility: 'hidden'

    },{
      duration:2000,
      delay:1200,
      easing:'ease',
      fill: 'forwards'
    }
  );

  loadingAreaGreen.animate(
    {
      translate:['0 100vh', '0 0', '0 -100vh']
    },
    {
      duration: 2000,
      delay:800,
      easing:'ease',
      fill: 'forwards'
    }
  )

  // 로딩중 텍스트 (offset으로 타이밍 조정)
  // duration이 80%가 될 때까지 opacity가 1이고 80%~100%까지 opacity가 0으로 변경
  loadingText.animate(
    [
      {opacity:1,
        offset:.8},
        {opacity:0,
          offset:1}
    ],
    {
      duration:1200,
      easing:'ease',
      fill: 'forwards'
    }
  )
})


//섬네일 이미지에 커서를 올리면 큰 이미니작 나타나는 애니메이션

const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');
// 썸네일 이미지에 마우스오버 이벤트 리스너 추가
thumbImages.forEach(thumbImage => thumbImage.addEventListener('mouseover', (e)=>{
  // 메인 이미지의 src속성을 이벤트가 발생된 요소의src속성값으로 적용
  mainImage.src = e.target.src;
  mainImage.animate({opacity:[0,1]}, 500)
}))

const menuOpen = document.querySelector("#menu-open")
const menuClose = document.querySelector("#menu-close")
const menuPanel = document.querySelector("#menu-panel")
const menuItems = document.querySelectorAll("#menu-panel li")


const menuOption = {
  duration:1400,
  easing:'ease',
  fill: 'forwards'
}

menuOpen.addEventListener('clikc', ()=>{
  // 화면 오른쪽 밖에서 화면 안쪽으로 패널을 이동
  menuPanel.animate({translate: ['100vw',0],menuOptions})

  menuItems.forEach((menuItems, idx) => menuItems.animate(
    {
      opacity:[0,1],
      translate:['2rem', 0]
    },{
      duration: 2400,
      delay:300*idx,
      easing:'ease',
      fill:'forwards'
    }
  ))
})

//메뉴 닫기

menuClose.addEventListener('click', ()=>{
  menuPanel.animate({translate:[0,'100vw'],menuOptions})

  menuItems.forEach((menuItems, idx)=> menuItems.animate(
    {
      opacity:[1,0],menuOptions
    },
    {

    }
  ))
})