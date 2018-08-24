
document.addEventListener('click',function(event){
    let target = event.target
  
    if(target.dataset.role !=='tab') return
    [].forEach.call(target.parentElement.children,tab => {
        tab.classList.remove('active')
    })
    target.classList.add('active')
    let content = document.querySelector(target.dataset.view)
    console.log(content)
    if(content){
        //利用空数组的forEach 方法遍历content的children 显示隐藏tab 也可以for循环遍历
        [].forEach.call(content.parentElement.children,child=>{
            child.style.display = 'none'
        })
        content.style.display = 'block'
    }
})