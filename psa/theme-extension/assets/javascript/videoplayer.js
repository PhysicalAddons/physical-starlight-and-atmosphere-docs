var VideoPlayer = (function (window) {
  
    function initialize() {
      // videos = document.querySelectorAll(".videoplayer video");
      // overlays = document.querySelectorAll(".videoplayer .videoplayer__overlay");
      // videos.forEach(function (video) {
      //   video.addEventListener("click", function(){ _pause(video) });
      // });
      // overlays.forEach(function (overlay) {
      //   console.log(overlay);
      //   video = overlay.previousElementSibling;
      //   overlay.addEventListener("click", function(){ _play(video) });
      // });
    }

    function _play(video) {
      if (video.paused) {
        parent = video.parentElement;
        parent.classList.remove('videoplayer--paused')
        video.play();
      }
    }

    function _pause(video) {
      if (!video.paused) {
        parent = video.parentElement;
        parent.classList.add('videoplayer--paused')
        video.pause();
      }
    }

    return {
      init: initialize
    };
})(window);
  
  VideoPlayer.init();
  
  



// const constructions = document.querySelectorAll('.animate');
// function handleIntersection(entries) {
//   entries.map((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('animated')
//       observer.unobserve(entry.target);
//     }
//   });
// }

// const observer = new IntersectionObserver(handleIntersection);
// constructions.forEach(construction => observer.observe(construction));