function playPauseVideo() {
    console.log('calling playPauseVideo')
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                // video.pause();
                                // console.log('- pausing video')
                            } else if (video.paused) {
                                video.play();
                                // console.log('+ playing video')
                            }
                        });
                    },
                    { threshold: 0.1 }
                );
                observer.observe(video);
            });
        }
    });
}

window.onload = function(event) {
    playPauseVideo()
};