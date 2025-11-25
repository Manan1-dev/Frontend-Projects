# Advanced Frontend Project (Vanilla JS + HTML + CSS)

This document outlines **4 front-end projects** you can build **before starting backend**, each with:

-   Clear **feature requirements**
-   Suggested **phases** (to grow complexity step by step)
-   **Data structures** and technical notes
-   Suggested **file structure**
-   **UI / UX design** guidelines: layout, color palette, typography, and component behavior

You can treat this file as your **master plan**.

---

## 1️⃣ Advanced Todo App – “FocusTasks”

A real productivity-style app, not just a basic list.

### 1.1. Goal

Build a **task management app** with categories, priorities, due dates, filtering, and persistence via `localStorage`.

---

### 1.2. Core Features (MVP)

#### Phase 1 – Simple but solid

-   Add a new todo with:
    -   `title` (required)
-   Show todos in a list with:
    -   Checkbox to mark **completed / not completed**
    -   Delete button
-   Filter: **All / Active / Completed**
-   Show task stats
-   Persist everything in `localStorage`.

**Data shape:**

```js
{
  id: "uuid",
  title: "Buy groceries",
  description: "",
  isCompleted: false,
  createdAt: 1730201395264
}
```

---

### 1.3. Advanced Features

#### Phase 2 – Real-world complexity

**Extend each todo with:**

-   description (multi-line optional)
-   dueDate (date input)
-   priority ("low" | "medium" | "high")
-   category ("Work" | "Personal" | "Study" | "Other" etc.)

**New features:**

-   Filter panel:

    -   By category
    -   By priority
    -   Quick filters: Due Today, Overdue

-   Sorting:

    -   Sort by dueDate (soonest → latest)
    -   Sort by priority (high → low)
    -   Sort by createdAt (newest → oldest)

-   Search:
    -   Search bar that filters by title text (case-insensitive substring).

**Updated Data shape:**

```js
{
  id: "uuid-or-timestamp",
  title: "Finalize project report",
  description: "Send PDF to client by evening.",
  isCompleted: false,
  createdAt: 1730201395264,
  dueDate: "2025-11-30", // ISO string from <input type="date">
  priority: "high",
  category: "Work"
}
```

---

### 1.4. UX & Behavior

#### Phase 3 – UX polish

-   Inline editing
    -   Click on a todo title to turn it into an `<input>` for editing.
    -   Press `Enter` to save; `Esc` to cancel.
-   Delete confirmation modal
    -   Show a small modal / confirm box: "Are you sure you want to delete this task?".
-   Keyboard shortcuts
    -   `Enter` in the “add todo” input → submit.
    -   `Esc` in modals or editing mode → close/cancel.
-   Empty states:
    -   No todos at all:
        > "You have no tasks yet. Add your first task to get started &#128077;"
    -   Filter results empty:
        > "No tasks match your current filters."

---

### 1.5. Technical Notes

-   **Core state:** an array `todos` in memory.
-   `renderTodos(todos)` re-renders the list based on current filters + search.
-   Separate modules (optional but recommended):
    -   `storage.js` - read/write from `localStorage`.
    -   `filters.js` - filter + search functions.
    -   `ui.js` - DOM rendering functions.
    -   `app.js` - glue everything together (event listeners + state).

---

### 1.6. UI / UX Design

**Layout**

-   **Desktop:**

    -   Sidebar on the left:

        -   App name/logo
        -   Filter controls (category, priority, quick filters)

    -   Main content on the right:
        -   New task form at the top
        -   Task list below
        -   Footer bar: total tasks, remaining tasks

-   **Mobile:**
    -   Filters in a collapsible panel at the top (e.g. a “Filters” button).
    -   Task list below.

**Color Palette (Calm Productivity)**

-   Background: #0f172a (dark navy)
-   Card / todo background: #1e293b
-   Accent (buttons, highlights): #38bdf8 (sky blue)
-   Secondary accent: #f97316 (orange for high priority)
-   Text primary: #e5e7eb (light gray)
-   Text secondary: #9ca3af (muted gray)
-   Completed todo text: #6b7280 + line-through

