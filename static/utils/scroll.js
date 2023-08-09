//导航栏响应滚动变色
function scroll_color(){
    window.onscroll=function(){
        var topScroll =window.pageYOffset;
        console.log(topScroll)
        var nav=document.getElementById("nav");
        if(topScroll>120){
            nav.style.backgroundColor = 'rgba(255,255,255,0.75)';
            nav.style.backdropFilter = 'blur(24px)';
        }
        else{
            nav.style.backgroundColor = '';
            nav.style.backdropFilter = '';
        }
    }
}

export {scroll_color}