//loading载入
setTimeout(function(){
    siteWelcome.classList.remove('active');
},100)
let specialTags=document.querySelectorAll('[data-x]')
for(let i=0;i<specialTags.length;i++){
   specialTags[i].classList.add('offset')
}
setTimeout(function(){
    findClost()},200)
//navbar 滑动时自动变形
window.onscroll=function(){
    if(window.scrollY>0){
        topNavbar.classList.add('sticky');
    }else{
        topNavbar.classList.remove('sticky');
    }
  findClost()
}
function findClost(){
  // 高亮当前元素
  let specialTags=document.querySelectorAll('[data-x]')
  let minIndex=0;
  for(let i=1;i<specialTags.length;i++){
      if(Math.abs(specialTags[i].offsetTop-window.scrollY)<Math.abs(specialTags[minIndex].offsetTop-window.scrollY)){
          minIndex=i;
      }
  }
  specialTags[minIndex].classList.remove('offset')
  let id=specialTags[minIndex].id
  let a=document.querySelector('a[href="#'+id+'"]');
  let li =a.parentNode;
  let brotherAndMe=li.parentNode.children
  for(let i=0;i<brotherAndMe.length;i++){
      brotherAndMe[i].classList.remove('highlight')
  }
  li.classList.add('highlight')
  console.log(li)
}
// 下拉菜单UD-1021
let liTags=document.querySelectorAll('.navBox>nav>ul>li')
for(let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(x){
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave=function(x){
        x.currentTarget.classList.remove('active')
    }
}
// 指定跳转UD-1021
let aTags=document.querySelectorAll('nav>ul>li>a')
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i=0;i<liTags.length;i++){
    aTags[i].onclick=function(x){
        x.preventDefault();
        let a=x.currentTarget;
        let href=a.getAttribute('href');
        let element=document.querySelector(href);
        let targetTop=element.offsetTop-70;
        let currentTop=window.scrollY
        let s=Math.abs(targetTop-currentTop)
        let t=(s/100)*300
        if(t>500){t=500}
        var coords = {y: currentTop}; 
        var tween = new TWEEN.Tween(coords) 
        .to({y: targetTop},t) 
        .easing(TWEEN.Easing.Quadratic.InOut) 
        .onUpdate(function() { 
            window.scrollTo(0,coords.y)
        })
        .start(); 
        
    }
}