**Typography**

-   Base font: system stack `font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;`
-   Titles (e.g. “FocusTasks”): 1.8rem, bold
-   Todo title: 1rem, medium
-   Small meta text (due date / category): 0.8rem, medium/regular

**Components**

-   **Buttons:**

    -   Rounded corners (`border-radius: 9999px `for pill style)
    -   Hover: slightly lighter background or subtle shadow.

-   **Inputs:**
    -   Full-width text input with subtle border.
    -   `:focus` state with blue outline (`outline-color: #38bdf8`).

---

## 2️⃣ Weather Dashboard – “SkyScope”

A multi-city, multi-day weather dashboard using public APIs

### 2.1. Goal

Build a weather app that feels like a **tiny weather website**, not just “enter city → show temp once”.

---

### 2.2. Core Features (MVP)

#### Phase 1 – Single city search

-   Search input for **city name** and Search button.
-   On submit:

    -   Show loading state: `"Fetching weather..."`.
    -   Fetch current weather data from a free API (e.g. OpenWeather, weatherapi, etc.).
    -   On success, show:
        -   City name
        -   Temperature
        -   Weather condition (text)
        -   Icon
        -   Humidity, wind speed, feels-like temperature
    -   On error (invalid city, network error):
        -   Show a clear error message.

-   Search city
-   Show:
    -   Temp
    -   Icon
    -   Humidity
    -   Wind
    -   Feels-like
-   Loading state
-   Error state

---

### 2.3. Advanced Features

#### Phase 2 – Forecast & units

-   `5-day forecast` section:

    -   Cards for each day:
        -   Day name (Mon, Tue…)
        -   Min/max temp
        -   Icon

-   **Unit toggle:**
    -   °C / °F switch:
        -   Either refetch data with different units
        -   Or convert from °C to °F in JS: `F = C \* 9/5 + 32`

#### Phase 3 – Favorites, history, and geolocation

-   **Favorite cities:**

    -   Heart icon to “pin” a city.
    -   A “Favorites” bar with pinned city cards; clicking a card reloads that city’s weather.
    -   Stored in `localStorage`.

-   **Recent searches:**

    -   Show last 3–5 searched cities.
    -   Click to re-run search.

-   **Geo button** (optional):
    -   “Use my location” button uses `navigator.geolocation.getCurrentPosition`.
    -   Fetch weather based on coordinates.

---

### 2.4. Technical Notes

-   Separate your modules:

    -   `api.js` – all fetch calls & API URLs.
    -   `state.js` – current city, unit, favorites, recent searches.
    -   `ui.js` – rendering current weather, forecast, lists.
    -   `storage.js` – localStorage logic.

-   Handle states clearly:
    -   `loading`: show spinner / loading text.
    -   `error`: show error message in a dedicated error box area.
    -   `data`: show weather UI.
    -   `empty`: before any search, show instructions.

---

### 2.5. UI / UX Design

**Layout**

-   Top header:

    -   App title (“SkyScope”)
    -   Unit toggle (°C | °F)

-   Main area:
    -   Left/top: search bar + favorites & recent searches.
    -   Right/main: current weather card + 5-day forecast row.

**Color Palette (Weather-inspired)**

-   Background: gradient from #0f172a (navy) to #1e293b.
-   Primary accent: #38bdf8 (sky blue)
-   Secondary accent: #facc15 (sunny yellow)
-   Cards background: #020617 with subtle border #1e293b
-   Text primary: #f9fafb
-   Error text: #f97373 (soft red)

**Typography**

-   Title: 2rem, bold.
-   Section headings (“Current Weather”, “5 Day Forecast”): 1.2rem, semi-bold.
-   Body text: 0.95rem.
-   Use same system font stack as Todo app for consistency.

**Components**

-   **Search bar:**

    -   Wide input, small search icon inside or next to it.
    -   Rounded corners.

-   **Weather card:**

    -   City name + country.
    -   Big temperature text (e.g. `3rem`).
    -   Icon on the side.

