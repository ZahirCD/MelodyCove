playlist = document.querySelectorAll('audio');
playButton = document.getElementById('playButton');
nextButton = document.getElementById('nextButton');
previousButton = document.getElementById('previousButton');

let trackNumber = 0;

playButton.addEventListener('click', function() {
   currentSong = playlist[trackNumber];

    if (currentSong.paused || currentSong.ended) {
        playAudio(currentSong);
    } else {
        pauseAudio(currentSong);
    }
});

nextButton.addEventListener('click', function () {
    pauseAudio(audio);
trackNumber = trackNumber + 1 % trackNumber.length;
const currentSong = playlist[trackNumber];
    playAudio(audio);
});

lastButton.addEventListener('click', function () {
    pauseAudio(audio);
    trackNumber = trackNumber + 1 % trackNumber.length;
    const currentSong = playlist[trackNumber];
    playAudio(audio);
});

function playAudio(audio) {
    audio.play();
    playButton.textContent = 'Pause';
}
function pauseAudio(audio) {
    audio.pause();
    playButton.textContent = 'Play';
}
playlist.addEventListener('ended', function () {
    playButton.textContent = 'Play';
});
