const items = document.querySelectorAll('article')
const aside = document.querySelector('aside')

const close = document.querySelector('aside span')

for (const el of items){
  console.log(el)
  el.addEventListener("mouseenter")

  el.addEventListener('click', ()=>{
    let tit = el.querySelector("h2").innerText
    let txt = el.querySelector("p").innerText
    let vidSrc = el.querySelector("video").getAttribute("src")

    aside.querySelector("h1").innerText = tit
    aside.querySelector("p").innerText = txt
    aside.querySelector("video").setAttribute("src", vidSrc)

    aside.classList.add("on")
    aside.querySelector("video").play()
  })


}

close.addEventListener('click', ()=>{
  aside.classList.remove("on")
  aside.querySelector("video").pause();
})