-   Forecast cards:
    -   Small card per day, equal width, horizontally scrollable on mobile.

---

## 3️⃣ Inventory Viewer – “Cottman Inventory Explorer”

Use this to simulate a **front-end inventory browser** for your dealership.

### 3.1. Goal

Build a UI that displays a list of vehicles from a static JSON file and **offers real filtering & sorting**, plus a details view and some basic analytics.

---

### 3.2. Data

Create a file `cars.json` in `public` or `root` (where you can fetch it):

```json
[
    {
        "id": "C001",
        "year": 2020,
        "make": "Toyota",
        "model": "Camry SE",
        "price": 19995,
        "miles": 45231,
        "body": "Sedan",
        "drivetrain": "FWD",
        "fuel": "Gasoline",
        "color": "White",
        "stock": "STK123",
        "transmission": "Automatic",
        "cityMpg": 28,
        "highwayMpg": 38
    }
    // ...more
]
```

---

### 3.3. Core Features (MVP)

#### Phase 1 – List and search

-   Load data from `cars.json` using `fetch`.
-   Render vehicle cards in a grid.
-   Each card shows:
    -   Year, Make, Model
    -   Price
    -   Miles
    -   Body / Drivetrain label
-   Search bar:
    -   Search by `make` or `model` (e.g. typing “toy” shows Toyota).

---

### 3.4. Advanced Features

#### Phase 2 – Filters & sorting

-   Sidebar filters:

    -   `Make` (multi-select or dropdown)
    -   `Body` (e.g. SUV, Sedan, Coupe)
    -   `Fuel` type
    -   `Price range` (min and max inputs)
    -   `Max miles` input

-   Sort dropdown:
    -   Price: Low → High / High → Low
    -   Miles: Low → High
    -   Year: Newest → Oldest

#### Phase 3 – Details & saved list

-   Click a card:

    -   Open a modal with full details:
        -   All specs, maybe a placeholder image, payment estimate (you can calculate with some formula).

-   “Save” or “Heart” button:
    -   Adds vehicle to a “Saved vehicles” list.
    -   Saved list is shown in a separate tab or panel.
    -   Saved vehicles are persisted in localStorage.

#### Phase 4 – Stats / Insights

-   At the top or side, show:

    -   “Total vehicles: X”
    -   “Average price (filtered): $Y”
    -   “Average mileage (filtered): Z miles”

-   (Use Array.reduce for these.)

---

### 3.5. Technical Notes

-   Modules:

    -   `data.js` – load `cars.json`.
    -   `filters.js` – apply filters & sorting.
    -   `ui-list.js` – render list of cards.
    -   `ui-details.js` – modal rendering.
    -   `storage.js` – saved vehicles in localStorage.

-   Keep a `state` object:

    ```js
    {
    allCars: [],
    filteredCars: [],
    filters: { ... },
    sortBy: "price-asc",
    savedIds: []
    }
    ```

---

### 3.6. UI / UX Design

**Layout**

-   **Desktop:**

    -   Left sidebar (20–25% width):

        -   Filters
        -   Sort box
        -   Saved vehicles quick link

    -   Right main (75–80% width):
        -   Stats bar at the top
        -   Vehicle cards grid below

-   **Mobile:**
    -   Collapsible filter panel
    -   Cards full width

**Color Palette (Auto dealership vibes)**

-   Background: #0b1120 (dark navy)
-   Card background: #020617
-   Accent: #22c55e (green) for price / call-to-action
-   Secondary accent: #3b82f6 (blue) for filters and options
-   Borders: #1f2937
-   Text:
    -   Main: #f9fafb
    -   Muted: #9ca3af

**Typography**

-   App title: `2rem`, bold (`"Cottman Inventory Explorer"`).
-   Card title (Year Make Model): `1rem–1.1rem`, semi-bold.
-   Stats numbers: large, bold.
-   Same system font stack as other apps.

**Components**

-   **Card:**

    -   Hover: slight shadow + scale up `transform: translateY(-2px);`
    -   Footer: price in green, miles in muted text.

