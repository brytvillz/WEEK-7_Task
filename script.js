/*
What is the difference between .innerHTML and .innerText?

.innerHTML: Gets or sets the HTML content inside an element, including HTML tags.
Example: element.innerHTML = "<b>Bold text</b>" will make the text bold.

.innerText: Gets or sets only the text content, ignoring HTML tags.
Example: element.innerText = "<b>Bold text</b>" will display the literal text "<b>Bold text</b>".
*/

function setupStyles() {
  const style = document.createElement("style");
  style.textContent = `

.header {
    position: relative;
    top: 0;
   
    padding: 15px 0;
    text-align: center;
    
    margin-bottom: 30px;
    z-index: 1000;
}
.header h1 {
    margin: 0;
    font-size: 2.5rem;
    color: black;
    transition: all 0.5s ease;
}

body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    transition: background-color 0.5s, color 0.5s;
    position: relative;
}

.stars-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0;
    transition: opacity 1s ease;
    pointer-events: none;
    z-index: -1;
}

.star {
    position: absolute;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
    animation: twinkle 3s infinite;
}

.star:nth-child(odd) {
    animation-delay: 1s;
}

.star:nth-child(3n) {
    animation-delay: 2s;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes twinkle {
    0%, 100% { opacity: 0.3; }
    50% { opacity: 1; }
}
}
    }
        .container {
    max-width: 800px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
    .card {
    background: rgba(255, 255, 255, 0.9); /* Nice light white */
    padding: 25px;
    border-radius: 15px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}
    @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}
    .sky-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 999;
}
    .sun {
    position: absolute;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle, #ffd700 0%, #ff8c00 70%, #ff4500 100%);
    border-radius: 50%;
    box-shadow: 0 0 30px #ffd700, 0 0 60px #ff8c00;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.8s ease;
}

.sun::before {
    content: '';
    position: absolute;
    width: 120%;
    height: 120%;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    top: -10%;
    left: -10%;
    animation: pulse 2s infinite;
}
.moon {
    position: absolute;
    width: 120px;
    height: 120px;
    background: radial-gradient(circle at 30% 30%, #f5f5dc 0%, #dcdcdc 50%, #c0c0c0 100%);
    border-radius: 50%;
    box-shadow: 0 0 20px rgba(245, 245, 220, 0.5), inset -10px -10px 0 rgba(192, 192, 192, 0.3);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.8s ease;
    overflow: hidden;
}

.moon::before {
    content: '';
    position: absolute;
    top: -5px;
    left: 35px;
    width: 90px;
    height: 90px;
    background: radial-gradient(ellipse at center, #0a1428 0%, #0f1419 70%, transparent 100%);
    border-radius: 50%;
    box-shadow: inset 15px 0 30px rgba(0, 0, 0, 0.8);
}
    @keyframes sunRise {
    0% { 
        top: 50%; 
        left: 50%; 
        opacity: 0; 
    }
    50% { 
        opacity: 1; 
    }
    100% { 
        top: 10%; 
        left: 90%; 
        opacity: 1; 
    }
}
    @keyframes moonRise {
    0% { 
        top: 50%; 
        left: 50%; 
        opacity: 0; 
    }
    50% { 
        opacity: 1; 
    }
    100% { 
        top: 10%; 
        left: 10%; 
        opacity: 1; 
    }
}
    button {
    padding: 12px 24px;
    border: none;
    border-radius: 25px;
    background: linear-gradient(45deg, #989ba4ff, #9588a2ff);
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    animation: float 3s ease-in-out infinite;
}



button:active {
    transform: translateY(-1px);
}
    #moodBox {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
    background-size: 400% 400%;
    border-radius: 20px;
    margin: 20px auto;
    border: 3px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    animation: gradientShift 4s ease infinite;
    position: relative;
    cursor: pointer;
}

#moodBox:hover {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
input[type="text"] {
    padding: 15px 20px;
    border: none;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;
    margin-bottom: 15px;
}

input[type="text"]:focus {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
    background: rgba(255, 255, 255, 1);
}

@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 0 10px;
    }
    
    .card {
        padding: 20px;
    }
    
    .header h1 {
        font-size: 2rem;
    }
    
    button {
        padding: 10px 20px;
        font-size: 14px;
    }
    
    #moodBox {
        width: 80px;
        height: 80px;
    }
    
    .sun, .moon {
        width: 90px;
        height: 90px;
    }
}

.button-group {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-wrap: wrap;
}

#secretMessage {
    margin-top: 15px;
    padding: 20px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.2));
    border-radius: 15px;
    border: 2px solid rgba(255, 255, 255, 0.3);
    animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
`;

  document.head.appendChild(style);
}

setupStyles();

// I Made my day mode set when the page loads (START)
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const sun = document.getElementById("sun");

  body.style.background =
    "linear-gradient(135deg, #eaf6fcff 0%, #e2fdd4ff 50%, #fdfdc4ff 100%)";
  body.style.color = "black";

  const buttons = document.querySelectorAll("button");
  buttons.forEach(function (button) {
    button.style.color = "black";
    button.style.background = "linear-gradient(45deg, #e3f2fd, #f3e5f5)";
  });

  // Show sun immediately
  sun.style.animation = "sunRise 1.5s ease-out forwards";
}); //(END)

// Greeting feature (START)
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");

nameInput.addEventListener("input", function () {
  const userName = nameInput.value;

  if (userName === "") {
    greeting.innerText = "Hello, friend!";

    if (isDarkMode) {
      greeting.style.color = "white";
    } else {
      greeting.style.color = "black";
    }
    greeting.style.fontWeight = "normal";
  } else {
    greeting.innerText = "Hello, " + userName + "!";
    greeting.style.color = "green";
    greeting.style.fontWeight = "bold";
  }
}); // Greeting feature (END)

