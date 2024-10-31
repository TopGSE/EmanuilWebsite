document.addEventListener("DOMContentLoaded", function() {
	var currentLocation = window.location.href;
	var navLinks = document.querySelectorAll("nav ul li a");

	navLinks.forEach(function(link) {
		if (link.href === currentLocation) {
			link.classList.add("active");
		} 
	});
});
const learnMoreButton = document.getElementById('learn-more-button');

learnMoreButton.addEventListener('click', () => {
	//redirect to the about page
	window.location.href = 'about.html';
});



