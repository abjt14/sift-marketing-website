import { gsap } from 'gsap'

const marineAnimation = () => {
	// water
	gsap.set('#marine .water', { scale: 1, transformOrigin:'center center' });
	gsap.to('#marine .water-5', { duration: 5, scale: 1.025, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
	gsap.to('#marine .water-4', { duration: 5, scale: 1.050, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
	gsap.to('#marine .water-3', { duration: 5, scale: 1.100, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
	gsap.to('#marine .water-2', { duration: 5, scale: 1.150, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
	gsap.to('#marine .water-1', { duration: 5, scale: 1.300, repeat: -1, yoyo: true, ease: 'Linear.easeInOut', repeatDelay: .1 })
	// water end

	// garbage
	gsap.set(
		`
			#marine .garbage-individual,
			#marine .garbage-1,
			#marine .garbage-2,
			#marine .garbage-3,
			#marine .garbage-4,
			#marine .garbage-5,
			#marine .garbage-6,
			#marine .garbage-7,
			#marine .garbage-8,
			#marine .garbage-9,
			#marine .garbage-10,
			#marine .garbage-11
		`,
	{
		transformOrigin:'center center',
		xPercent: -25,
		yPercent: -25
	});
	document.querySelectorAll('#marine .garbage-individual').forEach(object => {
		garbageAnimator(object)
	})
	garbageAnimator('#marine .garbage-1')
	garbageAnimator('#marine .garbage-2')
	garbageAnimator('#marine .garbage-3')
	garbageAnimator('#marine .garbage-4')
	garbageAnimator('#marine .garbage-5')
	garbageAnimator('#marine .garbage-6')
	garbageAnimator('#marine .garbage-7')
	garbageAnimator('#marine .garbage-8')
	garbageAnimator('#marine .garbage-9')
	garbageAnimator('#marine .garbage-10')
	garbageAnimator('#marine .garbage-11')
	// garbage end

	// animal
	document.querySelectorAll('#marine .animal').forEach(object => {
		// animalAnimator(object)
	})
	gsap.to('#marine path.animal-1, #marine rect.animal-1', {
		duration: 2,
		scale: 1.3,
		repeat: -1,
		// xPercent: -20,
		// yPercent: -10,
		transform: 'translate(-20px, -10px)',
		// rotate: -15,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 0.5
	})
	gsap.to('#marine path.animal-2, #marine rect.animal-2', {
		duration: 3,
		scale: 1.1,
		repeat: -1,
		// xPercent: -10,
		// yPercent: -30,
		transform: 'translate(-10px, -30px)',
		// rotate: 5,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 1.5
	})
	gsap.to('#marine path.animal-3, #marine rect.animal-3', {
		duration: 3.5,
		scale: 1.5,
		repeat: -1,
		// xPercent: -50,
		// yPercent: -10,
		transform: 'translate(-20px, -10px)',
		// rotate: -10,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 2.5
	})
	gsap.to('#marine path.animal-4, #marine rect.animal-4', {
		duration: 2.5,
		scale: 1.3,
		repeat: -1,
		// xPercent: -20,
		// yPercent: -10,
		transform: 'translate(-20px, -10px)',
		// rotate: 5,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 0.5
	})
	gsap.to('#marine path.animal-5, #marine rect.animal-5', {
		duration: 5,
		scale: 1.3,
		repeat: -1,
		// xPercent: -20,
		// yPercent: -40,
		transform: 'translate(-20px, -40px)',
		// rotate: -15,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 0.5
	})
	gsap.to('#marine path.animal-6, #marine rect.animal-6', {
		duration: 5,
		scale: 1.4,
		repeat: -1,
		// xPercent: -30,
		// yPercent: -10,
		transform: 'translate(-30px, -10px)',
		// rotate: 5,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 1.5
	})
	gsap.to('#marine path.animal-7, #marine rect.animal-7', {
		duration: 4.5,
		scale: 1.2,
		repeat: -1,
		// xPercent: -10,
		// yPercent: -20,
		transform: 'translate(-10px, -20px)',
		// rotate: -25,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 0.5
	})
	gsap.to('#marine path.animal-8, #marine rect.animal-8', {
		duration: 5,
		scale: 1.1,
		repeat: -1,
		xPercent: -15,
		yPercent: -10,
		transform: 'translate(-15px, -10px)',
		// rotate: 5,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 2.5
	})
	gsap.to('#marine path.animal-9, #marine rect.animal-9', {
		duration: 4,
		scale: 1.5,
		repeat: -1,
		// xPercent: -15,
		// yPercent: -30,
		transform: 'translate(-15px, -30px)',
		// rotate: -5,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 0.5
	})
	gsap.to('#marine path.animal-12, #marine rect.animal-12', {
		duration: 5,
		scale: 1.1,
		repeat: -1,
		xPercent: -10,
		yPercent: -10,
		// transform: 'translate(-10px, -10px)',
		rotate: 5,
		yoyo: true,
		ease: 'Linear.easeInOut',
		repeatDelay: 3.5
	})
	// animal end
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

const animalAnimator = (object) => {
	const factor = getRandomInt(5, 10);
	gsap.to(object, {
		duration: .5*factor,
		xPercent: -5*factor,
		yPercent: -5*factor,
		scale: (1 + .01*factor),
		force3D: true,
		repeat: -1,
		repeatDelay: .25*factor,
		yoyo: true,
		ease: 'Power1.easeOut'
	});
}

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}



export { marineAnimation }