// MY MOOD BOX FEATURE (START)
const moodBox = document.getElementById("moodBox");
const growBtn = document.getElementById("growBtn");
const shrinkBtn = document.getElementById("shrinkBtn");

// Variable to track current size
let currentSize = 100;

growBtn.addEventListener("click", function () {
  currentSize += 20; //increase on each click by 20px
  moodBox.style.width = currentSize + "px";
  moodBox.style.height = currentSize + "px";
});

shrinkBtn.addEventListener("click", function () {
  if (currentSize > 20) {
    currentSize -= 20; // it will decrease also by 20 each click
    moodBox.style.width = currentSize + "px";
    moodBox.style.height = currentSize + "px";
  }
}); // (END)

//DAY/NIGHT MODE FEATURE (START)
const toggleBtn = document.getElementById("toggleMode");
const body = document.body;

// Variable to track current mode
let isDarkMode = false;

// Get sun and moon elements
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const starsContainer = document.getElementById("starsContainer");
// (END)

// Function to create stars (my idea not AI)
function createStars() {
  starsContainer.innerHTML = ""; // Clear existing stars
  const numberOfStars = 150;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random position
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    // Random size (1-3px)
    const size = Math.random() * 2 + 1;
    star.style.width = size + "px";
    star.style.height = size + "px";

    // Random animation delay
    star.style.animationDelay = Math.random() * 3 + "s";

    starsContainer.appendChild(star);
  }
} // (END)

// Collect all cards to change their appearance during day/night (START)
const cards = document.querySelectorAll(".card");

toggleBtn.addEventListener("click", function () {
  const headerTitle = document.querySelector(".header h1");

  if (isDarkMode) {
    // Switch to Day Mode - Show Sun
    body.style.background =
      "linear-gradient(135deg, #eaf6fcff 0%, #e2fdd4ff 50%, #fdfdc4ff 100%)";
    body.style.color = "black";

    // Set header to black for day mode
    headerTitle.style.background = "none";
    headerTitle.style.webkitBackgroundClip = "unset";
    headerTitle.style.webkitTextFillColor = "black";
    headerTitle.style.color = "black";
    headerTitle.style.animation = "none";

    // Update greeting color for day mode
    const greeting = document.getElementById("greeting");
    const nameInput = document.getElementById("nameInput");
    if (nameInput.value === "") {
      greeting.style.color = "black"; // Hello, friend! in black for day
    } else {
      greeting.style.color = "green"; // Hello, [name]! stays green
    }

    // Hide stars
    starsContainer.style.opacity = "0";

    // Make cards light for day mode
    cards.forEach(function (card) {
      card.style.background = "rgba(255, 255, 255, 0.9)";
    });

    // Change button text color to black for day mode
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
      button.style.color = "black";
      button.style.background = "linear-gradient(45deg, #e3f2fd, #f3e5f5)";
    });

    // Hide moon and show sun with animation
    moon.style.animation = "none";
    moon.style.opacity = "0";
    sun.style.animation = "sunRise 1.5s ease-out forwards";

    isDarkMode = false;

    //this part handles what happens when i toggle to night mode
  } else {
    // Switch to Night Mode - Show Moon
    body.style.background =
      "radial-gradient(ellipse at top, #0a1428 0%, #0f1419 50%, #000000 100%)";
    body.style.color = "white";

    // Set header to rainbow gradient for night mode
    headerTitle.style.background =
      "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #764ba2)";
    headerTitle.style.backgroundSize = "400% 400%";
    headerTitle.style.webkitBackgroundClip = "text";
    headerTitle.style.webkitTextFillColor = "transparent";
    headerTitle.style.backgroundClip = "text";
    headerTitle.style.animation = "gradientShift 4s ease infinite";

    // Update greeting color for night mode
    const greeting = document.getElementById("greeting");
    const nameInput = document.getElementById("nameInput");
    if (nameInput.value === "") {
      greeting.style.color = "white"; // Hello, friend! in white for night
    } else {
      greeting.style.color = "green"; // Hello, [name]! stays green for visibility
    }

    // Show stars and create them
    createStars();
    starsContainer.style.opacity = "1";

    // Make cards dark for night mode
    cards.forEach(function (card) {
      card.style.background = "rgba(0, 0, 0, 0.7)";
    });

    // Change button text color to white for night mode
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
      button.style.color = "white";
      button.style.background = "linear-gradient(45deg, #2c2c2dff, #503175ff)";
    }); // Card collection (END)

    // Hide sun and show moon with animation (my idea)
    sun.style.animation = "none";
    sun.style.opacity = "0";
    moon.style.animation = "moonRise 1.5s ease-out forwards";

    isDarkMode = true;
  }
}); // (END)

// SECRET MESSAGE FEATURE (START)
const secretBtn = document.getElementById("secretBtn");
const secretMessage = document.getElementById("secretMessage");

// Variable to track if message is visible
let isMessageVisible = false;

secretBtn.addEventListener("click", function () {
  if (isMessageVisible) {
    // Hide the message
    secretMessage.style.display = "none";
    secretBtn.innerText = "Show Secret";
    isMessageVisible = false;
  } else {
    // Show the secret
    secretMessage.style.display = "block";
    secretBtn.innerText = "Hide Secret";
    isMessageVisible = true;
  }
}); // (END)

//NOTE: please, i did not copy and paste from AI, i would appreciate if u view my work and see how they look on your browser.
// i love being creative while sticking to the task guidlines. i can prove it, i can litterally explain every single piece of codes here.
// i archived all my ideas with previous & recent studies and practices. and also my co-pilot was helpful in  breaking down and explaining things i dont understand. Thank you.
