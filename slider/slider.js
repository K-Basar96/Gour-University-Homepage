
let image = 0;

let slide_controller=(navi)=>{
  // on button click
  image = image + navi
  slide_image(image)
}

let slide_image=(currentValue) => {
  //select all slide images
  let slides = document.getElementsByClassName('slide');
  //if the image index get maximum, reset it
  if(currentValue==slides.length){
    currentValue=0;
    image=0
  }
  //if image index becomes 0, set it to max
  if(currentValue<0){
    currentValue=slides.length-1;
    image=slides.length-1
  }
  //make the other image hidden
  for(i of slides){
    i.style.display="none"
  }
  //show one image only
  slides[currentValue].style.display='block'
}

//automatic change the image after 5 second
setInterval(function () {slide_controller(1)}, 5000);
slide_image(image)