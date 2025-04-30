# OctalTask - Web to manage your work
![Repo Size](https://img.shields.io/github/repo-size/jiraops/octaltask)
![Last Commit](https://img.shields.io/github/last-commit/jiraops/octaltask)
![Open Issues](https://img.shields.io/github/issues/jiraops/octaltask)

![React](https://img.shields.io/badge/React-19.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-6.2.6-blueviolet)
![ESLint](https://img.shields.io/badge/ESLint-9.21.0-yellowgreen)
![TypeScript](https://img.shields.io/badge/TailwindCSS-5.7.2-red)


OctalTask is a website to help user manage their work conveniently and intuitily

# Feature

## 1. User Authentication

- **Login, Sign Up, Password Recovery**: User can create an account, login and reset password
- **Email Verification**: Verify email using a One-Time Password (OTP) for enhanced security.

## 2. Main Page 

### Sidebar: Display user information and quick access to different categorized tasks

- **User information**: Display username, email and settings icon

- **Your task**: Your personal tasks
  - *Task today*: Lists tasks scheduled for today.
  - *Important task*:  Shows tasks marked as important.
  - *Planned task*:  Shows tasks have date due and scheduled for the future.
  - *Assigned task*: Team tasks delegated to or assigned by others.
  - *All task*: All task lists you have

- **Team task**: Show all your team and tasks in the team

### Main Content: Display the tasks
- Display the tasks you have in each categories, which are incompleted and completed.
- Each task shows its name, due date, task list and mark that it is important or not.

### Task's Content: Display the details of the selected task
- Include task list category, checkbox add to "Task today" and fields for remind, due date and note

## 3. About Task
- Ticking and unticking the task to change the state of the task 

### Personal Task:
- Create, delete and edit your task list 
  - Add, delete and edit the tasks in task list
  - Change the task list in a task

### Team Task:
- Add, delete and edit role of members in your team
- Create, delete and edit your team task list
  - Create, delete and edit the tasks
  - Assign the tasks to team members

## Related Projects

OCtalTask consists of multiple services. Here are the related repositories:

- [OctalTask Front-End (this repo)](https://github.com/jiraops/octaltask.git): The web-based user interface, built with React, TypeScript and Vite.
- [OctalTask Backend API (this repo)](https://github.com/jiraops/octaltask-api.git): This is a NestJS microservices architecture project using gRPC for communication between services. It follows a modular, scalable design pattern where each service is self-contained and communicates through protocol buffers.


These services work together to provide a seamless experience for users.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn (package manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jiraops/octaltask.git
   cd octaltask
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open the app in your browser:
   ```
   http://localhost:5173
   ```
