import { customScrollTo } from './customScrollTo'

const customScrollToImplementation = () => {
	// onload scroll
	window.addEventListener('DOMContentLoaded', (e) => {
		let url = window.location.href
		let contID = url.split('#')[1]
		if (contID) {
			customScrollTo(`#${contID}-cont`)
		}
	})
	// onload scroll end

	document.querySelector('header .logo-cont .img-cont').addEventListener('click', (e) => {
		customScrollTo('header .logo-cont .img-cont', false)
	})

	document.querySelector('a[href="#about"]').addEventListener('click', (e) => {
		customScrollTo('#about-cont')
	})

	document.querySelector('a[href="#features"]').addEventListener('click', (e) => {
		customScrollTo('#features-cont')
	})

	document.querySelector('a[href="#team"]').addEventListener('click', (e) => {
		customScrollTo('#team-cont')
	})

	document.querySelector('a[href="#contactus"]').addEventListener('click', (e) => {
		customScrollTo('#contactus-cont')
	})

	document.querySelector('html body #header-mobile .menu a[href="#about"]').addEventListener('click', (e) => {
		customScrollTo('#about-cont')
	})

	document.querySelector('html body #header-mobile .menu a[href="#features"]').addEventListener('click', (e) => {
		customScrollTo('#features-cont')
	})

	document.querySelector('html body #header-mobile .menu a[href="#team"]').addEventListener('click', (e) => {
		customScrollTo('#team-cont')
	})

	document.querySelector('html body #header-mobile .menu a[href="#contactus"]').addEventListener('click', (e) => {
		customScrollTo('#contactus-cont')
	})
}

export { customScrollToImplementation }