document.addEventListener('DOMContentLoaded',function(){
	// check which elements need to be faded in
	var fadeInElements = document.body.querySelectorAll(".fade-in");
		
	// determine whether the element has entered or is above the viewport
	var enteredViewport = function(elem) {
		var bounding = elem.getBoundingClientRect();
		return (bounding.top <= (window.innerHeight || document.documentElement.clientHeight));
	}
	
	// fade in any elements in or above the viewport
	window.onload = function() {
		for (var i = 0; i < fadeInElements.length; i++) {
			if (enteredViewport(fadeInElements[i])) {
				fadeInElements[i].classList.remove("fade");
			}
		}
	}
	
	// fade in elements as they become visible in the viewport
	window.addEventListener('scroll', function(){
		for (var i = 0; i < fadeInElements.length; i++) {
			if (enteredViewport(fadeInElements[i])) {
				fadeInElements[i].classList.remove("fade");
			}
		}
	});
});