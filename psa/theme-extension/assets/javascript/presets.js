var PresetSlider = (function (window) {

  var PauseBeforeFirstSlide = 450 // ms
  var TimeToNextSlide = 4000 // ms
  var OnInteractionStopSlideshow = true

  var presetimgs // array of pointers to DOM elements
  var presetlinks // array of pointers to DOM elements
  var activeslide // index
  var slideids = [] // array of strings
  var newslideinterval // inerval



  function initialize() {
    presetimgs = document.querySelectorAll('.presets__image')
    presetlinks = document.querySelectorAll('#presetlinks .tablinks__link')
    presetlinks.forEach(function(link){
      link.addEventListener("click", _onLinkClick);
    })
    _initSlider()
  }

  function _onLinkClick(e) {
    e.preventDefault();
    if(OnInteractionStopSlideshow) {
      clearInterval(newslideinterval);
      OnInteractionStopSlideshow = false // to never enter this if again
    }
    _setActive(this.hash.substr(1)) // e.g. _setActive('preset-retrowave')
  }

  function _setActive(id) {
    var link = document.querySelector('a[href="#'+id+'"]')
    // ### LINK ###
    // return if clicked already active link
    if (link.classList.contains('tablinks__link--active')) return;
    // remove active class from link
    var prevActiveLink = document.querySelector('.tablinks__link--active')
    if (prevActiveLink) {
      prevActiveLink.classList.remove('tablinks__link--active')
    }
    // set new link active
    link.classList.add('tablinks__link--active')


    // ### TARGET ###
    // remove active class from image
    var prevActiveImg = document.querySelector('.presets__image--active')
    if (prevActiveImg) {
      prevActiveImg.classList.remove('presets__image--active')
    }
    var targetimg = document.getElementById(link.hash.substr(1));
    if (targetimg) {
      targetimg.classList.add('presets__image--active')
    }
  }

  function _initSlider() {
    presetimgs.forEach(function (slide) {
      slideids.push(slide.id)
    })
    // may cause errors if HTML not properly set
    var activeslideid =  document.querySelector('.presets__image--active').id
    activeslide = slideids.indexOf(activeslideid);

    setTimeout( function() {
        _setNextSlide()
        newslideinterval = setInterval(_setNextSlide, TimeToNextSlide);
      }, PauseBeforeFirstSlide
    )
  }

  function _setNextSlide() {
    if (++activeslide === slideids.length) activeslide = 0
    _setActive(slideids[activeslide])
  }

  return  {
    init: initialize
  };

})(window);

PresetSlider.init();