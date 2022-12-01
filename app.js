var currentIndex = 1;
// current index [0]
window.addEventListener("DOMContentLoaded", setSlide(0));
// if next and prev
function setSlide(num){
    slide(currentIndex += num)
}

function slide(slideIndex){
    var slides = document.getElementsByClassName('slide');

    if(slideIndex > slides.length){
        currentIndex = 1
    }else if(slideIndex < 1){
        
        currentIndex = slides.length 
    }
   for(var x = 0; x < slides.length; x++){
    slides[x].style.display = 'none';
   }
   slides[currentIndex-1].style.display = "block"
   console.log(slide[currentIndex])
}


