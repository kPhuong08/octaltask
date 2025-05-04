# **OctalTask – Task Management Application**

A modern, responsive task management application built with **React** and **TypeScript**, designed to enhance productivity, support team collaboration, and deliver a seamless user experience.

![OctalTask Dashboard](https://via.placeholder.com/800x400?text=OctalTask+Dashboard)

## 📋 Table of Contents

- [Features](#-key-features)
- [Project Structure](#-project-structure-overview)
- [Technology Stack](#-technology-stack)
- [Getting Started](#-getting-started)
- [Usage Guide](#-usage-guide)
- [Component Architecture](#-component-architecture)
- [Development Guidelines](#-development-guidelines)
- [Styling Guidelines](#-styling-guidelines)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

## 🚀 Technology Stack

- **Frontend**: React 19, TypeScript
- **Styling**: TailwindCSS 4.x
- **UI Components**: Radix UI
- **Routing**: React Router 6.x
- **Form Handling**: React Hook Form with Zod validation
- **State Management**: React Context API
- **Animations**: Framer Motion
- **HTTP Client**: Axios
- **Date Handling**: date-fns
- **Icons**: Lucide React
- **Build Tool**: Vite

## ✅ Key Features

### Task Management

- Create, edit, delete, and organize tasks into custom lists
- Add metadata: due dates, subtasks, notes
- Sort tasks by date or name
- Mark tasks as complete/incomplete

### Collaboration & Teamwork

- **Sharing**: Share tasks/lists with team members
- **Access Control**: Assign viewer, editor, or admin roles
- **Commenting**: Add real-time comments on tasks
- **Comment System**:
  - Ask and answer task-related questions
  - Filter by question status (all, answered, unanswered)

### User Experience

- Fully responsive UI for all screen sizes
- Support for both dark and light themes
- Drag-and-drop interface for task prioritization
- Real-time updates for shared tasks

## 📁 Project Structure Overview

```
src/
├── assets/              # Static assets (images, fonts, icons)
│   ├── icons/           # SVG icons and related components
│   └── images/          # Visual assets used across the app
│
├── components/          # UI and functional components
│   ├── common/          # Reusable, shared components (e.g., Logo, ThemeToggle)
│   ├── layout/          # Structural layout elements (e.g., sidebar, navbar)
│   ├── feature/         # Feature-specific components (tasks, users, lists)
│   └── ui/              # Design system primitives (e.g., Button, Card)
│
├── contexts/            # React context providers for state sharing
│   ├── TaskContext.tsx
│   ├── ThemeContext.tsx
│   └── UserContext.tsx
│
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and helper logic
├── pages/               # Route-based pages (Dashboard, Login, etc.)
├── services/            # API interaction logic
├── styles/              # Application-wide and theme-specific styling
│   ├── themes/          # Dark and light mode styles
│   ├── base.css         # Base global styles
│   └── task-layout.css  # Layout-specific styles for task views
└── types/               # Global TypeScript types and interfaces
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/octaltask.git
cd octaltask

# Install project dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build
```

### Environment Setup

Create a `.env` file in the root directory with the following variables:

```
VITE_API_URL=your_api_url
```

## 👥 Usage Guide

### Sharing a Task or List

1. Open a task and click **"Share"**
2. Invite teammates via email and assign permissions:
   - **Viewer**: Read-only access
   - **Editor**: Can update task content and comments
   - **Admin**: Full access including sharing rights
3. Manage collaborators directly from the task view

### Using the Comment Feature

1. Navigate to the **Comment** session within a click away
2. Submit a new question or answer existing ones

## 🧩 Component Architecture

- **Common Components**: Shared UI elements across the application, designed for reusability.
- **Layout Components**: Define the structural framework of the interface (e.g., sidebar, header).
- **Feature Components**: Grouped by domain (e.g., Task, User, List) and tailored to their respective functionalities.
- **UI Components**: Atomic components that form the design system (e.g., buttons, inputs, modals).

## 🛠️ Development Guidelines

### 1. Component Design

- Build small, single-purpose components.
- Extract shared logic/components to `common/` or `ui/`.
- Maintain proper hierarchy and file organization.

### 2. Naming Conventions

- **Components**: `PascalCase` (e.g., `TaskList.tsx`)
- **Hooks/Utils**: `camelCase` (e.g., `useTaskState.ts`)
- **CSS files**: `kebab-case` (e.g., `task-layout.css`)

### 3. Code Quality

- Enforce type safety with **TypeScript**.
- Use **ESLint** and **Prettier** for consistent formatting.
- Document complex logic for maintainability.

## 🎨 Styling Guidelines

- **Base Styles**: Foundational CSS applied throughout the app.
- **Theme Styles**: Separate stylesheets for dark and light themes.
- **Feature Styles**: Specific styles tied to domain features when required.
- **Tailwind**: Utilize Tailwind utilities for consistent styling.

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## 🙏 Acknowledgments

- UI inspired by best-in-class task management tools
- Icons sourced from [Lucide Icons](https://lucide.dev)
- Built with [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)

---
