var VideoPlayer = (function (window) {
  
    function initialize(videoID, setActiveFn) {
      var video = document.getElementById(videoID)
      var controls = document.querySelectorAll('[data-video="#'+videoID+'"]')
      var checkpoints = []
      controls.forEach(function (link, index) {
        var set = []
        set[0] = parseInt(link.getAttribute("data-skip-to"));
        set[1] = link
        checkpoints[index] = set
      });

      // watch time and update tablinks
      video.addEventListener("timeupdate", function () {
        var video = this
        checkpoints.forEach(function(checkpoint, index) {
          if (checkpoint[0] === Math.round(video.currentTime)){
            // console.log('on point', Math.round(video.currentTime), checkpoint[0]) // set active
            setActiveFn(checkpoint[1])
          } else if (Math.round(video.currentTime) > checkpoint[0]){
            if (index+1 in checkpoints) { // is there a next checkpoint?
              var nextCheckpoint = checkpoints[index+1]
              if (Math.round(video.currentTime) < nextCheckpoint[0]) {
                // console.log('between checkpoints', checkpoint[0], nextCheckpoint[0])
                setActiveFn(checkpoint[1])
              }
            } else {
              // console.log('last checkpoint', checkpoint[0])
              setActiveFn(checkpoint[1])
            }
          }
        })
      }, false);

      // on tab click - set video time.
      controls.forEach(function(link) {
        link.addEventListener("click", function () {
          video.currentTime = parseInt(link.getAttribute("data-skip-to"))
          video.play()
        })
      })

    }

    return {
      init: initialize
    };
})(window);
  
VideoPlayer.init('how-it-works', Tablinks.setTabActive);
  
