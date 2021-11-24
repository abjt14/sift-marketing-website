const navLinkScrollTrigger = () => {
	const navScrollTriggerSelectorArray = [
		{
			root: "#nlsh-hero",
			target: "header .logo-cont .img-cont"
		},
		{
			root: "#nlsh-about",
			target: `a[href="#about"]`
		},
		{
			root: "#nlsh-features",
			target: `a[href="#features"]`
		},
		{
			root: "#nlsh-team",
			target: `a[href="#team"]`
		},
		{
			root: "#nlsh-contactus",
			target: `a[href="#contactus"]`
		}
	]

	navScrollTriggerSelectorArray.forEach(selectors => {
		const trigger = document.querySelector(selectors.root);

		const callback = (entries, observer) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					navLinkSelector(selectors.target)
				}
			})
		}

		const options = {}
		const myObserver = new IntersectionObserver(callback, {options})

		myObserver.observe(trigger)
	})

	const navLinkSelector = (selector) => {
		const otherLinks = document.querySelectorAll(`html body header #links-cont a:not(${selector})`)
		otherLinks.forEach(link => {
			link.classList.remove('active')
		})

		const otherLinksMobile = document.querySelectorAll(`html body #header-mobile .menu a:not(${selector})`)
		otherLinksMobile.forEach(link => {
			link.classList.remove('active')
		})

		document.querySelector(selector).classList.add('active')
		if (document.querySelector(`html body #header-mobile .menu ${selector}`)) {
			document.querySelector(`html body #header-mobile .menu ${selector}`).classList.add('active')
		}

		const underlineBarNav = document.querySelector('#underline-bar-nav')

		if (selector == 'a[href="#about"]') {

			underlineBarNav.classList.add('active')
			underlineBarNav.style.left = '0%';

		} else if (selector == 'a[href="#features"]') {

			underlineBarNav.classList.add('active')
			underlineBarNav.style.left = '25%';

		} else if (selector == 'a[href="#team"]') {

			underlineBarNav.classList.add('active')
			underlineBarNav.style.left = '50%';

		} else if (selector == 'a[href="#contactus"]') {

			underlineBarNav.classList.add('active')
			underlineBarNav.style.left = '75%';

		} else {

			underlineBarNav.classList.remove('active')
			underlineBarNav.style.left = '0%';

		}
	}
}

export { navLinkScrollTrigger }