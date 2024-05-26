/* 

中南大学校团委 升华网
JS Function For 54shenghua Part III

2024.5.26 @grtsinry43

本JS定义了以下部分的功能实现:
搜索功能

*/

/**
 * 有关搜索框的显示隐藏，实现搜索
 */
(function () {
    const searchIcon = document.querySelector('.navbar-search img');

    // 获取搜索框元素
    const searchInput = document.getElementById('searchInput');

    // 显示和隐藏
    searchIcon.addEventListener('click', () => {
        if (searchInput.style.display !== 'block') {
            //显示
            searchInput.style.display = 'block';
            searchInput.style.padding = "2px 15px";
            setTimeout(function () {
                searchInput.style.width = '200px';
            }, 0);
        } else {
            //搜索
            setTimeout(function () {
                window.location.href = '/search/' + searchInput.value;
            }, 0);
        }
    });

    // 搜索功能
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            window.location.href = '/search/' + searchInput.value;
        }
    });
    // 点击搜索框外部隐藏
    document.addEventListener('click', function (e) {
        if (e.target !== searchInput && e.target !== searchIcon) {
            searchInput.style.padding = '0';
            searchInput.style.width = '0';
            setTimeout(function () {
                searchInput.style.display = 'none';
            }, 500);
        }
    });
})();