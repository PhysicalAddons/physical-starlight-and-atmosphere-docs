var Navigation = (function (window) {

  function initialize() {
    _onEntryShowLogo()
    var toggleBtn = document.querySelector('.nav-primary__toggle')
    toggleBtn.addEventListener('click', function() {
      var expanded = this.getAttribute('aria-expanded')
      expanded = (expanded === 'false')? false : true; // why Boolean('false') is true?
      this.setAttribute('aria-expanded', !expanded)
      if (expanded) {
        document.body.classList.remove('navigation-active')
      } else {
        document.body.classList.add('navigation-active')
      }

    })
  }

  function _onEntryShowLogo() {
    var nav = document.querySelector('.nav-secondary')
    var logo = document.querySelector('.nav-secondary__logo')
    window.onscroll = function() {
      if(isScrolledTill(nav)) {
        if(!logo.classList.contains('nav-secondary__logo--show')) {
          logo.classList.add('nav-secondary__logo--show')
        }
      } else {
        if(logo.classList.contains('nav-secondary__logo--show')) {
          logo.classList.remove('nav-secondary__logo--show')
        }
      }
    }
  }


  function isScrolledTill(el) {
    var rect = el.getBoundingClientRect();
    return rect.top === 0



    console.log(elemTop, elemBottom)
    // Only completely visible elements return true:
    // var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
    // Partially visible elements return true:
    //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    // return isVisible;
  }

  return {
    init: initialize
  };
})(window);

Navigation.init();

// debounce(function(){
//   console.log('artwork width', artwork.offsetWidth)
//   grid.style.gridAutoRows = artwork.offsetWidth+'px'
// },100)