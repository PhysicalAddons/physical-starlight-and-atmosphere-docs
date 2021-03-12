var Tablinks = (function (window) {

  function initialize() {
    var tablinks = document.querySelectorAll('.tablinks')
    console.log(tablinks)
    tablinks.forEach(function(tablink){
        var links = tablink.querySelectorAll('.tablinks__link')
        console.log('links', links)
        links.forEach(function(link){
            console.log('tablinks for each')
            link.addEventListener("click", _onLinkClick);
        })
    })
  }

  function _onLinkClick(e) {
    e.preventDefault();
    console.log('onLinkClick', this)
    setActive(this)
  }

//   function _setActive(id) {
//     var link = document.querySelector('a[href="#'+id+'"]')
//     // ### LINK ###
//     // return if clicked already active link
//     if (link.classList.contains('tablinks__link--active')) return;
//     // remove active class from link
//     var prevActiveLink = document.querySelector('.tablinks__link--active')
//     if (prevActiveLink) {
//       prevActiveLink.classList.remove('tablinks__link--active')
//     }
//     // set new link active
//     link.classList.add('tablinks__link--active')


//     // ### TARGET ###
//     // remove active class from image
//     var prevActiveImg = document.querySelector('.presets__image--active')
//     if (prevActiveImg) {
//       prevActiveImg.classList.remove('presets__image--active')
//     }
//     var targetimg = document.getElementById(link.hash.substr(1));
//     if (targetimg) {
//       targetimg.classList.add('presets__image--active')
//     }
//   }

  

  return  {
    init: initialize
  };

})(window);

Tablinks.init();