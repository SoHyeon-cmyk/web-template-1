

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 6000,
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

// search.addEventListener('click', function(){
//   Schbar.translate ['0 50px',0]
// Schbar.classList.toggle('on')
// })

function count(type)  {

  const resultElement = document.getElementById('result');
  
  let number = resultElement.innerText;
  
  if(type === 'plus') {
    number = parseInt(number) + 1;
  }
  
  resultElement.innerText = number;
}


// 이건 왜 안되묘 Tlqkf
// $(function(){
//   cookiedata = document.cookie;
//   if(cookiedata.indexof("maindiv=done") < 0){
//     document.all['pop-wrap'].style.visibillity = "visible";
//   }else{
//     document.all['pop-wrap'].style.visibillity = "hidden"
//   }
// });

// var noticeCookie = getcookie("name");
// if(noticeCookie != "value"){
//   window.open('코드실험3.html')
// }

// function setCookie(name, value, expiredays){
//   var todayDate = new Date();
//   todayDate.setDate(todayDate.getDate() + expiredays);
//   document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTStr
// }
// function closePop(){
//   if (document.pop_form.CHbox.checked){
//     setCookie("maindiv", "done",1);
//   }
//   document.all['pop-wrap'].style.visibillity = "hidden";
// }

function popup(){
window.open("popup.html","popup","width=170,height=40,history=no, resizable=no, status=no, scrollbars=yes, menubar=no")
}


var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
nextEl: ".swiper-button-next",
prevEl: ".swiper-button-prev",
},
});

// // 쿠키생성

// function setCookie(name, value, expiredays){
//   var todayDate = new Date();
//   todayDate.setDate(todayDate.getDate() + expiredays);
//   document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString()+";"
// }

// // 쿠키저장

// $(function(){
//   document.querySelector(".popup_box").draggable({containment:'parent', scroll:false});

//   if(document.cookie.indexOf("popToday=close")< 0){
//     $("popup_layer").style.display = "block"
//   }else{
//     document.getElementById("popup_layer").style.display = "none"
//   }
// });

// // 버튼작동

//   function closeToday(){
//     setCookie("popToday", "close" , 1);
//     $("popup_layer").css("display", "none");
//     document.getElementById("popup_layer").style.display = "none"
//   }


//   function closePop(){
//     document.getElementById("popup_layer").style.display = "none"
//   }

    //쿠키설정    
    function setCookie(name, value, expiredays) {
      var todayDate = new Date();
      todayDate.setDate(todayDate.getDate() + expiredays);
      document.cookie = name + '=' + escape(value) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    }

    //쿠키 불러오기
    function getCookie(name) {
      var obj = name + "=";
      var x = 0;
      while (x <= document.cookie.length) {
        var y = (x + obj.length);
        if (document.cookie.substring(x, y) == obj) {
          if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
            endOfCookie = document.cookie.length;
          return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;

        if (x == 0) break;
      }
      return "";
    }

    //닫기 버튼 클릭시
    function closeWin(key) {
      if ($("#todaycloseyn").prop("checked")) {
        setCookie('divpop' + key, 'Y', 1);
      }
      $("#divpop" + key + "").hide();
    }

    $(function () {
      if (getCookie("divpop1") != "Y") {
        $("#divpop1").show();
      }
    });