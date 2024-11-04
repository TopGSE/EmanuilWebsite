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

function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	document.body.style.opacity = "0.9";	
  }
  
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft= "0";
	document.body.style.backgroundColor = "white";
  }


  
  



