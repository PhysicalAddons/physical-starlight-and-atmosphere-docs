var PresetSlider = (function (window) {

  var presetimgs
  var presetlinks


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
    // ### LINK ###
    // return if clicked already active link
    if (this.classList.contains('tablinks__link--active')) return;
    // remove active class from link
    var prevActiveLink = document.querySelector('.tablinks__link--active')
    if (prevActiveLink) {
      prevActiveLink.classList.remove('tablinks__link--active')
    }
    // set new link active
    this.classList.add('tablinks__link--active')


    // ### TARGET ###
    // remove active class from image
    var prevActiveImg = document.querySelector('.presets__image--active')
    if (prevActiveImg) {
      prevActiveImg.classList.remove('presets__image--active')
    }
    var targetimg = document.getElementById(this.hash.substr(1));
    if (targetimg) {
      targetimg.classList.add('presets__image--active')
    }
  }

  function _initSlider() {

  }


  return  {
    init: initialize
  };

})(window);

PresetSlider.init();