const dp = new DPlayer({
    container: document.querySelector(".video-player"),
    screenshot: true,
    video: {
        url: './static/movie.mp4',
        pic: './static/img/video-thumb.png',
        thumbnails: './static/img/video-thumb.png',
    },
});

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
 * 排序方式选择
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
