# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🚀 Post Management System (Mini CRUD App)

A small-scale blog administration application built with React, focusing on full **CRUD (Create, Read, Update, Delete)** functionality for managing blog posts.

This project simulates a backend by using **browser `localStorage`** for data persistence, making it a complete client-side application.

## 🌟 Features

* **Post Management:** Full CRUD operations for blog posts (Create, Read, Update, Delete).
* **Data Persistence:** Posts are stored and retrieved using `localStorage`.
* **Client-side Search & Filter:** Search posts by **title** and filter by **author**.
* **Routing:** Dedicated routes for the list, creation, viewing, and editing of posts using **React Router**.
* **Form Validation:** Client-side form validation with inline error messages on post creation and editing.
* **Responsive UI:** Styled using **[Your Chosen CSS Stack, e.g., Tailwind CSS]** for a clean, mobile-friendly interface.
* **Seed Data:** Pre-loaded with **10 initial posts** for immediate testing.

---

## 🛠️ Tech Stack

* **Frontend:** React (created with **Vite**)
* **Routing:** React Router DOM
* **Styling:** [Your Chosen CSS Stack, e.g., Tailwind CSS / Bootstrap / Custom CSS]
* **State Management:** Component State / Props (Optional: Context API for global state)
* **Data Storage:** `localStorage` (No traditional backend required)
* **Utility:** `uuid` for generating unique post IDs.

---

## ⚙️ Setup and Installation

Follow these steps to get the project running locally.

### Prerequisites
   
* Node.js (LTS version recommended)
*cd post-management
 npm install react-router-dom
 npm install -D tailwindcss postcss autoprefixer
 npx tailwindcss init -p

### Steps

npm create vite@latest post-management --template react

2.  **Install Dependencies:**
    ```bash
    npm install
    

3.  **Run the Development Server:**
    This command runs the app in development mode. Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal) to view it in your browser.
    ```bash
    npm run dev
    

4.  **Testing and Usage:**
    The application will automatically load **10 seed posts** into your browser's `localStorage` on the first run. You can immediately begin:
    * Viewing the list of posts.
    * Using the search and filter functions.
    * Clicking **"New Post"** to create a new entry.
    * Clicking on a post title/card to see the full details.
    * Using the **Edit** and **Delete** buttons on the detail or list view.

---

## 📂 Project Structure

A breakdown of the suggested file structure for clarity and maintainability:

src/
├── api/             # Handles local storage interactions (e.g., localStorageCRUD.js)
├── components/      # Reusable UI elements
│   ├── PostCard.jsx
│   ├── PostForm.jsx     # Used for both Create and Edit views
│   ├── Header.jsx
│   └── Pagination.jsx   # (Optional)
├── pages/           # Components mapped directly to routes
│   ├── PostList.jsx     # Route: /
│   ├── PostCreate.jsx   # Route: /posts/new
│   ├── PostEdit.jsx     # Route: /posts/:id/edit
│   └── PostView.jsx     # Route: /posts/:id
├── hooks/           # Custom hooks (e.g., useLocalStorage.js)
├── utils/           # Helper functions (e.g., validators.js, seedData.js)
├── App.jsx          # Main component and router configuration
└── main.jsx         # Entry point


## 🛣️ Routing

The application uses **React Router DOM** to manage navigation with the following structure:

| Path | Component | Description |
| :--- | :--- | :--- |
| `/` | `PostList` | The main dashboard; displays the list of posts, search, and filter options. |
| `/posts/new` | `PostCreate` | Form to create a brand new post. |
| `/posts/:id` | `PostView` | Displays the full content and details of a specific post. |
| `/posts/:id/edit` | `PostEdit` | Form to modify an existing post's data. |
| `*` | `NotFound` (Recommended) | Catch-all for undefined routes (404 page). |

---

## 💾 Data Persistence (The "Backend")

Posts are persisted in the browser's `localStorage` under the key: **`posts_data`**.

### Initial Seed Data

The application includes a `utils/seedData.js` file to ensure the application starts with at least **10 pre-loaded posts**. This initial data is inserted into `localStorage` only if no posts are found.

**Data Shape:**

```json
{
  "id": "uuid",
  "title": "A Great Post Title",
  "author": "Piyush",
  "content": "This is the long body text of the post...",
  "tags": ["react", "frontend", "crud"],
  "createdAt": "2025-07-01T10:00:00Z",
  "updatedAt": "2025-07-01T10:00:00Z"
}
