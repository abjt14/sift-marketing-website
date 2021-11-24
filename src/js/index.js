import '../sass/style.scss'


// onclick go to top
document.querySelector('header .logo-cont .img-cont').addEventListener('click', (e) => {
	window.scrollTo({top: 0, behavior: 'smooth'});
})