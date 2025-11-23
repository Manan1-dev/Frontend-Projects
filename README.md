# 🧩 Vanilla JavaScript Mini Projects

A collection of **8 beginner-friendly frontend projects** built using **HTML**, **CSS**, and **Vanilla JavaScript**.  
Each project focuses on DOM manipulation, user interaction, accessibility, and clean UI design.

---

## 📋 Projects Overview

1. **BMI Calculator** – Calculate Body Mass Index from weight and height, with a BMI classification table.
2. **Color Changer** – Change the page background by clicking color tiles, with automatic text contrast adjustment.
3. **Digital Clock** – Live digital clock showing time, date, and day of the week.
4. **Guess Number** – Number guessing game with limited tries and feedback (too high / too low).
5. **Key Matcher** – Keyboard reflex game: press the key that matches the random letter shown.
6. **Rock-Paper-Scissors** – Classic game versus the computer with result display.
7. **Roll Dice Game** – Two-player dice roll with winner detection.
8. **Whack-a-Mole** – Timed clicking game where moles appear randomly in a 3×3 grid.
9. **Calculator** - A fully modular, vanilla JavaScript calculator built without using `eval()`.

---

## 🧮 1. BMI Calculator

A simple Body Mass Index calculator that lets users enter their weight and height to compute their BMI and check their health classification.

### 🚀 Features

-   Input for **weight (kg)** and **height (cm)**
-   Calculates BMI and displays result to two decimal places
-   Static BMI classification chart
-   Clean, responsive card layout
-   Accessible design with ARIA attributes

### 🧩 Tech Stack

-   **HTML5**
-   **Tailwind CSS**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 01. bmi-calculator
open index.html
```

---

## 🎨 2. Color Changer

An interactive web app that changes the background color based on the tile you click. The text color adjusts automatically for visibility.

### 🚀 Features

-   Multiple color palettes (dark & light)
-   Dynamic background updates
-   Auto text contrast switching
-   Event delegation for efficiency
-   Accessible buttons with `aria-label`

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 02. color-changer
open index.html
```

---

## 🕒 3. Digital Clock

A live digital clock displaying the current time, AM/PM indicator, date, and weekday.

### 🚀 Features

-   Real-time updates every second
-   12-hour format with AM/PM
-   Displays date and day
-   Centered, minimal layout
-   Easy to read and responsive

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 03. digital-clock
open index.html
```

---

## 🔢 4. Guess Number

A fun number-guessing game where players have 10 tries to guess a randomly generated number between 0 and 100.

### 🚀 Features

-   Random number generation
-   Validates range (0–100)
-   Feedback on each guess (Too high / Too low)
-   Shows remaining tries and previous guesses
-   Dynamic reset button
-   Accessible alerts with `aria-live="polite"`

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 04. guess-number
open index.html
```

---

## ⌨️ 5. Key Matcher

A typing reflex game that shows a random letter — the player must press the matching key on their keyboard.

### 🚀 Features

-   Random letter generation (A–Z)
-   Detects and validates keyboard input
-   Background flashes green/red for feedback
-   Ignores non-letter keys
-   Clean circular UI

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 05. key-matcher
open index.html
```

---

## ✊📄✂️ 6. Rock Paper Scissors

Play the classic Rock–Paper–Scissors game against the computer.

### 🚀 Features

-   User and computer choices displayed
-   Random computer selection
-   Displays winner or tie result
-   Automatically resets after each round
-   Modern dark theme with emojis

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 06. rock-paper-scissor
open index.html
```

---

## 🎲 7. Roll Dice Game

A two-player dice game. Each player rolls once; the higher number wins.

### 🚀 Features

