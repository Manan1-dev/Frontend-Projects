# Frontend Projects

A collection of small frontend projects I’m building while practicing **HTML**, **CSS**, and **JavaScript**.  
Each project lives in its own folder inside this repository.

---

## 📁 Projects

### 1. Whack-a-Mole

**Folder:** `whack-a-mole`  
**Tech:** HTML, CSS, JavaScript (DOM, events, timers)

A simple game where a “mole” (emoji) appears in random holes on a 3×3 grid.  
You have limited time to click the mole and score as many points as possible.

**Features:**

-   Random mole movement across nine holes
-   Countdown timer
-   Score tracking
-   Start button with disabled state during gameplay

---

### 2. Color Changer

**Folder:** `color-changer`  
**Tech:** HTML, CSS, JavaScript (DOM, event delegation)

A simple UI that lets the user change the page background by clicking on color tiles.  
It includes both **dark** and **light** palettes, and text color adjusts automatically for contrast.

**Features:**

-   Config-driven color mapping using a `COLORS` object
-   Buttons styled dynamically with `data-color-key`
-   Event delegation on the wrapper
-   Responsive layout for small screens

---

### 3. Key Matcher

**Folder:** `key-matcher`  
**Tech:** HTML, CSS, JavaScript (DOM events, randomization)

A mini reflex game: a random alphabet is displayed on screen, and you must press the matching key on your keyboard.  
Correct key flashes **green**, incorrect key flashes **red**.

**Features:**

-   Random letter generation (A–Z)
-   Real-time key matching
-   Visual feedback on success/failure
-   Smooth background color transition

---

### 4. Guess a Number

**Folder:** `guess-number`  
**Tech:** HTML, CSS, JavaScript (forms, DOM manipulation)

A number guessing game where the computer picks a number between **1–100** and you have **10 tries** to guess it.

**Features:**

-   Input validation and feedback messages
-   Countdown of remaining tries
-   Reset button after win/loss
-   Dynamic feedback for high/low guesses

---

### 5. Roll Dice Game

**Folder:** `roll-dice-game`  
**Tech:** HTML, CSS, JavaScript (randomization, UI interaction)

Two players roll virtual dice — the higher number wins.  
Buttons disable after rolling to prevent re-rolls until reset.

**Features:**

-   Random dice rolls for both players
-   Simple win/tie message display
-   Button disable logic to lock turns

**Future Improvements:**

-   Add reset button
-   Animated dice rolls
-   Round tracking and score persistence

---

## 🧠 Lessons Learned

-   DOM manipulation and event listeners are powerful but can get messy — small helpers and modular thinking go a long way.
-   Consistency in naming (`camelCase` for JS, `kebab-case` for CSS classes) improves readability.
-   Avoid “magic values” — declare constants for reusability.
-   Always validate input and handle edge cases before processing logic.

---

## ⚙️ Tech Stack

-   **HTML5**
-   **CSS3 (Flexbox, Grid)**
-   **Vanilla JavaScript (DOM, Events, Timers)**
-   No frameworks — pure practice for mastering the fundamentals.

---

## 🚀 How to Run

Clone the repo, then open any project folder and launch `index.html` in your browser.

```bash
git clone https://github.com/<your-username>/frontend-projects.git
cd frontend-projects
```
