var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " actives";
  setTimeout(showSlides, 5000); // Change image every 2 seconds (was at 3000, we changed it)
}



var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var i;
  var slides = document.getElementsByClassName("mySlidest");
  var dots = document.getElementsByClassName("dott");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex2++;
  if (slideIndex2 > slides.length) {slideIndex2 = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" actives", "");
  }
  slides[slideIndex2-1].style.display = "block";  
  dots[slideIndex2-1].className += " actives";
  setTimeout(showSlides2, 5000); // Change image every 2 seconds
}

function openmenu(){
	$('.navbar-collapse').toggle();
}