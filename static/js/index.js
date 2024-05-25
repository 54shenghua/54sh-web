/* 

中南大学校团委 升华网
JS Function For 54shenghua Part II

2024.5.25 @grtsinry43

本JS定义了以下部分的功能实现:
导航栏动画

*/

/**
 * 这里面都用立即执行函数了，怕我的变量名比较抽象
 */

/**
 * 实现轮播图滚动到底就隐藏背景，可以添加一个纯色有模糊的背景
 */
(function () {
    const navbarBgContainer = document.querySelector('.navbar-bg-container');
    const navbarContainer = document.querySelector('.navbar-container');

    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    
    if (isMobileDevice()) {
        navbarBgContainer.style.zIndex = '-1';
        navbarContainer.classList.add("scrolledMobile");
    }else{
        navbarBgContainer.addEventListener("transitionend", () => {
            if (window.scrollY > 0) {
                navbarBgContainer.style.zIndex = '-1';
            }else{
                // navbarBgContainer.style.zIndex = '1';
            }
        })
        window.onscroll = () => {
            if (window.scrollY > 0) {
                navbarBgContainer.style.opacity = '0';
                navbarContainer.classList.add("scrolled");
            } else {
                navbarBgContainer.style.zIndex = '1';
                setTimeout(function() {
                    navbarBgContainer.style.opacity = '1';
                    setTimeout(function() {
                        navbarContainer.classList.remove("scrolled");
                    }, 100); 
                }, 100); 
            }
        };
    }
})();