-   Random dice roll (1–6) for each player
-   Displays roll results and declares winner
-   Handles ties properly
-   Disables buttons after rolling
-   Simple, responsive UI

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 07. roll-dice-game
open index.html
```

---

## 🕹️ 8. Whack-a-Mole

A timed clicking game where moles (emojis) appear randomly in a 3×3 grid. Players click them to score before time runs out.

### 🚀 Features

-   3×3 grid with random mole spawns
-   30-second timer
-   Live score tracking
-   Start button disabled during gameplay
-   Visual effects for active holes
-   Responsive grid design

### 🧩 Tech Stack

-   **HTML5**
-   **CSS3**
-   **Vanilla JavaScript (ES6)**

### ⚙️ How to Run

```bash
cd 08. whack-a-mole
open index.html
```

---

## 📟 9. Modular JavaScript Calculator

A **fully modular, vanilla JavaScript calculator** built without using `eval()`.
This calculator separates **UI, input validation, arithmetic operations, and evaluation** into ES Modules for clean, maintainable, and scalable code.

---

## 🚀 Features

-   Basic arithmetic: `+`, `-`, `*`, `/`, `%`
-   Multi-digit and decimal numbers
-   AC (All Clear) and DEL (Delete last digit)
-   Fully modular architecture with ES Modules
-   Clean UI with grid layout
-   Input validation for operators and numbers
-   Safe arithmetic evaluation without `eval()`

---

### 📁 Project Structure

````
calculator/
│
├── index.html
├── style.css
├── app.js                    ← Main Controller
├── modules/
│   ├── arithmetic-operations.js   ← Arithmetic functions (+, -, *, /, %)
│   ├── validators.js             ← Input validation and checks
│   ├── display.js                ← Updates screen display
│   ├── grouper.js                ← Groups numbers and operators
│   └── evaluator.js              ← Calculates final result

---

---

## 🧠 How It Works

### 1️⃣ HTML & CSS
- `index.html` defines the **display** and **calculator buttons**.
- `style.css` provides a modern dark UI with hover and active effects.
- The layout uses **CSS Grid** for buttons and a responsive display.

---

### 2️⃣ Modular JS Design

#### a) app.js
- Handles all **button click events**
- Stores raw input keys in an array
- Calls **validators**, **grouper**, **display updater**, and **evaluator**

#### b) validators.js
- Checks if a key is a **number** or **operator**
- Checks if a key is a **special key** (`AC`, `DEL`, `=`)
- Ensures **input is valid**, e.g., no consecutive operators

#### c) arithmetic-operations.js
- Performs basic math operations:
```js
addition(a, b), subtract(a, b), multiply(a, b), division(a, b), percentage(a, b)
````

#### d) grouper.js

-   Converts raw key entries like `['1','2','+','3']` → grouped tokens `['12','+','3']`
-   Handles **multi-digit numbers** and **decimals**

#### e) evaluator.js

-   Processes grouped tokens
-   Computes final result safely **without eval()**
-   Returns the numeric result for display

#### f) display.js

-   Updates the calculator screen (`#display`)
-   Handles AC, DEL, and normal key appending

---

### 3️⃣ Example Flow

User clicks:

```
1 → 2 → + → 3 → =
```

Processing:

1. **app.js** collects entries → `['1', '2', '+', '3']`
2. **grouper.js** combines digits → `['12', '+', '3']`
3. **evaluator.js** computes → `12 + 3 = 15`
4. **display.js** updates screen → shows `15`

---

## 🖥️ How to Run

1. Make sure your project files are structured as shown above.
2. Open `index.html` in any modern browser.
3. Or run via **VS Code Live Server** for instant reloads.
4. Make sure the `<script>` tag uses `type="module"`:

```html
<script type="module" src="app.js"></script>
```

## 🗂️ Projects Structure

```

.
├── 01. bmi-calculator/
├── 02. color-changer/
├── 03. digital-clock/
├── 04. guess-number/
├── 05. key-matcher/
├── 06. rock-paper-scissors/
├── 07. roll-dice-game/
└── 08. whack-a-mole/
└── 09. calculator/

```

---

## 🧠 Author

**Abdul Manan**
Web Developer | JavaScript Enthusiast
📧 mananabdul3142@gmail.com

```

```
