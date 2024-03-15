// script.js

function loadVideo() {
    // Replace 'wcJY0WDe-H4' with your actual YouTube video ID
    var youtubeVideoId = 'wYyZ3_s662U';

    // Create YouTube player
    var player = new YT.Player('videoContainer', {
        height: '360',
        width: '640',
        videoId: youtubeVideoId,
        events: {
            'onReady': onPlayerReady,
        },
    });

    // Function to be called when the player is ready
    function onPlayerReady(event) {
        event.target.playVideo();
    }
}

document.getElementById('likeButton').addEventListener('click', function() {
    // Check if the YouTube API is loaded
    if (typeof YT !== 'undefined' && typeof YT.Player !== 'undefined') {
        loadVideo();
    } else {
        // If not loaded, wait for a while and then try again
        setTimeout(loadVideo, 1000);
    }
});
