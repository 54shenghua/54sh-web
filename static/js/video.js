const dp = new DPlayer({
    container: document.querySelector(".video-player"),
    screenshot: true,
    video: {
        url: './static/movie.mp4',
        pic: './static/img/video-thumb.png',
        thumbnails: './static/img/video-thumb.png',
    },
});

