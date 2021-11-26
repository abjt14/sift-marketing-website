import '../sass/style.scss'
import { customScrollToImplementation } from './custom-scroll-to/customScrollToImplementation'
import { navLinkScrollTrigger } from './nav-link-scroll-trigger/navLinkScrollTrigger'
import smoothscroll from 'smoothscroll-polyfill'
import { formInit } from './form/form'
import { marineAnimation } from './illustration-animation/illustrationAnimation'

// kick off the polyfill!
smoothscroll.polyfill();

// onclick links
customScrollToImplementation()
// onclick links end



// navigation link scroll triggers
navLinkScrollTrigger()
// navigation link scroll triggers end



// mobile menu
document.querySelector('#mobile-menu-toggle').addEventListener('click', (e) => {
	document.querySelector('#header-mobile .menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('overflow-hidden');
})
document.querySelectorAll('html body #header-mobile .menu a').forEach(link => {
	link.addEventListener('click', (e) => {
		document.querySelector('#header-mobile .menu').classList.remove('active');
		document.querySelector('body').classList.toggle('overflow-hidden');
	})
})
// mobile menu end



// scroll to top
document.querySelector('html body header .logo-cont .img-cont').addEventListener('click', (e) => {
	window.scrollTo({top: 0, behavior: 'smooth'});
	document.querySelectorAll('html body header #links-cont a').forEach(link => {
		link.classList.remove('active-2');
	})
})
// scroll to top



// toggle header menu
let lastScrollTop;
const header = document.querySelector('header');

window.addEventListener('scroll',function(){
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if(scrollTop > lastScrollTop){
		header.style.transform = 'translateY(-100%)';
	} else{
		header.style.transform = 'translateY(0%)';
	}

  lastScrollTop = scrollTop;
});
// toggle header menu end


// form init
formInit()
// form init end



// main animation init
marineAnimation();
// main animation init end