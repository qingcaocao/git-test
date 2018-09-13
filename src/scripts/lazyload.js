function lazyload(images) {
    let imgs = [].slice.call(images); //或者Array.from(images)

    let onscroll = throttle(function onscroll() {
        // console.log(new Dat)
        if (imgs.length === 0) {
            return window.removeEventListener("scroll", onscroll);
        }
        //过滤图片
        imgs = imgs.filter(img => img.classList.contains("lazyload"));
        //遍历图片加载
        imgs.forEach(img => {
            if (inViewport(img)) {
                loadImage(img);
            }
        });
    },300);
    //添加滚动事件监听
    window.addEventListener("scroll", onscroll);
    //首屏自动加载
    window.dispatchEvent(new Event("scroll"));
    //节流
    function throttle(func, wait) {
        let prev, timer;
        return function fn() {
            let curr = Date.now();
            let diff = curr - prev;
            if (!prev || diff >= wait) {
                func();
                prev = curr;
            } else if (diff < wait) {
                clearTimeout(timer);
                timer = setTimeout(fn, wait - diff);
            }
        };
    }
    //判定是否图片在视口
    function inViewport(img) {
        let { top, right, left, bottom } = img.getBoundingClientRect(); //获取元素距视口左上角的距离
        let vpWidth = document.documentElement.clientWidth;
        let vpHeight = document.documentElement.clientHeight;
        return (
            //垂直方向
            ((top > 0 && top < vpHeight) ||
                (bottom > 0 && bottom < vpHeight)) &&
            //水平方向
            ((left > 0 && left < vpWidth) || (right > 0 && right < vpWidth))
        );
    }

    //加载img函数
    function loadImage(img) {
        let image = new Image(); //Image()函数将会创建一个新的HTMLImageElement实例。
        image.src = img.dataset.src;
        image.onload = function() {
            img.src = image.src;
            img.classList.remove("lazyload");
        };
    }
}
