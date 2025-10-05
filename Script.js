// 1. Core Configuration
let count = 0;
const targetCount = 108;
// Use the provided MP4 link for the success sound
const audioURL = 'https://files.catbox.moe/d2xp40.mp4'; 

// 2. Element References
const counterDisplay = document.getElementById('counterDisplay');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');
const successAudio = new Audio(audioURL);

// Function to update the display and check for the target count
function updateCounter() {
    counterDisplay.textContent = count;
    
    // Check if the target is hit
    if (count === targetCount) {
        // Play audio only if it's not already playing (to prevent multiple alerts/sounds)
        if (successAudio.paused) { 
            successAudio.play().catch(error => {
                // Catch potential 'play() failed' error if browser blocks auto-play
                console.error("Audio play failed, may require user interaction:", error);
            }); 
            alert(`Target Count of ${targetCount} Reached! 🎉\n\nDeveloper: Spark aka Ravi`); 
            clickButton.disabled = true; 
            clickButton.textContent = "Target Reached!";
        }
    }
}

// 3. Click Button Handler
clickButton.addEventListener('click', () => {
    // Only increment if the target hasn't been reached
    if (count < targetCount) {
        count++;
        updateCounter();
    }
});

// 4. Reset Button Handler
resetButton.addEventListener('click', () => {
    // Reset the count and update the display
    count = 0; 
    updateCounter();

    // Re-enable the click button
    clickButton.disabled = false;
    clickButton.textContent = "Click to Increment";
    
    // Stop and reset the audio if it was playing
    successAudio.pause();
    successAudio.currentTime = 0; 
    
    // Use the professional alert style
    alert("Count has been reset to 0.");
});

// Initialize the display on page load
updateCounter();
