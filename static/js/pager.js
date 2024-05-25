/**
 * @param page {Number} 当前页码
 * @param pageNumber {Number} 总页码数
 * @param mostNumber {Number} 中间最大显示数量
 * @param container {Element} 分页容器
 * @desc 封装的一个用于创建分页组件的函数
 */
function createPage(page, pageNumber, mostNumber, container) {
    //后续生成之前删除上一次的内容
    container.innerHTML = "";

    var divPager = document.createElement('div');
    divPager.className = 'pager';

    /**
     * @param className {string} 添加的类名
     * @param text {string} 文字
     * @param newPage {Number} 要跳转的页面
     * @desc 创建单个组件
     */
    function createAnchor(className, text, newPage) {
        var a = document.createElement('a');
        a.className = className;
        a.innerText = text;
        divPager.appendChild(a);
        a.onclick = function () {
            //所谓跳转就是重新调用createPage()
            //要注意有些情况不能跳转，<1 / >总页面 / =当前
            if (newPage < 1 || newPage > pageNumber || newPage === page) {
                return;
            }
            createPage(newPage, pageNumber, mostNumber, container);
        }
    }

    //要有拆解的思想
    //1.首页和上一页
    if (page === 1) {
        //需要挂disabled类
        createAnchor('disabled', '首页', 1);
        createAnchor('disabled', '上一页', page - 1);
    } else {
        createAnchor('', '首页', 1);
        createAnchor('', '上一页', page - 1);
    }

    //2.中间数字
    var min = Math.floor(page - mostNumber / 2);
    if (min < 1) {
        min = 1;
    }
    var max = min + mostNumber - 1;
    if (max > pageNumber) {
        max = pageNumber;
    }
    for (let i = min; i <= max; i++) {
        if (i === page){
            //当前页挂标签
            createAnchor('active', i, i);
        } else {
            createAnchor('', i, i);
        }
    }


    //3.下一页和尾页
    if (page === pageNumber) {
        //需要挂disabled类
        createAnchor('disabled', '下一页', page + 1);
        createAnchor('disabled', '尾页', pageNumber);
    } else {
        createAnchor('', '下一页', page + 1);
        createAnchor('', '尾页', pageNumber);
    }

    //4.当前页码
    var span = document.createElement('span');
    span.innerText = page + '/' + pageNumber;
    divPager.appendChild(span);

    container.appendChild(divPager);
}


