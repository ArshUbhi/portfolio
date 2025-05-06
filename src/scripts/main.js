document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('hero-video'); // Ensure the video has this ID
    if (video) {
        let isReversing = false;

        // Function to toggle playback direction
        function togglePlaybackDirection() {
            if (!isReversing) {
                video.playbackRate = 1; // Play forward
                video.play();
            } else {
                video.playbackRate = -1; // Play backward
                video.play();
            }
        }

        // Listen for time updates to reverse direction
        video.addEventListener('timeupdate', () => {
            if (!isReversing && video.currentTime >= video.duration - 0.1) {
                isReversing = true; // Switch to reverse
                togglePlaybackDirection();
            } else if (isReversing && video.currentTime <= 0.1) {
                isReversing = false; // Switch to forward
                togglePlaybackDirection();
            }
        });

        // Start the video in forward mode
        video.playbackRate = 1;
        video.play();
    }
});