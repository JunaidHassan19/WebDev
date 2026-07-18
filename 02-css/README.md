<div align="center">

  <!-- Animated Header Banner -->
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:264DE4,50:2965F1,100:264DE4&height=200&section=header&text=CSS%20Styling&fontSize=50&fontColor=ffffff&fontAlignY=35&desc=Bringing%20Webpages%20to%20Life%20with%20Style&descAlignY=55&descSize=18&animation=scaleIn" alt="CSS Banner" />

  <!-- CSS3 Badge -->
  <img src="https://img.shields.io/badge/CSS3-264DE4?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Parts-1%20to%206-blue?style=for-the-badge" alt="Parts 1 to 6" />
  <img src="https://img.shields.io/badge/Status-Completed-brightgreen?style=for-the-badge" alt="Completed" />
  <img src="https://img.shields.io/badge/Files-70+-orange?style=for-the-badge" alt="70+ Files" />

<br><br>

  <!-- Quote -->
  <blockquote>
    <p><i>"HTML gave my pages a skeleton. CSS is where I gave them a personality."</i></p>
  </blockquote>

</div>

---

## 📑 Table of Contents

- [📖 Overview](#-overview)
- [📁 Folder Structure](#-folder-structure)
- [🎯 Topics Covered](#-topics-covered)
  - [Part 1: CSS Basics](#part-1-css-basics)
  - [Part 2: Selectors, Cascade & Inheritance](#part-2-selectors-cascade--inheritance)
  - [Part 3: Box Model & Units](#part-3-box-model--units)
  - [Part 4: Backgrounds, Effects & Transforms](#part-4-backgrounds-effects--transforms)
  - [Part 5: Flexbox](#part-5-flexbox)
  - [Part 6: Grid, Animations & Responsive Design](#part-6-grid-animations--responsive-design)
- [🚀 Quick Start](#-quick-start)
- [📋 All CSS Properties Reference](#-all-css-properties-reference)
- [✨ Practice Projects](#-practice-projects)
- [🔧 Tools Used](#-tools-used)
- [📚 Resources](#-resources)
- [📈 Learning Path](#-learning-path)
- [💡 Key Takeaways](#-key-takeaways)
- [👤 Author](#-author)

---

## 📖 Overview

This folder contains my complete **CSS learning journey** — from my very first `color: blue;` declaration to building responsive layouts with Flexbox and Grid. CSS (Cascading Style Sheets) is what turns plain HTML structure into a visually engaging, well-organized webpage, and this section covers everything from the basics to modern layout systems.

### What You'll Find Here

| Category      | Details                                                  |
| ------------- | --------------------------------------------------------- |
| **Parts**     | 6 progressive learning stages                              |
| **Files**     | 70+ hands-on CSS/HTML practice files                       |
| **Projects**  | Card hover effect, loader animation, image gallery mini project |
| **Topics**    | Selectors, box model, flexbox, grid, animations, responsive design |

---

## 📁 Folder Structure

```
02-css/
│
├── 📂 1 CSS - Part 1/               → CSS basics & fundamentals
│   ├── 📝 01-whatIsCSS.txt          → What is CSS & how it works
│   ├── 📝 02-basicCSSformat.txt     → Selector + declaration syntax
│   ├── 03-includingCSS.css         → Linking CSS to HTML
│   ├── 04-styles.css               → Color property
│   ├── 05-styles.css               → Background color
│   ├── 06-styles.css               → Color systems (HEX, RGB, HSL)
│   ├── 07-styles.css               → Text alignment
│   ├── 08-styles.css               → Font weight
│   ├── 09-style.css                → Line height
│   ├── 📝 10-unitsInCSS.txt         → Absolute vs relative units
│   ├── 11-styles.css               → Font family
│   ├── practiceQs.css              → Practice questions
│   └── 📂 html/                    → Linked HTML files for each topic
│
├── 📂 CSS - Part 2/                 → Selectors, cascade & inheritance
│   ├── 📝 Selectors.txt             → Element, class, ID & combinators
│   ├── 📝 cascadingAndSpecificity.txt → Cascade order & specificity rules
│   ├── Practice.css
│   ├── inheritance.css             → Inherited vs non-inherited properties
│   ├── styles.css
│   ├── 📂 html/                     → index, inheritance, practice pages
│   └── 📂 Assignment Qs/            → Selector assignment
│
├── 📂 CSS - part 3/                 → Box model & display
│   ├── 📝 boxModel.txt              → Content, padding, border, margin
│   ├── displayProperty.css         → block, inline, inline-block, none
│   ├── relativeUnits.css           → em, rem, %, vw, vh
│   ├── practiceQs.css
│   ├── styles.css
│   ├── 📂 html/                     → Linked HTML files
│   └── 📂 Assignment Qs/
│
├── 📂 CSS - Part 4/                  → Backgrounds, effects & transforms
│   ├── background.css              → Background image, size, position, repeat
│   ├── alphaOpacity.css            → RGBA/opacity transparency
│   ├── boxShadow.css               → Box & text shadows
│   ├── position.css                → static, relative, absolute, fixed, sticky
│   ├── transform.css               → translate, rotate, scale, skew
│   ├── transitions.css             → Smooth property transitions
│   ├── 📂 images/                   → cat.jpg, cat2.jpg, cat3.jpg
│   ├── 📂 html/                     → Linked HTML files
│   ├── 📂 Mini Projects/            → 🎴 Card hover effect
│   └── 📂 Assignment Qs/
│
├── 📂 CSS - Part 5/                  → Flexbox
│   ├── 📝 flexbox.txt               → Flex container vs items, main/cross axis
│   ├── displayFlex.css             → display: flex basics
│   ├── flexDirection.css           → row, column, row-reverse, column-reverse
│   ├── flexWrap.css                → nowrap, wrap, wrap-reverse
│   ├── flexSizing.css              → flex-grow, flex-shrink, flex-basis
│   ├── justifyContent.css          → Main-axis alignment
│   ├── alignItems.css              → Cross-axis alignment
│   ├── alignSelf.css               → Individual item alignment
│   ├── alignContent.css            → Multi-line alignment
│   ├── 📂 html/                     → Linked HTML files
│   └── 📂 Assignment Qs/
│
└── 📂 CSS - Part 6/                  → Grid, animation & responsive design
    ├── 📝 grid.txt                   → Grid container, tracks, lines, cells
    ├── grid.css                     → display: grid basics
    ├── template.css                 → grid-template-columns/rows
    ├── rows.css                     → grid-template-rows
    ├── columns.css                  → grid-template-columns
    ├── gaps.css                     → row-gap, column-gap
    ├── z-index.css                  → Stacking order
    ├── properties.css               → Grid shorthand properties
    ├── animation.css                → @keyframes & animation property
    ├── mediaQueries.css             → Responsive breakpoints
    ├── 📂 html/                      → Linked HTML files
    ├── 📂 Mini Project/              → 🐾 Cat & Dog image gallery
    └── 📂 Assignment Qs/             → 🔄 Loading spinner

Mini Project - CSS/                 → 🖼️ Standalone image showcase project
├── index.html
├── photo.jpg
└── styles.css
```

---

## 🎯 Topics Covered

---

### Part 1: CSS Basics

> 🌱 _Where the styling begins — syntax, colors, and text_

| #   | Topic                | File                    | Key Learning                              |
| --- | --------------------- | ----------------------- | ------------------------------------------ |
| 1   | **What is CSS**       | `01-whatIsCSS.txt`      | Purpose, cascading, and how CSS works       |
| 2   | **CSS Syntax**        | `02-basicCSSformat.txt` | Selector + declaration block structure      |
| 3   | **Including CSS**     | `03-includingCSS.css`   | Inline, internal & external CSS             |
| 4   | **Color Property**    | `04-styles.css`         | Text color                                  |
| 5   | **Background Color**  | `05-styles.css`         | `background-color` property                 |
| 6   | **Color Systems**     | `06-styles.css`         | HEX, RGB, RGBA, HSL                         |
| 7   | **Text Align**        | `07-styles.css`         | left, right, center, justify                |
| 8   | **Font Weight**       | `08-styles.css`         | normal, bold, numeric weights                |
| 9   | **Line Height**       | `09-style.css`          | Controlling vertical text spacing           |
| 10  | **Units in CSS**      | `10-unitsInCSS.txt`     | Absolute (`px`) vs relative (`em`, `rem`, `%`, `vw`, `vh`) |
| 11  | **Font Family**       | `11-styles.css`         | Font stacks & fallback fonts                |
| 12  | **Practice**          | `practiceQs.html`       | Applying Part 1 concepts                    |

#### Three Ways to Include CSS:

```html
<!-- Inline CSS -->
<p style="color: blue;">Inline styled text</p>

<!-- Internal CSS -->
<head>
  <style>
    p {
      color: blue;
    }
  </style>
</head>

<!-- External CSS (recommended) -->
<head>
  <link rel="stylesheet" href="styles.css" />
</head>
```

---

### Part 2: Selectors, Cascade & Inheritance

> 🎯 _Learning how to target elements and understanding style priority_

| #   | Topic                     | File                             | Key Learning                                |
| --- | -------------------------- | -------------------------------- | --------------------------------------------- |
| 1   | **Selectors**               | `Selectors.txt`                  | Element, class, ID, group & combinator selectors |
| 2   | **Cascade & Specificity**   | `cascadingAndSpecificity.txt`    | Order of priority when rules conflict           |
| 3   | **Inheritance**             | `inheritance.css`                | Which properties inherit from parent elements   |
| 4   | **Practice**                | `Practice.css`, `styles.css`     | Applying selectors in real markup               |
| 5   | **Assignment**              | `Assignment Qs/`                 | Selector-focused exercises                      |

#### Selector Types:

```css
/* Element selector */
p {
  color: blue;
}

/* Class selector */
.intro {
  color: green;
}

/* ID selector */
#header {
  background-color: black;
}

/* Grouped selector */
h1, h2, h3 {
  color: green;
}

/* Descendant combinator */
div p {
  font-style: italic;
}
```

#### The Cascade Order (least → most specific):

```
Browser Defaults → External Stylesheet → Internal Stylesheet → Inline Styles
```

---

### Part 3: Box Model & Units

> 📦 _Understanding how every element is really just a box_

| #   | Topic                | File                     | Key Learning                              |
| --- | ---------------------- | ------------------------ | -------------------------------------------- |
| 1   | **Box Model**          | `boxModel.txt`           | Content, padding, border, margin              |
| 2   | **Display Property**   | `displayProperty.css`    | block, inline, inline-block, none              |
| 3   | **Relative Units**     | `relativeUnits.css`      | `em`, `rem`, `%`, `vw`, `vh` in practice        |
| 4   | **Practice**           | `practiceQs.css`         | Box model exercises                            |
| 5   | **Assignment**         | `Assignment Qs/`         | Box model & display assignment                 |

#### The Box Model (inside → out):

```
┌───────────────────────────────┐
│            MARGIN             │
│  ┌──────────────────────────┐ │
│  │          BORDER          │ │
│  │  ┌────────────────────┐  │ │
│  │  │      PADDING       │  │ │
│  │  │  ┌──────────────┐  │  │ │
│  │  │  │   CONTENT    │  │  │ │
│  │  │  └──────────────┘  │  │ │
│  │  └────────────────────┘  │ │
│  └──────────────────────────┘ │
└───────────────────────────────┘
```

```css
div {
  width: 200px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
  box-sizing: border-box; /* Keeps width/height predictable */
}
```

---

### Part 4: Backgrounds, Effects & Transforms

> ✨ _Adding visual polish — shadows, transparency, positioning, and motion_

| #   | Topic                | File                | Key Learning                                  |
| --- | ---------------------- | -------------------- | ------------------------------------------------ |
| 1   | **Background**         | `background.css`     | `background-image`, `size`, `position`, `repeat`  |
| 2   | **Alpha & Opacity**     | `alphaOpacity.css`   | RGBA and the `opacity` property                   |
| 3   | **Box Shadow**         | `boxShadow.css`      | Drop shadows on boxes and text                    |
| 4   | **Position**            | `position.css`       | static, relative, absolute, fixed, sticky          |
| 5   | **Transform**           | `transform.css`      | translate, rotate, scale, skew                     |
| 6   | **Transitions**         | `transitions.css`    | Animating property changes smoothly                |
| 7   | **Mini Project** 🎴     | `Mini Projects/`     | Card hover effect                                  |
| 8   | **Assignment**          | `Assignment Qs/`     | Effects & transforms exercises                     |

#### Position Values:

| Value        | Behavior                                                   |
| :----------- | :----------------------------------------------------------- |
| `static`     | Default flow, unaffected by top/left/right/bottom              |
| `relative`   | Positioned relative to its normal position                     |
| `absolute`   | Positioned relative to nearest positioned ancestor              |
| `fixed`      | Positioned relative to the viewport (stays on scroll)           |
| `sticky`     | Toggles between relative & fixed based on scroll position        |

#### Card Hover Effect Snippet:

```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
}
```

---

### Part 5: Flexbox

> 📐 _One-dimensional layouts made simple_

| #   | Topic                | File                   | Key Learning                              |
| --- | --------------------- | ----------------------- | -------------------------------------------- |
| 1   | **Flexbox Basics**     | `flexbox.txt`           | Flex container vs flex items, axes           |
| 2   | **Display Flex**       | `displayFlex.css`      | Turning a container into a flex container    |
| 3   | **Flex Direction**     | `flexDirection.css`    | row, column, row-reverse, column-reverse      |
| 4   | **Flex Wrap**          | `flexWrap.css`         | nowrap, wrap, wrap-reverse                    |
| 5   | **Flex Sizing**        | `flexSizing.css`       | flex-grow, flex-shrink, flex-basis            |
| 6   | **Justify Content**    | `justifyContent.css`   | Aligning items along the main axis            |
| 7   | **Align Items**        | `alignItems.css`       | Aligning items along the cross axis           |
| 8   | **Align Self**         | `alignSelf.css`        | Overriding alignment for a single item        |
| 9   | **Align Content**      | `alignContent.css`     | Aligning multiple flex lines                  |
| 10  | **Assignment**         | `Assignment Qs/`       | Flexbox layout exercises                      |

#### Flexbox Cheat Sheet:

```css
.container {
  display: flex;
  flex-direction: row;         /* row | column | row-reverse | column-reverse */
  flex-wrap: wrap;              /* nowrap | wrap | wrap-reverse */
  justify-content: center;      /* main-axis alignment */
  align-items: center;          /* cross-axis alignment */
  gap: 16px;
}

.item {
  flex: 1 1 200px; /* grow | shrink | basis */
}
```

---

### Part 6: Grid, Animations & Responsive Design

> 🧩 _Two-dimensional layouts, motion, and building for every screen size_

| #   | Topic                | File                 | Key Learning                                 |
| --- | --------------------- | ---------------------- | ----------------------------------------------- |
| 1   | **CSS Grid**           | `grid.txt`, `grid.css` | Grid container, tracks, lines, and cells         |
| 2   | **Grid Template**      | `template.css`        | `grid-template-columns` / `grid-template-rows`   |
| 3   | **Rows**               | `rows.css`            | Defining and sizing grid rows                    |
| 4   | **Columns**            | `columns.css`         | Defining and sizing grid columns                  |
| 5   | **Gaps**               | `gaps.css`            | `row-gap`, `column-gap`, `gap`                    |
| 6   | **Z-Index**            | `z-index.css`         | Controlling stacking order                        |
| 7   | **Grid Properties**    | `properties.css`      | Shorthand grid properties                          |
| 8   | **Animations**         | `animation.css`       | `@keyframes` and the `animation` property          |
| 9   | **Media Queries**      | `mediaQueries.css`    | Responsive breakpoints for different screen sizes  |
| 10  | **Mini Project** 🐾    | `Mini Project/`       | Cat & Dog image gallery                            |
| 11  | **Assignment** 🔄      | `Assignment Qs/`      | Loading spinner animation                          |

#### CSS Grid Basics:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
  gap: 16px;
}

.item {
  grid-column: 1 / 3; /* Span from line 1 to line 3 */
}
```

#### Keyframe Animation:

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin 1s linear infinite;
}
```

#### Media Query for Responsive Design:

```css
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    grid-template-columns: 1fr;
  }
}
```

---

## 🚀 Quick Start

Want to see these examples in action? Follow these steps:

### Option 1: Open Directly

1. Download or clone this repository
2. Navigate to any `html/` subfolder
3. Double-click the relevant `.html` file to open it in your browser (each links to its matching `.css` file)

### Option 2: Use Live Server (Recommended)

```bash
# Navigate to the CSS folder
cd "02-css"

# If you have VS Code with Live Server:
# Right-click any HTML file inside an "html/" folder → "Open with Live Server"

# Or use Python's built-in server
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Option 3: Clone the Full Repo

```bash
git clone https://github.com/JunaidHassan19/WebDev.git
cd WebDev/02-css
```

---

## 📋 All CSS Properties Reference

### Text & Font

|      Property      | Description               | Example                          |
| :-----------------: | :------------------------- | :--------------------------------- |
|      `color`        | Text color                 | `color: #333;`                    |
|   `font-family`     | Font stack                 | `font-family: Arial, sans-serif;` |
|    `font-size`      | Text size                  | `font-size: 1.2rem;`              |
|   `font-weight`     | Text boldness               | `font-weight: bold;`              |
|   `line-height`     | Vertical spacing            | `line-height: 1.5;`               |
|    `text-align`     | Horizontal alignment        | `text-align: center;`             |

### Colors & Backgrounds

|        Property        | Description             | Example                                  |
| :----------------------: | :------------------------ | :------------------------------------------ |
|   `background-color`     | Element background color  | `background-color: #f5f5f5;`               |
|   `background-image`     | Image background           | `background-image: url("cat.jpg");`        |
|    `background-size`     | Image scaling              | `background-size: cover;`                  |
|  `background-position`   | Image placement            | `background-position: center;`             |
|         `opacity`        | Transparency (0 to 1)      | `opacity: 0.7;`                            |

### Box Model & Layout

|      Property      | Description                | Example                          |
| :-----------------: | :---------------------------- | :--------------------------------- |
|      `width` / `height` | Element dimensions          | `width: 300px;`                    |
|      `padding`      | Space inside the border       | `padding: 20px;`                   |
|       `margin`      | Space outside the border       | `margin: 10px auto;`               |
|       `border`      | Border shorthand               | `border: 2px solid #000;`          |
|    `box-sizing`     | Include padding/border in size | `box-sizing: border-box;`          |
|     `display`       | Rendering behavior              | `display: flex;`                   |
|     `position`      | Positioning scheme               | `position: absolute;`              |

### Flexbox

|        Property        | Description                    |
| :----------------------: | :--------------------------------- |
|      `display: flex`     | Creates a flex container            |
|     `flex-direction`     | Row or column layout                |
|      `justify-content`   | Main-axis alignment                 |
|       `align-items`      | Cross-axis alignment                |
|       `flex-wrap`        | Allow items to wrap                 |
|         `gap`            | Space between flex items            |

### Grid

|          Property           | Description                       |
| :---------------------------: | :------------------------------------ |
|        `display: grid`        | Creates a grid container                |
|   `grid-template-columns`     | Defines column tracks                    |
|    `grid-template-rows`       | Defines row tracks                       |
|             `gap`             | Space between grid cells                 |
|        `grid-column`          | Item's column placement / span            |
|         `grid-row`            | Item's row placement / span               |

### Effects & Animation

|        Property        | Description                             |
| :----------------------: | :------------------------------------------ |
|      `box-shadow`        | Drop shadow around an element                |
|       `transform`        | translate, rotate, scale, skew                |
|      `transition`        | Smoothly animates property changes            |
|     `@keyframes`         | Defines multi-step animation sequences         |
|      `animation`         | Applies a keyframe animation to an element      |
|        `z-index`         | Controls stacking order of overlapping elements |

### Responsive Design

|      Property / Rule     | Description                                    |
| :--------------------------: | :------------------------------------------------- |
|       `@media`               | Applies styles conditionally based on screen size    |
|   `vw`, `vh` units           | Scale relative to the viewport                        |
|         `%` unit             | Scale relative to the parent element                  |

---

## ✨ Practice Projects

### 🎴 Card Hover Effect (Part 4)

A mini project demonstrating:

- **`box-shadow`** for depth
- **`transform`** for lift and scale on hover
- **`transition`** for smooth animation

> 📁 **File:** `CSS - Part 4/Mini Projects/cardHoverEffect.html`

---

### 🐾 Cat & Dog Image Gallery (Part 6)

A responsive gallery built with:

- **CSS Grid** for the layout
- **Media queries** for responsiveness
- **Images** organized in a dedicated `images/` folder

> 📁 **File:** `CSS - Part 6/Mini Project/index.html`

---

### 🔄 Loading Spinner (Part 6 Assignment)

A CSS-only loading animation demonstrating:

- **`@keyframes`** for the spin sequence
- **`animation`** property for infinite looping
- **`border-radius`** for a circular shape

> 📁 **File:** `CSS - Part 6/Assignment Qs/loader.html`

---

### 🖼️ Mini Project - CSS (Standalone)

A photo showcase page combining:

- **Box model** styling for layout
- **Background & color** properties
- **Custom typography**

> 📁 **File:** `Mini Project - CSS/index.html`

---

## 🔧 Tools Used

<div align="center">

|                                                                 Tool                                                                  | Purpose                |
| :-----------------------------------------------------------------------------------------------------------------------------------: | :--------------------- |
|      <img src="https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white" alt="VS Code" />       | Code Editor            |
|                      <img src="https://img.shields.io/badge/Live_Server-000000?style=flat" alt="Live Server" />                       | Real-time preview      |
| <img src="https://img.shields.io/badge/Chrome_DevTools-4285F4?style=flat&logo=google-chrome&logoColor=white" alt="Chrome DevTools" /> | Debugging & inspection |
|                <img src="https://img.shields.io/badge/CSS3-264DE4?style=flat&logo=css3&logoColor=white" alt="CSS3" />                 | Styling language        |

</div>

---

## 📚 Resources

Here are the resources that helped me learn:

| Resource                    | Description                       |                               Link                                |
| :-------------------------- | :--------------------------------- | :-----------------------------------------------------------------: |
| **Apna College Sigma 11.0** | The primary source of my learning  | [Visit](https://www.apnacollege.in/path-player?courseid=sigma-11) |
| **MDN Web Docs**            | Best resource for web development  |    [Visit](https://developer.mozilla.org/en-US/docs/Web/CSS)     |

---

## 📈 Learning Path

```
HTML Fundamentals ──→ CSS Styling (This Section) ──→ JavaScript Interactivity
     │                        │                                │
     ▼                        ▼                                ▼
  Tags & Elements       Selectors & Cascade                DOM Manipulation
  Attributes            Box Model                          Event Handling
  Semantic HTML         Flexbox & Grid                     APIs & Fetch
  Tables                Responsive Design                  Async/Await
  Forms                 Animations & Transitions           ES6+ Features
  Emmet                 Variables & Functions              Frameworks
```

> 🎯 **Next Step:** Check out the `05-javascript` folder to learn how to make these styled pages interactive!

---

## 💡 Key Takeaways

After completing this section, I can now:

- [x] Write CSS using inline, internal, and external methods
- [x] Understand and apply selectors, cascade, and specificity
- [x] Master the box model and control spacing precisely
- [x] Use absolute and relative units appropriately
- [x] Style backgrounds, shadows, transitions, and transforms
- [x] Build one-dimensional layouts with Flexbox
- [x] Build two-dimensional layouts with CSS Grid
- [x] Create animations using `@keyframes`
- [x] Make layouts responsive with media queries
- [x] Build complete mini projects using pure CSS

---

## 👤 Author

<div align="center">

  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/JunaidHassan19">
          <img src="https://avatars.githubusercontent.com/u/123434178?v=4" width="100" style="border-radius: 50%;" alt="Junaid Hassan"/>
          <br>
          <sub><strong>Junaid Hassan</strong></sub>
        </a>
        <br>
        <sub>🌐 Web Developer in Training</sub>
      </td>
    </tr>
  </table>

  <br>

[![GitHub](https://img.shields.io/badge/GitHub-@JunaidHassan19-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/JunaidHassan19)

<sub>⭐ Star this repository if you find it helpful!</sub>

</div>

---

<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:264DE4,50:2965F1,100:264DE4&height=100&section=footer" alt="Footer Banner" />

<sub><i>Styled with 🎨 and lots of <code>{ }</code></i></sub>

</div>