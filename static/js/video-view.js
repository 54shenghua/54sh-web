/*

中南大学校团委 升华网
JS Function For 54shenghua Part IV

2024.5.27 @grtsinry44

本JS定义了以下部分的功能实现:
评论输入框，按钮状态切换，排序方式选择

*/

/**
 * 输入框大小调整
 */
(function () {
    // 获取textarea元素
    const textarea = document.querySelector('.comment-area textarea');

    // 添加input事件监听器
    textarea.addEventListener('input', autoResize, false);

    function autoResize() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    }
})();

/**
 * 按钮状态切换
 */
(function () {
    const autoplayBtn = document.querySelector(".playlist-autoplay img");
    autoplayBtn.addEventListener('click', () => {
        if (autoplayBtn.dataset.on === "true") {
            autoplayBtn.src = "./static/img/switchoff.png";
            autoplayBtn.dataset.on = "false";
        } else {
            autoplayBtn.src = "./static/img/switchon.png";
            autoplayBtn.dataset.on = "true";
        }
    })
})();


/**
 * 视频排序方式选择
 */
(function () {
    const sortItems = document.querySelectorAll('.sort-item');
    sortItems.forEach(item => {
        item.addEventListener('click', () => {
            sortItems.forEach(i => i.classList.remove('sort-active'));
            item.classList.add('sort-active');
        });
    });
})();

/**
 * 评论排序方式选择
 */
(function () {
    //下拉三角形
    const commentSort = document.querySelector('.comment-sort-arrow');
    const sortList = document.querySelector('.comment-sort');
    sortList.style.display = 'none';
    commentSort.addEventListener('click', () => {
        if (sortList.style.display === 'block') {
            sortList.style.display = 'none';
        } else {
            sortList.style.display = 'block';
        }
    });
    const sortItems = document.querySelectorAll('.comment-sort li');
    sortItems.forEach(item => {
        item.addEventListener('click', () => {
            sortItems.forEach(i => i.classList.remove('comment-sort-active'));
            item.classList.add('comment-sort-active');
        });
    });
})();
