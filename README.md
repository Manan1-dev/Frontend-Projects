# Frontend Projects

A collection of small frontend projects I’m building while practicing HTML, CSS, and JavaScript.  
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
-   Start button with disabled state during the game

### 2. Color Changer

**Folder:** `color-changer`  
**Tech:** HTML, CSS, JavaScript (DOM, event delegation)

A simple UI that lets the user change the page background by clicking on color tiles.  
There are two color palettes:

-   **Dark palette** – deep, rich colors (midnight blue, charcoal, burgundy, etc.)
-   **Light palette** – soft, pastel colors (ivory, sky blue, peach, lavender, etc.)

When the user clicks a color:

-   The **`<body>` background color** changes to the selected color.
-   The heading text color automatically switches to **dark or light** for better contrast depending on whether the chosen color is from the dark or light palette.

**Features:**

-   Config-driven color mapping using a `COLORS` object in JavaScript
-   Buttons styled dynamically based on their `data-color-key` attribute
-   Event delegation on the palette wrapper instead of individual listeners
-   Basic responsive layout for smaller screens
