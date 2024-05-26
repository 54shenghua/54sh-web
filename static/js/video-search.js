/* 

中南大学校团委 升华网
JS Function For 54shenghua Part III

2024.5.26 @thetheorange

本JS定义了以下部分的功能实现:
搜索功能 响应式 改变搜索框的布局

*/

/**
 * 视频搜索框的显示隐藏
 */
(function () {
    const searchButton = document.querySelector('.detail-content-text .search span');

    // 获取搜索框元素
    const searchVideoInput = document.getElementById('searchVideoInput');

    // 显示和隐藏
    searchButton.addEventListener('click', () => {
        if (searchVideoInput.style.display !== 'block') {
            //显示
            searchVideoInput.style.display = 'block';
            searchVideoInput.style.padding = "2px 15px";
            setTimeout(function () {
                searchVideoInput.style.width = '200px';
            }, 0);
        } else {
            //搜索
            setTimeout(function () {
                window.location.href = '/search/' + searchVideoInput.value;
            }, 0);
        }
    });

    // 搜索功能
    searchVideoInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            window.location.href = '/search/' + searchVideoInput.value;
        }
    });
    // 点击搜索框外部隐藏
    document.addEventListener('click', function (e) {
        if (e.target !== searchVideoInput && e.target !== searchButton) {
            searchVideoInput.style.padding = '0';
            searchVideoInput.style.width = '0';
            setTimeout(function () {
                searchVideoInput.style.display = 'none';
            }, 500);
        }
    });
})();

/**
 * 视频搜索框的响应式布局
 */

(function(){

    // 搜索按钮
    const searchContainer = document.querySelector(".detail-content-text");

    let mediaQuery = window.matchMedia("(max-width: 600px)");

    if (mediaQuery.matches) {
        searchContainer.style.display = "block";
    }

}())