!function(){
    let specialTags=document.querySelectorAll('[data-x]')
    for(let i=0;i<specialTags.length;i++){
       specialTags[i].classList.add('offset')
    }
    //默认添加offset
    setTimeout(function(){
        findClostAndRemoveOffset()
    },200)
    
    window.addEventListener('scroll',function(){
        findClostAndRemoveOffset()
    })
    
    function findClostAndRemoveOffset(){
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
}.call()
