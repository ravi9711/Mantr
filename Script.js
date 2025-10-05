// 1. शुरुआती सेटिंग्स
let count = 0;
const targetCount = 108;
const audioURL = 'https://files.catbox.moe/d2xp40.mp4'; // आपका दिया गया MP4 लिंक

// 2. HTML एलिमेंट्स को पहचानें
const counterDisplay = document.getElementById('counterDisplay');
const clickButton = document.getElementById('clickButton');
const resetButton = document.getElementById('resetButton'); // रिसेट बटन एलिमेंट

// 3. आवाज़ (Audio) तैयार करें
const successAudio = new Audio(audioURL);

// फंक्शन: काउंट को अपडेट करता है और 108 की जाँच करता है
function updateCounter() {
    counterDisplay.textContent = count;
    
    if (count === targetCount) {
        // अगर 108 हो गया है, तो आवाज़ चलाएँ और बटन डिसेबल करें
        // 'play()' फंक्शन को यूजर इंटरेक्शन के बाद ही कॉल किया जा सकता है, जो यहाँ हो रहा है।
        successAudio.play(); 
        alert("काउंट 108 पर पहुँच गया है! 🎉 \n\nDeveloper: Spark aka Ravi"); 
        clickButton.disabled = true; 
        clickButton.textContent = "लक्ष्य पूरा!";
    }
}

// 4. क्लिक बटन हैंडलर
clickButton.addEventListener('click', () => {
    if (count < targetCount) {
        count++; // काउंट बढ़ाएँ
        updateCounter(); // डिस्प्ले अपडेट करें
    }
});

// 5. रिसेट बटन हैंडलर
resetButton.addEventListener('click', () => {
    // काउंट को 0 पर सेट करें
    count = 0; 
    updateCounter(); // डिस्प्ले अपडेट करें (जो अब 0 दिखाएगा)

    // बटन को वापस सक्षम (enable) करें
    clickButton.disabled = false;
    clickButton.textContent = "क्लिक करें";
    
    // अगर आवाज़ चल रही हो तो उसे रोक दें और शुरुआत में सेट करें (optional)
    successAudio.pause();
    successAudio.currentTime = 0; 
    
    alert("काउंट रिसेट हो गया है।");
});

// शुरुआत में डिस्प्ले सेट करें
updateCounter();
