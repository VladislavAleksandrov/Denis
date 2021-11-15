const menuButton = document.querySelector('.nav_mobile');
const menu = document.querySelector('.nav__menu');
const star = document.querySelectorAll('.rating__star');
menuButton.addEventListener('click', () => {
	/*	console.log('click done');*/
	menu.classList.toggle('nav_mobile-is-open');
})
/*star.addEventListener('click', () => {
	star.classList.toggle('rating__star_active')
})*/
star.forEach(function (element) {
	/*console.log(element);*/
	element.addEventListener('click', function () {
		console.log(event.target);
		event.target.classList.toggle('rating__star_active');
	})
})

