# Timers Demo - JavaScript

A simple web-based demo showcasing **JavaScript timers** (`setInterval` and `setTimeout`) with buttons to start, stop, and cancel messages.

---

## Features

- **Countdown Timer**  
  - Starts from 10 and decreases every second.
  - Displays `"Time's up!"` when it reaches 0.

- **Stop Countdown**  
  - Manually stop the countdown at any time using the **Stop Countdown** button.

- **One-Time Message**  
  - Shows an alert `"Halfway there! 5 seconds passed."` after 5 seconds of starting the countdown.

- **Cancel One-Time Message**  
  - Cancel the 5-second alert before it appears using the **Cancel Message** button.

---

## How it Works

### Timers Used:

1. **`setInterval`**  
   - Used to decrease the countdown every 1 second.
   - Cleared using `clearInterval(intervalId)` when countdown ends or manually stopped.

2. **`setTimeout`**  
   - Used to display a one-time alert after 5 seconds.
   - Can be canceled using `clearTimeout(messageTimeoutId)`.

---

### Code Explanation:

```javascript
let countdownElement = document.getElementById("countdown");
let intervalId;        // stores setInterval ID
let messageTimeoutId;  // stores setTimeout ID

document.getElementById("startBtn").addEventListener("click", () => {
  let count = 10;
  countdownElement.textContent = count;

  intervalId = setInterval(() => {
    count--;
    countdownElement.textContent = count;
    if(count <= 0){
      clearInterval(intervalId);
      countdownElement.textContent = "Time's up!";
    }
  }, 1000);

  messageTimeoutId = setTimeout(() => {
    alert("Halfway there! 5 seconds passed.");
  }, 5000);
});

document.getElementById("stopBtn").addEventListener("click", () => {
  clearInterval(intervalId);
  countdownElement.textContent = "Countdown stopped!";
});

document.getElementById("cancelMessageBtn").addEventListener("click", () => {
  clearTimeout(messageTimeoutId);
  alert("Halfway message canceled!");
});
