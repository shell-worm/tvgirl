// Add your YouTube video ID here
var youtubeVideoId = 'https://www.youtube.com/watch?v=wcJY0WDe-H4';

document.getElementById('likeButton').addEventListener('click', function() {
    document.getElementById('videoContainer').innerHTML = '<div id="player"></div>';
    
    // Load YouTube API
    var tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Create YouTube player
    window.onYouTubeIframeAPIReady = function() {
        new YT.Player('player', {
            height: '360',
            width: '640',
            videoId: youtubeVideoId,
            events: {
                'onReady': onPlayerReady,
            },
        });
    };

    // Function to be called when the player is ready
    function onPlayerReady(event) {
        event.target.playVideo();
    }
});
