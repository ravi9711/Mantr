// 1. Core Configuration
let count = 0;
const targetCount = 108;
const audioURL = 'https://files.catbox.moe/d2xp40.mp4'; 
// Audio is set to null, so the browser doesn't block it on page load
let successAudio = null; 

// 2. Element References
const counterDisplay = document.getElementById('counterDisplay');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton');

// Function to update the display and check for the target count
function updateCounter() {
    counterDisplay.textContent = count;
    
    // Check if the target is hit
    if (count === targetCount) {
        
        // **ERROR FIX:** Initialize audio ONLY when 108 is reached
        if (!successAudio) {
            successAudio = new Audio(audioURL);
        }
        
        // This 'play()' attempt is allowed because it happens immediately after user interaction (the click that reached 108)
        successAudio.play().catch(error => {
            // Handle any potential promise errors
            console.error("Audio play failed:", error);
        }); 
        
        alert(`Target Count of ${targetCount} Reached! 🎉\n\nDeveloper: Spark aka Ravi`); 
        clickButton.disabled = true; 
        clickButton.textContent = "Target Reached!";
    }
}

// 3. Click Button Handler
clickButton.addEventListener('click', () => {
    // Logic is independent of audio loading, ensuring the number increases immediately
    if (count < targetCount) {
        count++;
        updateCounter();
    }
});

// 4. Reset Button Handler
resetButton.addEventListener('click', () => {
    count = 0; 
    updateCounter();

    clickButton.disabled = false;
    clickButton.textContent = "Click to Increment";
    
    // Stop and reset the audio if it was playing
    if (successAudio) {
        successAudio.pause();
        successAudio.currentTime = 0; 
    }
    
    alert("Count has been reset to 0.");
});

// Initialize the display on page load
updateCounter();
