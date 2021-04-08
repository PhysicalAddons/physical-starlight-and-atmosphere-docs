var Gallery = (function (window) {

  function initialize() {
    var artwork = document.querySelector('.gallery__artwork:not(.gallery__artwork--wide)')
    var grid = document.querySelector('.gallery__grid')
    var readjustArtworkHeight = debounce(function(){
      console.log('artwork width', artwork.offsetWidth)
      grid.style.gridAutoRows = artwork.offsetWidth+'px'
    },100)
    readjustArtworkHeight()

    window.onresize = function(event) {
      readjustArtworkHeight()
    };
  }

  return {
    init: initialize
  };
})(window);

Gallery.init();

