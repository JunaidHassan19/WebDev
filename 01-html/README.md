# HTML — Web Development Fundamentals

> The skeleton of every webpage — where web development begins.

---

## About

This folder contains practice files and exercises covering **core HTML concepts** — from the very first tag to building complete page structures with tables and forms.

---

## Folder Structure

```
01-html/
│
├── 01_intro/               # What is HTML? First HTML file
├── 02_tags/                # Common HTML tags — h1, p, a, img, etc.
├── 03_block_vs_inline/     # Block-level vs Inline elements
├── 04_structure/           # Structuring a web page semantically
├── 05_tables/              # Creating tables in HTML
└── 06_forms/               # Forms and form input fields
```

---

## Topics Covered

### 1. Introduction to HTML

- What is HTML and why it matters
- Anatomy of an HTML document
- Writing your very first HTML file

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World! 👋</h1>
  </body>
</html>
```

---

### 2. Tags in HTML

Key tags learned and practiced:

| Tag                      | Purpose                        |
| ------------------------ | ------------------------------ |
| `<h1>` – `<h6>`          | Headings (largest to smallest) |
| `<p>`                    | Paragraph                      |
| `<a href="">`            | Hyperlink / Anchor             |
| `<img src="">`           | Images                         |
| `<ul>` / `<ol>` / `<li>` | Unordered & Ordered Lists      |
| `<br>` / `<hr>`          | Line break / Horizontal rule   |
| `<strong>` / `<em>`      | Bold / Italic emphasis         |
| `<span>` / `<div>`       | Inline & block containers      |

---

### 3. Block vs Inline Elements

Understanding how HTML elements behave in the document flow:

- **Block elements** — Take up the full width of their parent (e.g., `<div>`, `<p>`, `<h1>`)
- **Inline elements** — Only take up as much space as their content (e.g., `<span>`, `<a>`, `<img>`)

---

### 4. Structure of a Web Page

Semantic HTML for meaningful page layouts:

```html
<header>
  <!-- Site header / navbar -->
  <nav>
    <!-- Navigation links -->
    <main>
      <!-- Main content area -->
      <section>
        <!-- A section of content -->
        <article>
          <!-- Independent piece of content -->
          <aside>
            <!-- Sidebar content -->
            <footer><!-- Footer of the page --></footer>
          </aside>
        </article>
      </section>
    </main>
  </nav>
</header>
```

---

### 5. Tables in HTML

Creating structured data using HTML tables:

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Junaid</td>
      <td>20</td>
    </tr>
  </tbody>
</table>
```

Key attributes: `colspan`, `rowspan`, `border`

---

### 6. Forms in HTML

Building interactive forms to collect user input:

```html
<form action="/submit" method="POST">
  <input type="text" placeholder="Name" />
  <input type="email" placeholder="Email" />
  <input type="password" placeholder="Password" />
  <input type="number" placeholder="Age" />
  <textarea></textarea>
  <select>
    <option>Option 1</option>
  </select>
  <input type="checkbox" /> Remember me <input type="radio" /> Male
  <button type="submit">Submit</button>
</form>
```

---

## Tech Used

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

---

## Author

**Junaid Hassan**

- 🐙 GitHub: [@JunaidHassan19](https://github.com/JunaidHassan19)
