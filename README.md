# 📄 Piyush Sharma - Digital Resume

A professional, interactive, and responsive digital resume application built with Modern Web Technologies. This project serves as a dynamic portfolio showcasing skills, experience, and projects with a printable layout.

![Status](https://img.shields.io/badge/Status-Active-success)
![Tech](https://img.shields.io/badge/Built%20With-React%20%2B%20Vite-61DAFB)

## ✨ Features

- **Responsive Design**: Adapts seamlessly to all screen sizes.
- **Dark Mode**: Built-in theme toggler for light and dark visual preferences.
- **Print Friendly**: Optimized CSS for printing the resume directly from the browser.
- **Scroll Animations**: Smooth reveal animations for a premium user experience.
- **Dynamic Content**: Data-driven components for easy updates.

## 🛠️ Tech Stack

- **Core**: [React](https://react.dev/) (v19)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: Modern CSS3, TailwindCSS
- **Animations**: Custom ScrollReveal using Intersection Observer API

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd piyush-resume
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Architecture & Flow

The application follows a streamlined component-based architecture. Below is the flow of data and structure of the application.

### Component Flow Diagram

```mermaid
graph TD
    %% Styling Definitions
    classDef core fill:#61DAFB,stroke:#333,stroke-width:2px,color:#000;
    classDef component fill:#e1f5fe,stroke:#0288d1,stroke-width:1px,color:#000;
    classDef logic fill:#e8f5e9,stroke:#388e3c,stroke-width:1px,color:#000;
    classDef ui fill:#fff3e0,stroke:#f57c00,stroke-width:1px,color:#000;

    User((User / Browser)) -->|Request| Index[index.html]
    Index -->|Load Script| Main[main.jsx]
    Main -->|Mount| App[App.jsx]:::core

    subgraph "State Management"
        App -- "useState" --> ThemeState[Dark Mode State]:::logic
    end

    subgraph "UI Composition"
        App --> Header[Header / Hero Section]:::ui
        App --> LayoutContainer[Main Container]:::component

        subgraph "Sidebar (Left)"
            LayoutContainer --> Sidebar[Aside Column]:::component
            Sidebar --> SkillIcons[Tech Icons Grid]:::ui
            Sidebar --> PersonalBars[Personal Skills Bars]:::ui
            Sidebar --> Contact[Contact Information]:::ui
        end

        subgraph "Content (Right)"
            LayoutContainer --> MainCol[Main Column]:::component
            MainCol --> ExperienceList[Experience Section]:::ui
            MainCol --> ProjectsList[Projects Section]:::ui
            MainCol --> ServicesList[Services Section]:::ui
        end

        App --> Footer[Footer]:::ui
    end

    subgraph "Shared Components"
        ScrollReveal[ScrollReveal.jsx]:::logic
    end

    ExperienceList -.->|Wrap| ScrollReveal
    ProjectsList -.->|Wrap| ScrollReveal
```

## 📂 Project Structure

```bash
piyush-resume/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/
│   │   └── ScrollReveal.jsx  # Animation wrapper component
│   ├── App.css          # Main styling and theme variables
│   ├── App.jsx          # Root component containing all resume sections
│   ├── index.css        # Global CSS resets
│   └── main.jsx         # React application entry point
├── index.html           # HTML template
├── package.json         # Project manifests and scripts
└── vite.config.js       # Tooling configuration
```

## 🎨 UI Elements Breakdown

- **Theme Toggle**: Switch between Light/Dark modes.
- **Skill Meters**: Visual representation of proficiency levels.
- **Timeline Cards**: For Experience and Projects (wrapped in animation).
- **Contact Action**: Print button and clickable contact links.

---
© 2024 Piyush Sharma
