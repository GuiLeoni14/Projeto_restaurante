const navTabs = document.querySelectorAll('.js-main-card-servicos .card-servicos a');
const tabPaneAlmoco = document.querySelectorAll('.js-ul-cardapio-almoco')
const tabPaneJantar = document.querySelectorAll('.js-ul-cardapio-jantar')

navTabs.forEach((nav, index) =>{
    nav.addEventListener('click', (event) => {
        event.preventDefault();

        navTabs.forEach(itemNav => {
            itemNav.classList.remove('active');
        })
        nav.classList.add('active');
        tabPaneAlmoco.forEach(tab => {
            tab.classList.remove('active');
        })
        tabPaneAlmoco[index].classList.add('active');
        tabPaneJantar.forEach(tab => {
            tab.classList.remove('active');
        })
        tabPaneJantar[index].classList.add('active');
    })
})