window.onload = function() {
    const audio = document.getElementById('birthdaySong');
    const playButton = document.getElementById('playButton');

    audio.play().then(() => {
        console.log('Audio is playing automatically.');
    }).catch(error => {
        console.log('Autoplay failed:', error);
        playButton.style.display = 'block'; // Show button if autoplay fails
    });

    alert('Surprise! Happy Birthday!');
};

function playAudio() {
    const audio = document.getElementById('birthdaySong');
    audio.play().catch(error => {
        console.log('Audio playback failed:', error);
    });
}
