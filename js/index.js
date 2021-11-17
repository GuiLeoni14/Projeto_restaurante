const navTabs = document.querySelectorAll('.js-main-card-servicos .card-servicos a');
const tabPaneAlmoco = document.querySelectorAll('.js-ul-cardapio-almoco')
const tabPaneJantar = document.querySelectorAll('.js-ul-cardapio-jantar')
const header = document.querySelector('.js-header');
const linksSection = document.querySelectorAll('.js-nav li a');
const btnMenuMobile = document.getElementById('js-btn-menu');
const overlayMenu = document.querySelector('.js-overlay')
const iconX = document.getElementById('icon-x');

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

function fixedMenu(){
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 80){
        header.classList.add('fixed-menu');
        console.log('teste')
    } else {
        header.classList.remove('fixed-menu');
    }
}

function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const positionInicialSection = section.offsetTop;
    console.log(href);
    console.log(positionInicialSection);
    window.scrollTo({
        top: positionInicialSection - 100, // 128 corresponde ao tamanho do header que sera descontado (8rem * 16)
        behavior: 'smooth',
    })
}

function openMenuMobile(){
    document.documentElement.classList.toggle('menu-opened');
}

window.addEventListener('scroll', fixedMenu);

linksSection.forEach(link => {
    link.addEventListener('click', scrollToSection);
})

btnMenuMobile.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', openMenuMobile);
iconX.addEventListener('click', openMenuMobile);