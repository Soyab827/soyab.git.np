burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
searchbar = document.querySelector('.searchbar')
navlist= document.querySelector('.nav-list')


burger.addEventListener('click',()=>{
    searchbar.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})