-   **Modal:**
    -   Centered, dark background, border radius.
    -   Close button `(X)` at top right.

---

## 4️⃣ Game Hub – “Playground”

A single page that hosts multiple mini-games you’ve already built.

### 4.1. Goal

Combine your mini-games into one cohesive `Game Hub SPA`, focusing on `view switching`, `state separation`, and `shared UI`.

---

### 4.2. Core Features (MVP)

#### Phase 1 – Views and navigation

-   One page with sections:

    -   `#home-view`
    -   `#guess-number-view`
    -   `#rock-paper-scissors-view`
    -   `#whack-a-mole-view`
    -   `#key-matcher-view` (etc.)

-   A top navigation bar:

    -   Logo / title
    -   Game links as buttons

-   Clicking a game:
    -   Hides current view
    -   Shows that game’s view (using JS to toggle `.hidden` class)

---

### 4.3. Advanced Features

#### Phase 2 – Per-game high scores

-   For each game, track:
    -   High score or win count (e.g. best number of guesses, max whack-a-mole score, etc.)
-   Store scores in localStorage as:

    ```js
    {
    gameStats: {
    guessNumber: { bestTries: 3, gamesPlayed: 10 },
    whackAMole: { highScore: 27, gamesPlayed: 8 },
    // ...
    }
    }
    ```

-   Show stats in each game’s view + maybe also a global “Stats” section on the home screen.

#### Phase 3 – Profile & theming

-   Simple “Profile” panel:

    -   Enter a nickname
    -   Save in `localStorage`.
    -   Display “Welcome, [name]” in the header.

-   Theme toggle:
    -   Light theme / Dark theme button.
    -   Save current theme in `localStorage`.
    -   Apply `data-theme` on `body` and use CSS variables for colors.

---

### 4.4. Technical Notes

-   One global app.js to manage:
    -   Navigation / view switching.
    -   Loading / saving `gameStats` and `profile`.
    -   Passing stats logic into individual game modules.
-   Split each game into its own JS module so your main file doesn’t explode.

---

### 4.5. UI / UX Design

**Layout**

-   Sticky top nav:

    -   Left: logo + app name (“Playground”)
    -   Right: game links (Home, Guess Number, RPS, Whack-a-Mole, etc.) + theme toggle

-   Content area:
    -   Only one game/section visible at a time.

**Color Palette (Playful but clean)**

-   Dark theme:

    -   Background: #020617
    -   Card/section background: #0f172a
    -   Accent: #f97316 (orange) + #22c55e (green)
    -   Text: #f9fafb

-   Light theme:
    -   Background: #f9fafb
    -   Card background: #e5e7eb
    -   Accent: same orange/green
    -   Text: #020617

Implement both using CSS variables:

```css
:root[data-theme="dark"] {
    --bg: #020617;
    --card: #0f172a;
    --text: #f9fafb;
}
:root[data-theme="light"] {
    --bg: #f9fafb;
    --card: #e5e7eb;
    --text: #020617;
}
```

**Typography**

-   Title: `2rem` bold.
-   Nav links: `0.9rem–1rem`, uppercase or semi-bold.
-   Game headings: `1.5rem`.

---

# Suggested File Structure Pattern (for all projects)

For each project, you can follow a similar pattern:

```bash
project-name/
  index.html
  style.css
  /js
    app.js        # main entry
    ui.js         # DOM rendering
    state.js      # in-memory state
    storage.js    # localStorage wrapper
    api.js        # (if project uses APIs)
    helpers.js    # small utils
  /data
    cars.json     # for inventory app, etc.

```

This keeps everything modular and scalable, and prepares your brain nicely for backend and then React later.

---

# How to Use This Roadmap

-   Pick one project at a time.
-   Implement `Phase 1` first → push to `GitHub`.
-   Then move to `Phase 2`, commit again.
-   By the time you finish all phases for 2–3 of these, your `vanilla JS + DOM skills will be rock-solid`, and you’ll be perfectly ready for backend.

**_Happy building 👨‍💻_**
