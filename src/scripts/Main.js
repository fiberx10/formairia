//Votre code ici

// question #2

// get btn
var btn = document.getElementById("addrandomtext") ;

// get the conatiner by class
var container = document.getElementsByClassName("title_holder")[0]  ;
// listen to any click on btn
btn.addEventListener('click' , (e)=>{
  // just needed for js
  e.preventDefault() ;

// the  text values
  const values = ['Jean-françois', 'Jean-Sébastien', 'Marie-France' , 'Matthieu'];

// get a random number between 0 and the lenght of the values array
  const randomvalue = Math.floor(Math.random() * values.length);

// create a new html element <p></p>
  var node = document.createElement("p");
// create a text component
  var value = document.createTextNode(values[randomvalue]);
  // add it to the the created element
  node.appendChild(value);
  // add the element to the document
  document.getElementsByClassName("title_holder")[0].appendChild(node);


  // ################################### give it a random position #########################
  // add some styles to it
  // * add an absolute position to it
  node.style.position = 'absolute';
  // * move it from left with a random number less then the width of the container
  let randleft = Math.floor(Math.random() * (container.clientWidth - node.clientWidth)) ;
  // * move it from top with a random number less then the height of the container

  let randright = Math.floor(Math.random() * (container.clientHeight - node.clientHeight )) ;
  // add the random number to the element style
  node.style.left = randleft  + 'px';
  node.style.top = randright + 'px';
}) ;




// question #4
// import swiper from swiper libbrary
import Swiper from 'swiper';
// init (start it / activate it ) the swiper
// .swiper is the class of the element where the swiper will shown
var swiper = new Swiper(  '.swiper', {
  breakpoints: {

    // when the screen width >= 0
    0: {
      // show 1 slide on screen
      slidesPerView: 1,
      spaceBetween: 30
    },

    // when the screen width >= 768
    768: {
      // show 2 slides on screen
      slidesPerView: 2,
      // space between slides
      spaceBetween: 20
    },

    // when the screen width >= 1000
    1000 : {
      // show 3 slides on screen
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
})



