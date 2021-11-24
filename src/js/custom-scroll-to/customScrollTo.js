const customScrollTo = (selector, offsetHeader = true) => {
	const element = document.querySelector(selector);

	if (element) {
		let top = element.getBoundingClientRect().top + window.pageYOffset;

		if (offsetHeader) {
			top -= document.querySelector('header').getBoundingClientRect().height + innerHeight*.05;
			if (innerWidth <= 600) {
				top -= 100;
			}
		}
		window.scrollTo({top: top, behavior: 'smooth'});
	} else {
		console.log(`invalid selector "${selector}"`)
	}
}

export { customScrollTo }