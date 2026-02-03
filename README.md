# Gabro Portfolio

A data-driven, minimalist portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). Designed for speed, SEO, and visual elegance.

## 🚀 Getting Started

To run this project locally, you need [Node.js](https://nodejs.org/) installed.

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Start the development server**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## 📂 Project Structure

A quick look at the file organization:

```
src/
├── components/          # Reusable UI components
│   └── hero.astro       # Landing page hero
│   └── project-list.astro
│   └── resume-hero.astro # Resume hero section
│   └── skill-grid.astro  # Skills icon grid
├── content/
│   ├── projects/        # Your projects (MDX files)
│   └── config.ts        # Content schemas (Zod)
├── data/
│   ├── site.config.ts   # Global site settings (title, links)
│   ├── skills.ts        # Skill definitions & icons
│   └── cv.ts            # Resume data (experience, education)
├── layouts/             # Page layouts (BaseLayout)
└── pages/               # Route definitions
    ├── index.astro      # Home page
    ├── resume.astro     # Resume page
    └── projects/        # Project detail pages
```

## ✍️ How to Edit Content

### 1. Resume (`/resume`)
All resume data is strictly typed and separated from the code.
-   **Edit File**: `src/data/cv.ts`
-   **What you can change**:
    -   `experiences`: Array of work history (bullet points support).
    -   `education`: Degrees and universities.
    -   `projects`: Highlighted projects shown on resume.
    -   `skills`: Categories and skill names (matched against icons).

### 2. Skills & Icons
-   **Edit File**: `src/data/skills.ts`
-   **How it works**: This file contains the "database" of all known skills and their icon URLs. The resume simply references names from this list.

### 3. Projects (`/projects/[slug]`)
Projects are managed as **Content Collections**.

-   **Add New Project**: Create a new `.mdx` file in `src/content/projects/`.
-   **Naming Convention**: Use kebab-case for filenames (e.g., `my-project-name.mdx`).
-   **Standard Structure**: To maintain a high-quality portfolio, structure your MDX files as follows:

    1.  **Frontmatter**:
        ```yaml
        ---
        title: "Project Name"
        date: "YYYY-MM-DD"
        description: "Compelling one-liner about the project."
        technologies: ["Tech A", "Tech B"]
        img: "../../assets/img/project-cover.png"
        ---
        ```

    2.  **Introduction**: A visible H1 (`# Title`) and a brief hook.
    3.  **The Problem / The Challenge**: Context on *why* this project exists. What pain point does it solve?
    4.  **The Solution / Core Functionalities**: *What* did you build? Break it down into features.
    5.  **My Contribution**: Specific areas you owned (Engineering, Design, Leadership). Critical for team projects.
    6.  **Technical Challenges & Learnings**: Deep dive into "hard" engineering problems and soft skills gained.
    7.  **Impact / Results**: Metrics (e.g., "30% faster"), awards, or user feedback.
    8.  **Links**: Repositories, Live Demos, or Publications.

### 4. Global Settings
-   **Edit File**: `src/data/site.config.ts`
-   **What you can change**: Site title, description, footer social links, and main navigation entries.

## 🎨 Tech Stack
-   **Framework**: Astro 5.0
-   **Styling**: Tailwind CSS
-   **Content**: MDX (Markdown + JSX)
-   **Type Safety**: TypeScript & Zod
