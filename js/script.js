function toggle_light_theme() {
	var app = document.body;
	var logo = document.getElementById('theme-logo');
	var darkSVG = document.getElementById('frankfurt-svg-dark');
	var lightSVG = document.getElementById('frankfurt-svg-light');
	var toggleSwitch = document.getElementById('toggle');
	var currentTheme = sessionStorage.getItem('theme') || 'dark'; // Default to dark

	// Toggle the theme
	var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	app.setAttribute('data-theme', newTheme);

	// Update logo
	if (logo) {
		var newLogoSrc =
			newTheme === 'dark' ? logo.getAttribute('data-dark') : logo.getAttribute('data-light');

		if (newLogoSrc) {
			logo.src = newLogoSrc + '?v=' + new Date().getTime(); // Cache-busting
		}
	}

	// Update switch position
	toggleSwitch.checked = newTheme === 'light';

	// Swap inline SVGs
	if (darkSVG && lightSVG) {
		if (newTheme === 'dark') {
			darkSVG.classList.remove('hidden');
			lightSVG.classList.add('hidden');
		} else {
			darkSVG.classList.add('hidden');
			lightSVG.classList.remove('hidden');
		}
	}

	// Store theme choice in session storage
	sessionStorage.setItem('theme', newTheme);
}

// Apply stored theme on page load
document.addEventListener('DOMContentLoaded', function () {
	var app = document.body;
	var logo = document.getElementById('theme-logo');
	var darkSVG = document.getElementById('frankfurt-svg-dark');
	var lightSVG = document.getElementById('frankfurt-svg-light');
	var toggleSwitch = document.getElementById('toggle');

	// Get stored theme or default to 'dark'
	var storedTheme = sessionStorage.getItem('theme') || 'dark';
	app.setAttribute('data-theme', storedTheme);

	// Ensure logo updates correctly on page load
	if (logo) {
		var storedLogoSrc =
			storedTheme === 'dark' ? logo.getAttribute('data-dark') : logo.getAttribute('data-light');

		if (storedLogoSrc) {
			logo.src = storedLogoSrc + '?v=' + new Date().getTime(); // Cache-busting
		}
	}

	// Show the correct SVG on load
	if (darkSVG && lightSVG) {
		if (storedTheme === 'dark') {
			darkSVG.classList.remove('hidden');
			lightSVG.classList.add('hidden');
		} else {
			darkSVG.classList.add('hidden');
			lightSVG.classList.remove('hidden');
		}
	}
	// Set the toggle switch state
	toggleSwitch.checked = storedTheme === 'light';

	// Hamburger menu
	const menuButton = document.querySelector('.hamburger-menu');
	const navigation = document.querySelector('.main-navigation');

	if (menuButton && navigation) {
		menuButton.addEventListener('click', function () {
			navigation.classList.toggle('active');
			menuButton.classList.toggle('active');
		});
	}
});
