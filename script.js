window.onload = function() {
    const audio = document.getElementById('birthdaySong');
    const playButton = document.getElementById('playButton');

    // Attempt to play the audio automatically
    audio.play().then(() => {
        playButton.style.display = 'none'; // Hide the play button if audio plays
    }).catch(error => {
        console.log('Autoplay failed:', error);
        playButton.style.display = 'block'; // Show button if autoplay fails
    });

    // Add event listener to the button to play audio when clicked
    playButton.addEventListener('click', function() {
        audio.play();
        playButton.style.display = 'none'; // Hide button after playing
    });

    alert('Surprise! Happy Birthday Vishuuu ❤️ !');
};
