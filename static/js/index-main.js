/* 

中南大学校团委 升华网
JS Function For 54shenghua Part I

2024.5.25 @SteamFinder

本JS定义了以下部分的功能实现:
思想引领 实践育人 社团风采 Footer

getCurrentYear
- Footer 版权所有区域的时间

logInfos
- 控制台调试信息

*/

/* 获取当前年份 用于Footer显示 */
function getCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
    console.log("获取当前Year成功", currentYear);
}

function logInfos() {
    console.info(
        '%c %c中南大学校团委 %c升华网%c  %cWeb UI Core%c  %c358940a-240526c',
        'padding-left: 36px; line-height: 36px; background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA4NzVBMkFDMkREMDExRUE4QkJDOTY3OEUwOUY1M0ZEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjA4NzVBMkFEMkREMDExRUE4QkJDOTY3OEUwOUY1M0ZEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDg3NUEyQUEyREQwMTFFQThCQkM5Njc4RTA5RjUzRkQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDg3NUEyQUIyREQwMTFFQThCQkM5Njc4RTA5RjUzRkQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MXhlvAAAB4UlEQVR42syUTUhUURSA7zXJGHFCXLjQWqjUxBTTwhYS6EKstQvBRU7S4rVqURItItqlDe5ydaEGphbiplxEkKhoFIgyUm5qM1NQQUR/mzBEXt99c56Mj968Rmbhhe+c+zj3nHd+3rvadV1Vy1WnarzqK1qNPoB8AT3wUDluOiqgDi3Z6EZkHo7BNtjgzwl6vvqSjW5BvpNgw9AEGTiHbRni/1+y0WeQcxCDs2T0Siw3sL1FP4Bnni0yw9KbW+EwfC4L5q95+AAznB2HtvAeGn0S+dprvlK34T18geME/oV9lP0d6LZ+8FHsp7B/3Z2h0SnkmjwfgSFISbZFyaQTLuNsM//E/qLY17G3B0u2pTVIz/rR39Bv0M1Ckedb6IM4ZzwPx80hL4F92WowYEx0XA5ncbSlT8qENc/f0XYoSfZ35fzvgP9OQNuXP970jB6Am+wvgP18bJN7ZVCLkJY2vUROy5CSlYbiv+QqLMBjOAGH4Kc3faUS8BSsTxcV/fj3n2J0B3IDslLufbiOQ77sjO+Q8LJz3M3w79BxC9LknDcIpQqBYFdkt+JlGwgW/i8bfRQ5C6dhAu7BNRiDJwQarP5yKAVekoH46xHBRvZ+Hzpun0xyC6aigkVnuB9u7L8CDABSKJywbHDl7QAAAABJRU5ErkJggg=="); background-size: 32px; background-repeat: no-repeat; background-position: 2px 2px',
        'background: #666; border-radius:0.5em 0 0 0.5em; padding:0.2em 0em 0.1em 0.5em; color: white; font-weight: bold',
        'background: #666; border-radius:0 0.5em 0.5em 0; padding:0.2em 0.5em 0.1em 0em; color: white;',
        '',
        'background: #c3a650; border-radius:0.5em; padding:0.2em 0.5em 0.1em 0.5em; color: white;',
        '',
        'background: #15889f; border-radius:0.5em; padding:0.2em 0.5em 0.1em 0.5em; color: white;'
    );
}

/* Info getInfos */
function getInfos(input) {
    if (input === "about") {
        console.log("%c CSU %c 54sh Studio - 2024 Network Department ", "color: white; font-size: 20px; background-color: rgb(0, 73, 182);", "color: white; font-size: 20px; background-color: grey;");
        console.log("Art Designed by Lijingze\nAchieved by SteamFinder, thetheOrange, grtsinry43");
    } else {
        console.log("知行合一 经世致用");
    }
}

logInfos();
getCurrentYear();