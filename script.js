
function loader(){
    let tl = gsap.timeline();
tl.to(".yellow1", {
    top: '-100%',
    duration:0.5,
    delay:0.5,
    ease:"expo.out"
})

tl.from(".yellow2", {
    top: '100%',
    duration:0.4,
    delay:0.2,
    ease:"expo.out"
}," same")
tl.to(".loader h1", {
   color: 'black',
   delay:0.3
}," same")
tl.to(".loader", {
  display:"none",
  opacity:0
},)
}
loader();
loco = () =>{
    const scroll = new LocomotiveScroll({
        el: document.querySelector('main'),
        smooth: true
    });
    let page2 = document.querySelector('.page2')
    let elems = document.querySelectorAll('.elems')
    elems.forEach(function(ele){
        ele.addEventListener('mouseenter', function(){
            let bgimg = ele.getAttribute('data-img')
            page2.style.backgroundImage = `url(${bgimg})`
        })
        ele.addEventListener('mouseleave', function(){
            page2.style.backgroundImage = `none`
        })
    })
    document.querySelector('.footer i').addEventListener('click', ()=>{
        scroll.scrollTo(0);
    })
}
loco();