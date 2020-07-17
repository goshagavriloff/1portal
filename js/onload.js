var mobNav=document.querySelector('#mobile-nav');

document.querySelector('.menu-icon').onclick = function(){
    document.querySelector('.menu-icon-line').classList.toggle('menu-icon-line-active');
    mobNav.classList.toggle('mobile-nav-active');
}
