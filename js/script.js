let links = [...document.querySelectorAll('.navbar-nav .nav-item .nav-link')]



links.forEach((btn)=> {
    btn.addEventListener('click',()=> {
        links.forEach((el)=> {
            el.classList.remove('active')
        })
        btn.classList.add('active')
    })
})