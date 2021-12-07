import { gsap } from 'gsap'

const mainAnimation = () => {
	const selectedSVGNumber = getRandomInt(1, 3);

	if (innerWidth > 600) {
		document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber})`).style.display = 'block';

		// background
		gsap.set(`.hero-image svg:nth-child(${selectedSVGNumber}) .background`, { scale: 1, transformOrigin:'center center' });
		gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) .background-5`, { duration: 5, scale: 1.025, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) .background-4`, { duration: 5, scale: 1.050, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) .background-3`, { duration: 5, scale: 1.100, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) .background-2`, { duration: 5, scale: 1.150, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) .background-1`, { duration: 5, scale: 1.300, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		// background end

		// garbage
		gsap.set(
			`.hero-image svg:nth-child(${selectedSVGNumber}) .garbage-individual`,
			{
				transformOrigin:'center center',
				xPercent: -25,
				yPercent: -25
			}
		);
		document.querySelectorAll(`.hero-image svg:nth-child(${selectedSVGNumber}) .garbage-individual`).forEach(object => {
			garbageAnimator(object)
		})
		for (let i = 1; i <= 13; i++) {
			let selector = document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) .garbage-${i}`);
			if (selector) {
				gsap.set(selector, { transformOrigin:'center center', xPercent: -25, yPercent: -25 });
				garbageAnimator(selector)
			}
		}
		// garbage end

		// animal
		if (selectedSVGNumber === 1) {
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-1, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-1`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-1, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-1`, {
					duration: 2,
					scale: 1.3,
					repeat: -1,
					transform: 'translate(-20px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-2, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-2`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-2, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-2`, {
					duration: 3,
					scale: 1.1,
					repeat: -1,
					transform: 'translate(-10px, -30px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 1.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-3, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-3`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-3, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-3`, {
					duration: 3.5,
					scale: 1.5,
					repeat: -1,
					transform: 'translate(-20px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 2.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-4, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-4`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-4, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-4`, {
					duration: 2.5,
					scale: 1.3,
					repeat: -1,
					transform: 'translate(-20px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-5, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-5`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-5, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-5`, {
					duration: 5,
					scale: 1.3,
					repeat: -1,
					transform: 'translate(-20px, -40px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-6, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-6`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-6, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-6`, {
					duration: 5,
					scale: 1.4,
					repeat: -1,
					transform: 'translate(-30px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 1.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-7, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-7`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-7, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-7`, {
					duration: 4.5,
					scale: 1.2,
					repeat: -1,
					transform: 'translate(-10px, -20px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-8, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-8`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-8, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-8`, {
					duration: 5,
					scale: 1.1,
					repeat: -1,
					xPercent: -15,
					yPercent: -10,
					transform: 'translate(-15px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 2.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-9, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-9`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-9, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-9`, {
					duration: 4,
					scale: 1.5,
					repeat: -1,
					transform: 'translate(-15px, -30px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-12, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-12`)) {
				gsap.to(`.hero-image svg:nth-child(${selectedSVGNumber}) path.animal-12, .hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-12`, {
					duration: 5,
					scale: 1.1,
					repeat: -1,
					xPercent: -10,
					yPercent: -10,
					rotate: 5,
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 3.5
				})
			}
		}
		// animal end
	} else {
		document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber})`).style.display = 'block';

		// background
		gsap.set(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .background`, { scale: 1, transformOrigin:'center center' });
		gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .background-5`, { duration: 5, scale: 1.025, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .background-4`, { duration: 5, scale: 1.050, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .background-3`, { duration: 5, scale: 1.100, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .background-2`, { duration: 5, scale: 1.150, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .background-1`, { duration: 5, scale: 1.300, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
		// background end

		// garbage
		gsap.set(
			`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .garbage-individual`,
			{
				transformOrigin:'center center',
				xPercent: -25,
				yPercent: -25
			}
		);
		document.querySelectorAll(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .garbage-individual`).forEach(object => {
			garbageAnimator(object)
		})
		for (let i = 1; i <= 13; i++) {
			let selector = document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) .garbage-${i}`);
			if (selector) {
				gsap.set(selector, { transformOrigin:'center center', xPercent: -25, yPercent: -25 });
				garbageAnimator(selector)
			}
		}
		// garbage end

		// animal
		if (selectedSVGNumber === 1) {
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-1, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-1`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-1, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-1`, {
					duration: 2,
					scale: 1.3,
					repeat: -1,
					transform: 'translate(-20px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-2, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-2`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-2, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-2`, {
					duration: 3,
					scale: 1.1,
					repeat: -1,
					transform: 'translate(-10px, -30px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 1.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-3, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-3`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-3, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-3`, {
					duration: 3.5,
					scale: 1.5,
					repeat: -1,
					transform: 'translate(-20px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 2.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-4, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-4`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-4, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-4`, {
					duration: 2.5,
					scale: 1.3,
					repeat: -1,
					transform: 'translate(-20px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-5, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-5`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-5, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-5`, {
					duration: 5,
					scale: 1.3,
					repeat: -1,
					transform: 'translate(-20px, -40px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-6, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-6`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-6, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-6`, {
					duration: 5,
					scale: 1.4,
					repeat: -1,
					transform: 'translate(-30px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 1.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-7, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-7`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-7, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-7`, {
					duration: 4.5,
					scale: 1.2,
					repeat: -1,
					transform: 'translate(-10px, -20px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-8, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-8`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-8, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-8`, {
					duration: 5,
					scale: 1.1,
					repeat: -1,
					xPercent: -15,
					yPercent: -10,
					transform: 'translate(-15px, -10px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 2.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-9, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-9`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-9, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-9`, {
					duration: 4,
					scale: 1.5,
					repeat: -1,
					transform: 'translate(-15px, -30px)',
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 0.5
				})
			}
			if (document.querySelector(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-12, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-12`)) {
				gsap.to(`.mobile-hero-image svg:nth-child(${selectedSVGNumber}) path.animal-12, .mobile-hero-image svg:nth-child(${selectedSVGNumber}) rect.animal-12`, {
					duration: 5,
					scale: 1.1,
					repeat: -1,
					xPercent: -10,
					yPercent: -10,
					rotate: 5,
					yoyo: true,
					ease: 'Linear.easeInOut',
					repeatDelay: 3.5
				})
			}
		}
		// animal end
	}
}

const garbageAnimator = (object) => {
	const factor = getRandomInt(5, 10);
	gsap.to(object, {
		duration: .5*factor,
		xPercent: factor,
		yPercent: factor,
		force3D: true,
		repeat: -1,
		yoyo: true,
		ease: 'Power1.easeOut'
	});
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export { mainAnimation }