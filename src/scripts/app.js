!(function(){

    let slider = new Slider({
        el: document.querySelector('#slider'),
        slides: [
            {link: '#1', image: '/imgs/xinxiu.jpg'},
            {link: '#2', image: '/imgs/qingfeng.jpg'},
            {link: '#3', image: '/imgs/tyboys.jpg'},
            {link: '#4', image: '/imgs/xunjing.jpg'},
            {link: '#5', image: '/imgs/zhuanlan.jpg'}
        ]
    })  
    window.slider = slider

})()
