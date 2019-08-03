var i=0;
	function slide(){
		document.getElementById("first-image").src = images[i];
		if (i<(images.length-1)) {
			i++;
		} else {
			i = 0;
		}
	}
	setInterval(slide,3000);