!function(){
    var view=document.querySelector('nav')

    var controller = {
        view:null,
        aTags:null,
        initAnimation: function(){
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
            }
            requestAnimationFrame(animate);
        },
        init:function(){
            this.view = view;
            this.bindEvents()
        },
        bindEvents:function(){
            let aTags=this.view.querySelectorAll('nav>ul>li>a')
            this.initAnimation();
            for(let i=0;i<aTags.length;i++){
                aTags[i].onclick=(x)=>{
                    x.preventDefault();
                    let a=x.currentTarget;
                    let href=a.getAttribute('href');
                    let element=document.querySelector(href);
                    this.scrollToElement(element)
                }
            }
        },
        scrollToElement:function(element){
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
    controller.init(view)
}.call()
